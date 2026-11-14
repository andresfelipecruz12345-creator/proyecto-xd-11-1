/* ============================================================
   CAMINA HACIA EL FUTURO — quiz.js
   Motor del cuestionario: puntuación por área, selección de
   cuestionario final, gestión de progreso, validaciones
   ============================================================ */

"use strict";

const Quiz = (() => {

  const STORAGE_KEY = () => {
    const sess = JSON.parse(localStorage.getItem("catf_session") || "null");
    return sess ? "catf_quiz_" + sess.correo : "catf_quiz_guest";
  };

  // ============================================================
  // ESTADO DEL QUIZ (persiste entre páginas)
  // ============================================================
  const getState = () => {
    const raw = localStorage.getItem(STORAGE_KEY());
    return raw ? JSON.parse(raw) : null;
  };

  const saveState = (state) => {
    localStorage.setItem(STORAGE_KEY(), JSON.stringify(state));
  };

  const clearState = () => {
    localStorage.removeItem(STORAGE_KEY());
  };

  // ============================================================
  // INICIAR NUEVO TEST
  // ============================================================
  const startNew = (flujo) => {
    if (flujo !== "Estudio" && flujo !== "Trabajo")
      throw new Error("flujo debe ser 'Estudio' o 'Trabajo'");

    const state = {
      flujo,
      fase: "generales",            // 'generales' | 'final' | 'resultados'
      preguntasGenerales: flujo === "Estudio"
        ? window.APP_DATA.PREGUNTAS_GENERALES_ESTUDIO
        : window.APP_DATA.PREGUNTAS_GENERALES_TRABAJO,
      respuestasGenerales: {},      // id_pregunta → índice opción elegida
      areaPuntajes: {},             // id_area → puntaje acumulado
      areaSeleccionada: null,       // área ganadora de preguntas generales
      cuestionarioFinal: null,      // objeto con titulo + preguntas
      respuestasFinal: {},          // id_pregunta → índice opción / texto
      resultados: null,             // objeto final calculado
      iniciado:   new Date().toISOString(),
    };
    saveState(state);
    return state;
  };

  // ============================================================
  // GUARDAR RESPUESTA GENERAL
  // ============================================================
  const guardarRespuestaGeneral = (preguntaId, opcionIndex) => {
    const state = getState();
    if (!state) return;
    state.respuestasGenerales[preguntaId] = opcionIndex;
    saveState(state);
  };

  // ============================================================
  // VALIDAR PREGUNTAS GENERALES (todas respondidas)
  // ============================================================
  const validarGenerales = () => {
    const state = getState();
    if (!state) return { ok: false, faltantes: [] };
    const faltantes = state.preguntasGenerales
      .filter(p => state.respuestasGenerales[p.id] === undefined)
      .map(p => p.id);
    return { ok: faltantes.length === 0, faltantes };
  };

  // ============================================================
  // CALCULAR ÁREA DOMINANTE Y OBTENER CUESTIONARIO FINAL
  // ============================================================
  const procesarGenerales = () => {
    const state = getState();
    if (!state) return null;

    const validacion = validarGenerales();
    if (!validacion.ok) return { ok: false, faltantes: validacion.faltantes };

    // Calcular puntajes por área
    const puntajes = {};
    window.APP_DATA.AREAS.forEach(a => { puntajes[a.id] = 0; });

    state.preguntasGenerales.forEach(pregunta => {
      const opcionIdx = state.respuestasGenerales[pregunta.id];
      if (opcionIdx === undefined) return;
      const opcion    = pregunta.opciones[opcionIdx];
      if (opcion && opcion.areas) {
        opcion.areas.forEach(areaId => {
          puntajes[areaId] = (puntajes[areaId] || 0) + 1;
        });
      }
    });

    // Determinar área con mayor puntaje
    let maxPuntaje   = 0;
    let areaGanadora = 1;
    Object.entries(puntajes).forEach(([areaId, pts]) => {
      if (pts > maxPuntaje) { maxPuntaje = pts; areaGanadora = parseInt(areaId); }
    });

    // Seleccionar cuestionario final según flujo
    const cuestionarios = state.flujo === "Estudio"
      ? window.APP_DATA.CUESTIONARIOS_FINALES_ESTUDIO
      : window.APP_DATA.CUESTIONARIOS_FINALES_TRABAJO;

    const cuestionario = cuestionarios[areaGanadora] || cuestionarios[1];

    state.areaPuntajes     = puntajes;
    state.areaSeleccionada = areaGanadora;
    state.cuestionarioFinal = cuestionario;
    state.fase              = "final";
    saveState(state);

    return { ok: true, areaId: areaGanadora, cuestionario };
  };

  // ============================================================
  // GUARDAR RESPUESTA FINAL (opción múltiple o texto)
  // ============================================================
  const guardarRespuestaFinal = (preguntaId, valor) => {
    const state = getState();
    if (!state) return;
    state.respuestasFinal[preguntaId] = valor;
    saveState(state);
  };

  // ============================================================
  // VALIDAR CUESTIONARIO FINAL (todas respondidas)
  // ============================================================
  const validarFinal = () => {
    const state = getState();
    if (!state || !state.cuestionarioFinal) return { ok: false, faltantes: [] };

    const faltantes = state.cuestionarioFinal.preguntas
      .filter(p => {
        const resp = state.respuestasFinal[p.id];
        if (resp === undefined || resp === null) return true;
        if (p.tipo === "texto_libre") {
          const palabras = resp.trim().split(/\s+/).filter(w => w.length > 0);
          return palabras.length < (p.minPalabras || 1);
        }
        return false;
      })
      .map(p => p.id);

    return { ok: faltantes.length === 0, faltantes };
  };

  // ============================================================
  // CALCULAR RESULTADOS FINALES
  // ============================================================
  const calcularResultados = () => {
    const state = getState();
    if (!state) return null;

    const validacion = validarFinal();
    if (!validacion.ok) return { ok: false, faltantes: validacion.faltantes };

    const preguntas = state.cuestionarioFinal.preguntas;
    let correctas   = 0;
    let total        = 0;
    const detalle   = [];

    preguntas.forEach(pregunta => {
      const respuesta = state.respuestasFinal[pregunta.id];

      if (pregunta.tipo === "opcion_multiple") {
        total++;
        const esCorrecta = respuesta === pregunta.correcta;
        if (esCorrecta) correctas++;
        detalle.push({
          id:              pregunta.id,
          texto:           pregunta.texto,
          opciones:        pregunta.opciones,
          respuestaUsuario:respuesta,
          respuestaCorrecta:pregunta.correcta,
          esCorrecta,
          tipo:            "opcion_multiple",
        });
      } else if (pregunta.tipo === "texto_libre") {
        // Preguntas de entrevista: se valoran por extensión y coherencia
        const palabras = respuesta ? respuesta.trim().split(/\s+/).filter(w => w.length > 0).length : 0;
        const puntoParcial = Math.min(palabras / (pregunta.minPalabras * 2), 1);
        correctas += puntoParcial;
        total++;
        detalle.push({
          id:              pregunta.id,
          texto:           pregunta.texto,
          respuestaUsuario:respuesta,
          puntoParcial:    Math.round(puntoParcial * 100),
          tipo:            "texto_libre",
        });
      }
    });

    const porcentaje = total > 0 ? Math.round((correctas / total) * 100) : 0;
    const califica   = porcentaje >= 60;

    // Obtener carrera / trabajo del área seleccionada
    const areaId = state.areaSeleccionada;
    const area   = window.APP_DATA.AREAS.find(a => a.id === areaId);

    // Obtener ubicaciones filtradas por ciudad del usuario
    const sess     = JSON.parse(localStorage.getItem("catf_session") || "null");
    const ciudad   = sess ? sess.ciudad.toLowerCase().trim() : "";

    let principal = null;
    let similares  = [];

    if (state.flujo === "Estudio") {
      const carreras = window.APP_DATA.CARRERAS[areaId] || [];
      principal      = carreras[0] || null;
      // Similares: primera carrera de áreas adyacentes
      const areasAdyacentes = [areaId - 1, areaId + 1].filter(x => x >= 1 && x <= 10);
      areasAdyacentes.forEach(adj => {
        const c = (window.APP_DATA.CARRERAS[adj] || [])[0];
        if (c) similares.push({ ...c, area: window.APP_DATA.AREAS.find(a => a.id === adj) });
      });

      // Universidades filtradas por ciudad
      const unisIds = principal ? (window.APP_DATA.UNIVERSIDAD_CARRERA[principal.id] || []) : [];
      const todasUnis = window.APP_DATA.UNIVERSIDADES;
      const uniFiltradas = todasUnis.filter(u =>
        unisIds.includes(u.id) &&
        (ciudad === "" || u.ciudad.includes(ciudad) || ciudad.includes(u.ciudad.split(" ")[0]))
      );
      const uniFallback = todasUnis.filter(u => unisIds.includes(u.id));

      state.resultados = {
        porcentaje,
        califica,
        areaId,
        area,
        flujo:       state.flujo,
        principal,
        similares,
        ubicaciones: uniFiltradas.length > 0 ? uniFiltradas : uniFallback.slice(0, 4),
        detalle,
        fecha:       new Date().toISOString(),
      };

    } else {
      // Trabajo
      const trabajos = window.APP_DATA.TRABAJOS[areaId] || [];
      principal      = trabajos[0] || null;
      const areasAdyacentes = [areaId - 1, areaId + 1].filter(x => x >= 1 && x <= 10);
      areasAdyacentes.forEach(adj => {
        const t = (window.APP_DATA.TRABAJOS[adj] || [])[0];
        if (t) similares.push({ ...t, area: window.APP_DATA.AREAS.find(a => a.id === adj) });
      });

      const empIds    = principal ? (window.APP_DATA.EMPRESA_TRABAJO[principal.id] || []) : [];
      const todasEmps = window.APP_DATA.EMPRESAS;
      const empFiltradas = todasEmps.filter(e =>
        empIds.includes(e.id) &&
        (ciudad === "" || e.ciudad.includes(ciudad) || ciudad.includes(e.ciudad.split(" ")[0]))
      );
      const empFallback = todasEmps.filter(e => empIds.includes(e.id));

      state.resultados = {
        porcentaje,
        califica,
        areaId,
        area,
        flujo:       state.flujo,
        principal,
        similares,
        ubicaciones: empFiltradas.length > 0 ? empFiltradas : empFallback.slice(0, 4),
        detalle,
        fecha:       new Date().toISOString(),
      };
    }

    state.fase = "resultados";
    state.id   = state.id || ("quiz_" + Date.now());
    saveState(state);

    // ---- Guardar en historial persistente ----
    const sess2 = JSON.parse(localStorage.getItem("catf_session") || "null");
    if (sess2) {
      const histKey2 = "catf_historial_" + sess2.correo.toLowerCase();
      let hist2 = [];
      try { hist2 = JSON.parse(localStorage.getItem(histKey2) || "[]"); } catch {}
      const yaExiste = hist2.some(h => h.id === state.id);
      if (!yaExiste) {
        const r = state.resultados;
        const areaObj = r.area || null;
        hist2.push({
          id:          state.id,
          flujo:       state.flujo,
          fecha:       r.fecha,
          porcentaje:  r.porcentaje,
          califica:    r.califica,
          areaNombre:  areaObj ? areaObj.nombre : "—",
          areaIcon:    areaObj ? areaObj.icon   : "📌",
          areaId:      areaObj ? areaObj.id     : null,
          areaPuntajes: state.areaPuntajes || {},
          principal:   r.principal
                         ? (r.principal.nombre || r.principal.titulo || "—")
                         : "—",
          // Detalle completo de respuestas (opción múltiple + texto libre)
          detalle:     (r.detalle || []).map(d => ({
            id:               d.id,
            texto:            d.texto,
            tipo:             d.tipo,
            // opcion_multiple
            opciones:         d.opciones         || null,
            respuestaUsuario: d.respuestaUsuario  !== undefined ? d.respuestaUsuario : null,
            respuestaCorrecta:d.respuestaCorrecta !== undefined ? d.respuestaCorrecta : null,
            esCorrecta:       d.esCorrecta        !== undefined ? d.esCorrecta : null,
            // texto_libre
            puntoParcial:     d.puntoParcial      !== undefined ? d.puntoParcial : null,
          })),
          // Resumen estadístico de las respuestas
          totalPreguntas:   detalle.length,
          correctas:        detalle.filter(d => d.esCorrecta === true).length,
          incorrectas:      detalle.filter(d => d.esCorrecta === false).length,
          textosLibres:     detalle.filter(d => d.tipo === "texto_libre").length,
        });
        localStorage.setItem(histKey2, JSON.stringify(hist2));
      }
    }

    return { ok: true, resultados: state.resultados };
  };

  // ============================================================
  // CANCELAR Y REINICIAR TEST
  // ============================================================
  const cancelar = () => {
    clearState();
  };

  // ============================================================
  // ACCESORES DE SOLO LECTURA
  // ============================================================
  const getFlujo          = ()  => { const s = getState(); return s ? s.flujo : null; };
  const getFase           = ()  => { const s = getState(); return s ? s.fase  : null; };
  const getArea           = ()  => { const s = getState(); return s ? s.areaSeleccionada : null; };
  const getResultados     = ()  => { const s = getState(); return s ? s.resultados : null; };
  const getCuestionarioFinal = () => { const s = getState(); return s ? s.cuestionarioFinal : null; };
  const getPreguntasGenerales = () => { const s = getState(); return s ? s.preguntasGenerales : []; };
  const getRespuestasGenerales = () => { const s = getState(); return s ? s.respuestasGenerales : {}; };
  const getRespuestasFinal    = ()  => { const s = getState(); return s ? s.respuestasFinal : {}; };

  return {
    startNew,
    getState,
    cancelar,
    guardarRespuestaGeneral,
    validarGenerales,
    procesarGenerales,
    guardarRespuestaFinal,
    validarFinal,
    calcularResultados,
    getFlujo,
    getFase,
    getArea,
    getResultados,
    getCuestionarioFinal,
    getPreguntasGenerales,
    getRespuestasGenerales,
    getRespuestasFinal,
  };
})();

window.Quiz = Quiz;
