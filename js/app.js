/* ============================================================
   CAMINA HACIA EL FUTURO — app.js
   Utilidades globales: tema, loading, navegación, PDF
   ============================================================ */

"use strict";

// ============================================================
// TEMA CLARO / OSCURO
// ============================================================
const Theme = (() => {
  const KEY = "catf_theme";

  const apply = (mode) => {
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem(KEY, mode);
    updateToggleIcons(mode);
  };

  const getCurrent = () => localStorage.getItem(KEY) || "light";

  const toggle = () => {
    const current = getCurrent();
    apply(current === "dark" ? "light" : "dark");
  };

  const init = () => {
    apply(getCurrent());
    document.querySelectorAll(".theme-toggle").forEach(btn => {
      btn.addEventListener("click", toggle);
    });
  };

  const updateToggleIcons = (mode) => {
    document.querySelectorAll(".theme-toggle").forEach(btn => {
      const icon = btn.querySelector(".theme-icon");
      if (icon) icon.textContent = mode === "dark" ? "☀️" : "🌙";
      const label = btn.querySelector(".theme-label");
      if (label) label.textContent = mode === "dark" ? "Modo claro" : "Modo oscuro";
    });
  };

  return { init, toggle, getCurrent, apply };
})();

// ============================================================
// LOADING OVERLAY
// ============================================================
const Loading = (() => {
  let overlay = null;

  const create = () => {
    if (document.getElementById("loading-overlay")) return;
    overlay = document.createElement("div");
    overlay.id = "loading-overlay";
    overlay.className = "loading-overlay";
    overlay.innerHTML = `
      <p class="loading-text">Cargando</p>
      <div class="loading-dots" aria-label="Cargando, por favor espera">
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
      </div>
    `;
    document.body.appendChild(overlay);
  };

  const show = () => {
    create();
    overlay = document.getElementById("loading-overlay");
    if (overlay) {
      overlay.classList.remove("fade-out", "hidden");
      overlay.style.display = "flex";
    }
  };

  const hide = (delay = 0) => {
    overlay = document.getElementById("loading-overlay");
    if (!overlay) return;
    setTimeout(() => {
      overlay.classList.add("fade-out");
      setTimeout(() => {
        if (overlay) overlay.style.display = "none";
      }, 400);
    }, delay);
  };

  return { show, hide };
})();

// ============================================================
// NAVEGACIÓN CON LOADING
// ============================================================
const Nav = (() => {
  const go = (url, delay = 500) => {
    Loading.show();
    setTimeout(() => { window.location.href = url; }, delay);
  };
  return { go };
})();

// ============================================================
// GENERADOR DE PDF (usa html2canvas + jsPDF via CDN)
// ============================================================
const PDFGen = (() => {
  const generate = async (resultados, usuario) => {
    if (!window.jspdf || !window.html2canvas) {
      console.warn("Librerías PDF no disponibles");
      return fallbackPDF(resultados, usuario);
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

    const W = 210, MARGIN = 18;
    let y = MARGIN;

    const line = (txt, size = 11, bold = false, color = [44, 35, 71]) => {
      doc.setFontSize(size);
      doc.setFont("helvetica", bold ? "bold" : "normal");
      doc.setTextColor(...color);
      const lines = doc.splitTextToSize(txt, W - MARGIN * 2);
      lines.forEach(l => {
        if (y > 270) { doc.addPage(); y = MARGIN; }
        doc.text(l, MARGIN, y);
        y += size * 0.45;
      });
      y += 2;
    };

    const hrLine = () => {
      doc.setDrawColor(180, 168, 220);
      doc.line(MARGIN, y, W - MARGIN, y);
      y += 5;
    };

    // ---- Encabezado ----
    doc.setFillColor(124, 92, 191);
    doc.rect(0, 0, W, 32, "F");
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255);
    doc.text("CAMINA HACIA EL FUTURO", MARGIN, 14);
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    doc.text("Reporte de Resultados del Cuestionario Vocacional", MARGIN, 22);
    doc.text(`Generado: ${new Date().toLocaleDateString("es-CO")}`, MARGIN, 29);
    y = 42;

    // ---- Datos del usuario ----
    line("DATOS DEL USUARIO", 13, true, [124, 92, 191]);
    hrLine();
    line(`Nombre: ${usuario.nombre}`);
    line(`Ciudad: ${usuario.ciudad}`);
    line(`Tipo de Evaluación: ${resultados.flujo.toUpperCase()}`);
    line(`Área Vocacional: ${resultados.area ? resultados.area.nombre : "—"}`);
    y += 3;

    // ---- Resultado Principal ----
    line("RESULTADO PRINCIPAL", 13, true, [124, 92, 191]);
    hrLine();
    line(`${resultados.flujo === "Estudio" ? "Carrera Recomendada" : "Puesto Recomendado"}: ${resultados.principal ? resultados.principal.nombre || resultados.principal.titulo : "—"}`, 12, true);
    line(`Puntaje obtenido: ${resultados.porcentaje}%`);
    line(`¿Califica?: ${resultados.califica ? "✅ SÍ CALIFICA" : "⚠️ No califica en esta ocasión"}`, 12, true, resultados.califica ? [102, 187, 106] : [229, 115, 115]);
    if (resultados.principal && resultados.principal.descripcion) {
      line(`Descripción: ${resultados.principal.descripcion}`);
    }
    y += 3;

    // ---- Ubicaciones ----
    if (resultados.ubicaciones && resultados.ubicaciones.length > 0) {
      const titulo = resultados.flujo === "Estudio" ? "UNIVERSIDADES RECOMENDADAS EN TU CIUDAD" : "EMPRESAS DONDE PUEDES APLICAR";
      line(titulo, 13, true, [91, 168, 245]);
      hrLine();
      resultados.ubicaciones.forEach((loc, i) => {
        line(`${i + 1}. ${loc.nombre || loc.nombre_empresa}`, 11, true);
        line(`   📍 ${loc.direccion || loc.ubicacion || "Ver en web"}`);
        if (loc.tipo) line(`   Tipo: ${loc.tipo}${loc.ofrece_becas ? " | Ofrece becas ✓" : ""}`);
        y += 1;
      });
    }
    y += 3;

    // ---- Opciones similares ----
    if (resultados.similares && resultados.similares.length > 0) {
      const tit2 = resultados.flujo === "Estudio" ? "OTRAS CARRERAS QUE PODRÍAS EXPLORAR" : "OTROS TRABAJOS QUE PODRÍAS EXPLORAR";
      line(tit2, 13, true, [93, 191, 138]);
      hrLine();
      resultados.similares.forEach((s, i) => {
        line(`${i + 1}. ${s.nombre || s.titulo}`, 11, true);
        if (s.descripcion) line(`   ${s.descripcion}`);
      });
      y += 3;
    }

    // ---- Detalle de respuestas ----
    line("DETALLE DE RESPUESTAS DEL CUESTIONARIO FINAL", 13, true, [124, 92, 191]);
    hrLine();
    resultados.detalle.forEach((item, i) => {
      if (y > 255) { doc.addPage(); y = MARGIN; }
      if (item.tipo === "opcion_multiple") {
        const estado = item.esCorrecta ? "✓" : "✗";
        line(`${i + 1}. ${item.texto}`, 10, true);
        line(`   Tu respuesta: ${item.opciones[item.respuestaUsuario] || "—"} ${estado}`, 9, false, item.esCorrecta ? [102, 187, 106] : [229, 115, 115]);
        if (!item.esCorrecta) {
          line(`   Respuesta correcta: ${item.opciones[item.respuestaCorrecta]}`, 9, false, [93, 191, 138]);
        }
      } else {
        line(`${i + 1}. ${item.texto}`, 10, true);
        const txtCorto = (item.respuestaUsuario || "").substring(0, 120);
        line(`   Tu respuesta: "${txtCorto}${txtCorto.length < (item.respuestaUsuario || "").length ? "..." : ""}"`, 9);
      }
      y += 2;
    });

    // ---- Footer ----
    const totalPages = doc.internal.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);
      doc.setFontSize(8);
      doc.setTextColor(158, 144, 184);
      doc.text(`Camina hacia el Futuro — Página ${i} de ${totalPages}`, MARGIN, 290);
      doc.text("Este reporte es orientativo, no vinculante.", W / 2, 290, { align: "center" });
    }

    doc.save(`resultados_${resultados.flujo.toLowerCase()}_${usuario.nombre.replace(/\s+/g, "_")}.pdf`);
  };

  // Fallback si no hay librerías
  const fallbackPDF = (resultados, usuario) => {
    let content = `CAMINA HACIA EL FUTURO\nReporte de Resultados\n\n`;
    content += `Usuario: ${usuario.nombre}\nCiudad: ${usuario.ciudad}\n`;
    content += `Tipo: ${resultados.flujo}\nPuntaje: ${resultados.porcentaje}%\n`;
    content += `Califica: ${resultados.califica ? "SÍ" : "NO"}\n\n`;
    if (resultados.principal) {
      content += `Recomendación: ${resultados.principal.nombre || resultados.principal.titulo}\n\n`;
    }
    const blob = new Blob([content], { type: "text/plain" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    a.href = url; a.download = "resultados.txt"; a.click();
    URL.revokeObjectURL(url);
  };

  return { generate };
})();

// ============================================================
// TOAST / NOTIFICACIÓN RÁPIDA
// ============================================================
const Toast = (() => {
  const show = (message, type = "info", duration = 3500) => {
    const existing = document.getElementById("toast-container");
    if (existing) existing.remove();

    const container = document.createElement("div");
    container.id = "toast-container";
    container.style.cssText = `
      position:fixed; bottom:24px; right:24px; z-index:9999;
      max-width:320px;
    `;

    const icons = { info: "ℹ️", success: "✅", error: "❌", warning: "⚠️" };
    const colors = {
      info:    "var(--color-study-light); border:1px solid var(--color-study);",
      success: "var(--color-success-light); border:1px solid var(--color-success);",
      error:   "var(--color-danger-light); border:1px solid var(--color-danger);",
      warning: "#FFF8E1; border:1px solid var(--color-accent);",
    };

    container.innerHTML = `
      <div style="background:${colors[type]}; padding:14px 18px; border-radius:12px;
                  display:flex; align-items:flex-start; gap:10px; box-shadow:var(--shadow-md);
                  animation:fadeInUp 0.3s ease; font-family:var(--font-family);">
        <span style="font-size:1.1rem; flex-shrink:0;">${icons[type] || icons.info}</span>
        <p style="margin:0; font-size:0.9rem; color:var(--color-text-primary); line-height:1.5;">${message}</p>
      </div>
    `;
    document.body.appendChild(container);
    setTimeout(() => { if (container) container.remove(); }, duration);
  };
  return { show };
})();

// ============================================================
// INICIALIZACIÓN GLOBAL
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  Theme.init();

  // Mostrar/ocultar elementos según sesión
  const user = window.Auth ? window.Auth.getCurrentUser() : null;
  document.querySelectorAll("[data-auth-show]").forEach(el => {
    el.style.display = user ? "" : "none";
  });
  document.querySelectorAll("[data-auth-hide]").forEach(el => {
    el.style.display = user ? "none" : "";
  });

  // Rellenar nombre en header si existe
  if (user) {
    document.querySelectorAll(".user-name-display").forEach(el => {
      el.textContent = user.nombre.split(" ")[0];
    });
  }

  // Cerrar sesión global
  document.querySelectorAll(".btn-logout").forEach(btn => {
    btn.addEventListener("click", () => {
      if (confirm("¿Seguro/a que quieres cerrar sesión?")) {
        window.Auth.logout();
        Nav.go("index.html", 200);
      }
    });
  });

  // Ocultar loading inicial
  Loading.hide(200);
});

window.Theme  = Theme;
window.Loading = Loading;
window.Nav    = Nav;
window.PDFGen = PDFGen;
window.Toast  = Toast;
