# Guía Técnica — Camina hacia el Futuro

## Arquitectura del Sistema

### Capa Frontend (actual — 100% funcional)

```
┌─────────────────────────────────────────────────────────┐
│                   NAVEGADOR DEL USUARIO                  │
│                                                          │
│  index.html → eleccion.html → preguntas-generales.html   │
│      ↓              ↓                    ↓               │
│  auth.js         quiz.js              quiz.js            │
│  (registro/     (startNew)          (guardarResp)        │
│   login)                                 ↓               │
│                                  cuestionario-final.html │
│                                         ↓                │
│                               quiz.calcularResultados()  │
│                                         ↓                │
│                                   resultados.html        │
│                                   PDFGen.generate()      │
│                                                          │
│  data.js ← Base de datos local (seed data)               │
│  app.js  ← Tema, Loading, Nav, Toast                     │
└─────────────────────────────────────────────────────────┘
```

### Capa Backend (producción futura — Flask + MySQL)

```
┌──────────────────────────────────────────────────────────┐
│                  SERVIDOR (Flask/Gunicorn)                │
│                                                          │
│  /api/auth/register  → UserController.register()         │
│  /api/auth/login     → UserController.login()            │
│  /api/quiz/start     → QuizController.start()            │
│  /api/quiz/general   → QuizController.saveGeneral()      │
│  /api/quiz/process   → QuizEngine.processGeneral()       │
│  /api/quiz/final     → QuizController.saveFinal()        │
│  /api/quiz/results   → QuizEngine.calculateResults()     │
│  /api/results/pdf    → PDFService.generate()             │
│                                                          │
│  QuizEngine:                                             │
│  - Calcula puntaje por AreaVocacional                    │
│  - Selecciona cuestionario final por área dominante      │
│  - Filtra universidades/empresas por ciudad del usuario  │
└────────────────────┬─────────────────────────────────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │      MySQL 8          │
         │  Tablas: Usuario,     │
         │  IntentoTest,         │
         │  Pregunta,            │
         │  OpcionRespuesta,     │
         │  AreaVocacional,      │
         │  Carrera, Universidad,│
         │  Universidad_Carrera, │
         │  Empresa, OfertaLab.  │
         └───────────────────────┘
```

---

## Algoritmo de Selección de Cuestionario Final

### Paso 1 — Acumulación de puntajes por área

```javascript
// Por cada respuesta general:
const opcion = pregunta.opciones[respuestaUsuario];
opcion.areas.forEach(areaId => {
  puntajes[areaId] += 1;
});
```

Cada opción de respuesta tiene un array `areas: []` con los IDs de las áreas vocacionales que refuerza. Al elegir una opción, se suman puntos a todas las áreas mencionadas.

### Paso 2 — Determinar área ganadora

```javascript
let maxPuntaje = 0, areaGanadora = 1;
Object.entries(puntajes).forEach(([areaId, pts]) => {
  if (pts > maxPuntaje) {
    maxPuntaje = pts;
    areaGanadora = parseInt(areaId);
  }
});
```

### Paso 3 — Seleccionar cuestionario final

```javascript
const cuestionario = flujo === "Estudio"
  ? CUESTIONARIOS_FINALES_ESTUDIO[areaGanadora]
  : CUESTIONARIOS_FINALES_TRABAJO[areaGanadora];
```

Cada área tiene su propio cuestionario final con 30 preguntas específicas.

---

## Algoritmo de Cálculo de Resultados

### Preguntas de selección múltiple
```javascript
const esCorrecta = respuestaUsuario === pregunta.correcta;
if (esCorrecta) correctas++;
```

### Preguntas de texto libre (entrevista)
```javascript
const palabras = respuesta.trim().split(/\s+/).length;
const puntoParcial = Math.min(palabras / (minPalabras * 2), 1);
correctas += puntoParcial;
```
Se valora por extensión y coherencia relativa al mínimo requerido.

### Puntaje final
```javascript
const porcentaje = Math.round((correctas / total) * 100);
const califica   = porcentaje >= 60; // Umbral configurable
```

---

## Filtrado de Ubicaciones por Ciudad

```javascript
const ciudad = session.ciudad.toLowerCase();
const ubicacionesFiltradas = todasUbicaciones.filter(u =>
  u.ciudad.includes(ciudad) || ciudad.includes(u.ciudad.split(" ")[0])
);
// Fallback: si no hay en la ciudad, mostrar las primeras 4 disponibles
const resultado = filtradas.length > 0 ? filtradas : fallback.slice(0, 4);
```

---

## Estructura del localStorage

```
catf_session → { correo, nombre, ciudad, createdAt }
catf_users   → { [correo]: { id, nombre, correo, contrasenaHash, ciudad, edad, ... } }
catf_quiz_{correo} → {
  flujo: "Estudio" | "Trabajo",
  fase: "generales" | "final" | "resultados",
  preguntasGenerales: [...],
  respuestasGenerales: { [preguntaId]: opcionIndex },
  areaPuntajes: { [areaId]: puntos },
  areaSeleccionada: number,
  cuestionarioFinal: { titulo, preguntas: [...] },
  respuestasFinal: { [preguntaId]: opcionIndex | texto },
  resultados: { porcentaje, califica, ... },
  iniciado: ISO8601
}
catf_auth_logs → [{ timestamp, type, message, ... }]
catf_theme     → "light" | "dark"
```

---

## Validaciones Implementadas

| Campo | Validación |
|-------|-----------|
| Nombre | `length >= 2` |
| Correo | Regex RFC 5322 simplificado |
| Contraseña | `length >= 8` |
| Contraseña confirmada | `=== contraseña` |
| Ciudad | `length >= 2` |
| Edad | `14 <= edad <= 35` |
| Teléfono | Opcional, `7-15 dígitos` si se ingresa |
| Preguntas generales | Todas obligatorias antes de avanzar |
| Preguntas finales | Todas obligatorias (opción múltiple: índice; texto: minPalabras) |

---

## Guía para Agregar Contenido

### Nueva área vocacional
1. Agregar a `AREAS` en `data.js`
2. Crear preguntas generales que apunten al nuevo `id`
3. Crear cuestionario final en `CUESTIONARIOS_FINALES_ESTUDIO` y `CUESTIONARIOS_FINALES_TRABAJO`
4. Agregar carreras en `CARRERAS` y trabajos en `TRABAJOS`
5. Agregar universidades en `UNIVERSIDADES` y `UNIVERSIDAD_CARRERA`

### Nueva ciudad
Agregar universidades y empresas con `ciudad: "nueva_ciudad"` (en minúsculas).

---

## Notas de Seguridad (Frontend)

- Las contraseñas se guardan hasheadas (no en texto plano)
- En producción Flask: usar `werkzeug.security.generate_password_hash` con bcrypt
- Los datos de sesión en `localStorage` son visibles para el usuario — no almacenar tokens sensibles
- En producción: usar cookies `HttpOnly + Secure` con Flask-Login

---

## Pruebas Manuales Recomendadas

| Test | Pasos | Resultado Esperado |
|------|-------|-------------------|
| Registro nuevo | Llenar todos los campos, crear cuenta | Redirige a elección |
| Contraseña corta | Ingresar < 8 chars | Error visible bajo el campo |
| Correo duplicado | Registrar con email ya existente | Mensaje de error claro |
| Login exitoso | Email + contraseña correctos | Redirige a elección |
| Login fallido | Contraseña incorrecta | "Lo siento, no pudimos encontrar tu cuenta..." |
| Iniciar sin elegir | Clic en Iniciar Test sin Estudio/Trabajo | Botón deshabilitado |
| Saltar pregunta | Clic en Siguiente con preguntas vacías | Error encima de cada pregunta faltante |
| Flujo completo Estudio | 20+30 preguntas → resultados | PDF descargable, ubicaciones mostradas |
| Flujo completo Trabajo | 20+30 preguntas → resultados | Entrevista, puntaje, empresas |
| Modo oscuro | Toggle botón luna/sol | Colores cambian suavemente |
| Responsive móvil | Cambiar a 375px en DevTools | Layout adaptado correctamente |
| Cancelar test | Clic en Cancelar → Sí | Vuelve a Elección, estado limpio |
