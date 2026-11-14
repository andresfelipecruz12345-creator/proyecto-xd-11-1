/* ============================================================
   CAMINA HACIA EL FUTURO — Base de datos local (frontend)
   Simula el motor de datos del backend (MySQL en producción)
   Áreas vocacionales, preguntas, carreras, trabajos,
   universidades y empresas seed data.
   ============================================================ */

"use strict";

// ============================================================
// ÁREAS VOCACIONALES
// ============================================================
const AREAS = [
  { id: 1, nombre: "Tecnología e Informática",   icon: "💻" },
  { id: 2, nombre: "Salud y Ciencias Médicas",   icon: "🩺" },
  { id: 3, nombre: "Arte y Diseño",              icon: "🎨" },
  { id: 4, nombre: "Negocios y Administración",  icon: "📊" },
  { id: 5, nombre: "Educación y Humanidades",    icon: "📚" },
  { id: 6, nombre: "Ingeniería y Construcción",  icon: "🔧" },
  { id: 7, nombre: "Gastronomía y Hotelería",    icon: "🍳" },
  { id: 8, nombre: "Derecho y Ciencias Sociales",icon: "⚖️" },
  { id: 9, nombre: "Comunicación y Medios",      icon: "📡" },
  { id: 10, nombre: "Ciencias Naturales",        icon: "🔬" },
];

// ============================================================
// PREGUNTAS GENERALES — ESTUDIO (20 preguntas)
// categoria_flujo = 'Estudio' | 'General'
// ============================================================
const PREGUNTAS_GENERALES_ESTUDIO = [
  {
    id: "GE01", texto: "¿Cuál era la materia que más disfrutabas en el colegio?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Matemáticas / Física", areas: [1, 6] },
      { texto: "Biología / Química",   areas: [2, 10] },
      { texto: "Artes / Educación visual", areas: [3] },
      { texto: "Economía / Contabilidad", areas: [4] },
      { texto: "Historia / Filosofía / Ética", areas: [5, 8] },
      { texto: "Tecnología / Informática", areas: [1] },
      { texto: "Español / Literatura / Periodismo", areas: [9, 5] },
      { texto: "Cocina / Talleres prácticos", areas: [7] },
    ]
  },
  {
    id: "GE02", texto: "¿En qué actividad te sientes más cómodo/a trabajando?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Resolver problemas lógicos o matemáticos", areas: [1, 6] },
      { texto: "Ayudar o cuidar a otras personas", areas: [2, 5] },
      { texto: "Crear cosas visuales o artísticas", areas: [3, 9] },
      { texto: "Organizar proyectos y liderar equipos", areas: [4] },
      { texto: "Investigar, leer y analizar información", areas: [5, 8, 10] },
      { texto: "Cocinar, servir o planificar eventos", areas: [7] },
      { texto: "Construir, reparar o diseñar estructuras", areas: [6] },
    ]
  },
  {
    id: "GE03", texto: "Imagina que tienes un fin de semana libre. ¿Qué preferirías hacer?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Jugar videojuegos o programar algo", areas: [1] },
      { texto: "Ver documentales de ciencia o naturaleza", areas: [2, 10] },
      { texto: "Pintar, dibujar, diseñar o fotografiar", areas: [3] },
      { texto: "Emprender un pequeño negocio o evento", areas: [4, 7] },
      { texto: "Leer o debatir sobre temas sociales", areas: [5, 8] },
      { texto: "Armar, construir o hacer manualidades", areas: [6] },
      { texto: "Hacer videos, podcasts o escribir blogs", areas: [9] },
    ]
  },
  {
    id: "GE04", texto: "¿Cuál de estas frases describe mejor cómo te ves a los 30 años?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Trabajando en tecnología o desarrollando software", areas: [1] },
      { texto: "Salvando vidas como médico/a o enfermero/a", areas: [2] },
      { texto: "Dirigiendo mi propia empresa o proyecto", areas: [4] },
      { texto: "Enseñando, investigando o escribiendo", areas: [5] },
      { texto: "Diseñando edificios, puentes o máquinas", areas: [6] },
      { texto: "Creando arte, diseño o contenido digital", areas: [3, 9] },
      { texto: "En el mundo legal o del servicio público", areas: [8] },
      { texto: "Chef o dueño/a de un restaurante", areas: [7] },
    ]
  },
  {
    id: "GE05", texto: "¿Qué tipo de retos te gustan más?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Depurar código o resolver ecuaciones", areas: [1, 6] },
      { texto: "Diagnosticar enfermedades o cuidar la salud", areas: [2] },
      { texto: "Dar vida a una idea visual o narrativa", areas: [3, 9] },
      { texto: "Negociar, convencer y liderar", areas: [4, 8] },
      { texto: "Entender por qué la sociedad funciona así", areas: [5, 8] },
      { texto: "Construir algo físico con mis manos", areas: [6, 7] },
      { texto: "Experimentar con recetas o fórmulas", areas: [7, 10] },
    ]
  },
  {
    id: "GE06", texto: "¿En qué materia obtenías las mejores notas de forma consistente?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Matemáticas",      areas: [1, 6] },
      { texto: "Ciencias naturales", areas: [2, 10] },
      { texto: "Artes plásticas",  areas: [3] },
      { texto: "Ciencias sociales / Economía", areas: [4, 8] },
      { texto: "Lenguaje / Literatura", areas: [5, 9] },
      { texto: "Física",           areas: [6, 1] },
      { texto: "Tecnología",       areas: [1] },
      { texto: "Ed. Física / Talleres", areas: [7] },
    ]
  },
  {
    id: "GE07", texto: "Cuando un amigo necesita consejo, ¿qué tipo de consejo sueles dar mejor?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Técnico: 'Prueba con este software o herramienta'", areas: [1] },
      { texto: "De salud: 'Deberías ir al médico o hacer esto'", areas: [2] },
      { texto: "Creativo: 'Hazlo de esta manera visual o artística'", areas: [3, 9] },
      { texto: "Empresarial: 'Monetiza eso o crea tu marca'", areas: [4] },
      { texto: "Emocional y reflexivo: escucho y analizo profundo", areas: [5, 8] },
      { texto: "Práctico: 'Te ayudo a arreglar o construir eso'", areas: [6, 7] },
    ]
  },
  {
    id: "GE08", texto: "¿Cuál de los siguientes escenarios te emociona más?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Programar una app que use millones de personas", areas: [1] },
      { texto: "Descubrir una cura para una enfermedad", areas: [2, 10] },
      { texto: "Exponer mi arte en una galería o museo", areas: [3] },
      { texto: "Abrir mi propia empresa rentable", areas: [4] },
      { texto: "Publicar un libro o ganar un debate", areas: [5, 9] },
      { texto: "Diseñar un edificio o un puente famoso", areas: [6] },
      { texto: "Ser el chef de un restaurante premiado", areas: [7] },
      { texto: "Defender una causa justa en los tribunales", areas: [8] },
    ]
  },
  {
    id: "GE09", texto: "¿Cómo describes tu forma de aprender?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Practicando y experimentando (aprendo haciendo)", areas: [1, 6, 7] },
      { texto: "Leyendo y analizando textos a profundidad", areas: [5, 8] },
      { texto: "Escuchando explicaciones y tomando notas", areas: [2, 4] },
      { texto: "Viendo, dibujando o visualizando ideas", areas: [3, 9] },
      { texto: "Debatiendo y discutiendo con otros", areas: [8, 9] },
      { texto: "Con fórmulas, esquemas y diagramas", areas: [1, 6, 10] },
    ]
  },
  {
    id: "GE10", texto: "¿Qué tipo de personas admiras más?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Inventores y programadores como Elon Musk o Mark Zuckerberg", areas: [1, 6] },
      { texto: "Médicos, científicos como Marie Curie", areas: [2, 10] },
      { texto: "Artistas, diseñadores, directores de cine", areas: [3, 9] },
      { texto: "Empresarios y emprendedores", areas: [4] },
      { texto: "Profesores, filósofos, escritores", areas: [5] },
      { texto: "Ingenieros, arquitectos, constructores", areas: [6] },
      { texto: "Chefs reconocidos como Gordon Ramsay", areas: [7] },
      { texto: "Jueces, abogados, líderes políticos", areas: [8] },
    ]
  },
  {
    id: "GE11", texto: "¿Qué tan bien manejas los números y los cálculos?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Excelente, me gustan mucho las matemáticas", areas: [1, 4, 6] },
      { texto: "Bien, no me molestan pero no son mi pasión", areas: [2, 10] },
      { texto: "Regular, prefiero trabajar con palabras o imágenes", areas: [3, 5, 9] },
      { texto: "Mal, definitivamente no es lo mío", areas: [7, 8] },
    ]
  },
  {
    id: "GE12", texto: "¿Cómo te lleva mejor trabajar?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Solo/a, concentrado/a y enfocado/a", areas: [1, 3, 10] },
      { texto: "En equipo pequeño y organizado", areas: [2, 6] },
      { texto: "Liderando un grupo de personas", areas: [4, 8] },
      { texto: "Con el público o atendiendo a personas directamente", areas: [5, 7, 9] },
    ]
  },
  {
    id: "GE13", texto: "¿Qué tipo de proyectos harías con gusto en tu tiempo libre?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Una app o página web", areas: [1] },
      { texto: "Un experimento científico en casa", areas: [2, 10] },
      { texto: "Una ilustración, mural o diseño gráfico", areas: [3] },
      { texto: "Un plan de negocio o presupuesto", areas: [4] },
      { texto: "Un ensayo, novela o guión", areas: [5, 9] },
      { texto: "Muebles, maquetas o arreglos en casa", areas: [6] },
      { texto: "Preparar una cena o postres especiales", areas: [7] },
      { texto: "Investigar derechos y hacer peticiones", areas: [8] },
    ]
  },
  {
    id: "GE14", texto: "Si pudieras viajar para estudiar, ¿qué tipo de lugar escogerías?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Silicon Valley o un hub tecnológico", areas: [1] },
      { texto: "Una prestigiosa universidad de medicina", areas: [2] },
      { texto: "Una escuela de arte o conservatorio", areas: [3, 9] },
      { texto: "Harvard Business School", areas: [4] },
      { texto: "Una universidad con gran tradición humanista", areas: [5, 8] },
      { texto: "Instituto de ingeniería de vanguardia", areas: [6] },
      { texto: "Le Cordon Bleu u otra escuela de cocina", areas: [7] },
    ]
  },
  {
    id: "GE15", texto: "¿Cuánto te importa el impacto social de tu trabajo?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Mucho, quiero cambiar vidas directamente", areas: [2, 5, 8] },
      { texto: "Sí, pero también quiero ganar bien", areas: [4, 1] },
      { texto: "Me importa que mi obra perdure en el tiempo", areas: [3, 6] },
      { texto: "Prefiero enfocarse en hacer un trabajo excelente", areas: [7, 10] },
      { texto: "Me da igual mientras sea interesante y me motive", areas: [9] },
    ]
  },
  {
    id: "GE16", texto: "¿Qué tipo de ambiente de trabajo describes como ideal?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Oficina moderna o trabajo remoto desde casa", areas: [1, 4] },
      { texto: "Hospital, clínica o laboratorio", areas: [2, 10] },
      { texto: "Estudio de diseño, galería o set de producción", areas: [3, 9] },
      { texto: "Al aire libre, en obras o campo", areas: [6] },
      { texto: "Cocina, restaurante o hotel", areas: [7] },
      { texto: "Juzgado, institución o aula de clases", areas: [8, 5] },
    ]
  },
  {
    id: "GE17", texto: "¿Qué tan cómodo/a te sientes con la tecnología?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Muy cómodo/a, aprendo rápido cualquier programa", areas: [1, 9] },
      { texto: "Bien, uso las herramientas necesarias", areas: [2, 4, 3] },
      { texto: "Regular, me adapto pero no es lo primero", areas: [5, 8] },
      { texto: "Prefiero el trabajo manual o presencial", areas: [6, 7] },
    ]
  },
  {
    id: "GE18", texto: "¿Qué frase refleja mejor tu personalidad?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Soy curioso/a, me gusta entender cómo funciona todo", areas: [1, 6, 10] },
      { texto: "Soy empático/a y me importa el bienestar ajeno", areas: [2, 5] },
      { texto: "Soy creativo/a, siempre pienso fuera de la caja", areas: [3, 9] },
      { texto: "Soy ambicioso/a y me gusta liderar", areas: [4, 8] },
      { texto: "Soy organizado/a y metódico/a", areas: [4, 6] },
      { texto: "Soy apasionado/a por el sabor y la experiencia", areas: [7] },
    ]
  },
  {
    id: "GE19", texto: "¿Qué clase de habilidades sientes que tienes de forma natural?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Lógica y resolución de problemas", areas: [1, 6] },
      { texto: "Empatía y comunicación humana", areas: [2, 5] },
      { texto: "Sentido estético y creatividad visual", areas: [3] },
      { texto: "Liderazgo y organización", areas: [4, 8] },
      { texto: "Escritura, oratoria y narración", areas: [5, 9] },
      { texto: "Destreza manual y construcción", areas: [6, 7] },
      { texto: "Observación y análisis detallado", areas: [10, 1] },
    ]
  },
  {
    id: "GE20", texto: "Imagina que ganas un concurso donde puedes aprender algo de forma gratuita. ¿Qué elegirías?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Programación o inteligencia artificial", areas: [1] },
      { texto: "Primeros auxilios o nutrición", areas: [2] },
      { texto: "Ilustración, animación o fotografía", areas: [3] },
      { texto: "Finanzas o marketing digital", areas: [4] },
      { texto: "Escritura creativa o historia", areas: [5] },
      { texto: "Diseño estructural o carpintería avanzada", areas: [6] },
      { texto: "Alta cocina o repostería", areas: [7] },
      { texto: "Oratoria o derecho básico", areas: [8] },
      { texto: "Periodismo o producción audiovisual", areas: [9] },
      { texto: "Química o biología avanzada", areas: [10] },
    ]
  },
];

// ============================================================
// PREGUNTAS GENERALES — TRABAJO (20 preguntas)
// ============================================================
const PREGUNTAS_GENERALES_TRABAJO = [
  {
    id: "GT01", texto: "¿Qué tipo de trabajo describes como 'ideal para ti'?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Técnico: frente a computador resolviendo problemas", areas: [1] },
      { texto: "Asistencial: cuidando la salud de personas", areas: [2] },
      { texto: "Creativo: diseñando, ilustrando o filmando", areas: [3, 9] },
      { texto: "Empresarial: vendiendo, negociando y gestionando", areas: [4] },
      { texto: "Educativo: enseñando o asesorando", areas: [5] },
      { texto: "Físico: construyendo, instalando o reparando", areas: [6] },
      { texto: "Culinario: cocinando o atendiendo en hostelería", areas: [7] },
      { texto: "Comunicación: en medios, redes o relaciones públicas", areas: [9] },
    ]
  },
  {
    id: "GT02", texto: "¿Qué tan bien trabajas bajo presión y con plazos ajustados?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Excelente, la presión me activa y rindo mejor", areas: [1, 4, 9] },
      { texto: "Bien, me organizo y cumplo aunque cueste", areas: [2, 6] },
      { texto: "Regular, necesito tiempo para hacer las cosas con calidad", areas: [3, 5] },
      { texto: "Prefiero entornos tranquilos y sin urgencias", areas: [10, 7] },
    ]
  },
  {
    id: "GT03", texto: "¿Cuál es tu mayor fortaleza laboral?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Resolución rápida de problemas técnicos", areas: [1, 6] },
      { texto: "Trato amable y empatía con las personas", areas: [2, 5, 7] },
      { texto: "Creatividad e innovación constante", areas: [3, 9] },
      { texto: "Organización, planificación y liderazgo", areas: [4] },
      { texto: "Atención al detalle y precisión", areas: [10, 8] },
      { texto: "Fuerza física y resistencia", areas: [6] },
    ]
  },
  {
    id: "GT04", texto: "¿Qué tipo de tareas no te importaría hacer todos los días?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Escribir código o depurar sistemas", areas: [1] },
      { texto: "Atender pacientes o revisar historiales clínicos", areas: [2] },
      { texto: "Crear diseños, editar fotos o filmar", areas: [3, 9] },
      { texto: "Responder clientes, hacer reportes de ventas", areas: [4] },
      { texto: "Preparar clases o materiales didácticos", areas: [5] },
      { texto: "Trabajar en obra o hacer instalaciones", areas: [6] },
      { texto: "Cocinar, organizar pedidos o atender mesas", areas: [7] },
      { texto: "Redactar, investigar o comunicar noticias", areas: [9] },
    ]
  },
  {
    id: "GT05", texto: "¿Con qué tipo de personas prefieres trabajar?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Colegas técnicos y especializados", areas: [1, 10] },
      { texto: "Pacientes, estudiantes o personas que necesitan ayuda", areas: [2, 5] },
      { texto: "Equipos creativos y colaborativos", areas: [3, 9] },
      { texto: "Ejecutivos, clientes y socios de negocio", areas: [4] },
      { texto: "Obreros y equipos de campo", areas: [6] },
      { texto: "El público general en servicios", areas: [7] },
    ]
  },
  {
    id: "GT06", texto: "¿Qué tipo de actividad física implica tu trabajo ideal?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Trabajo sedentario, mayormente en escritorio", areas: [1, 4, 9] },
      { texto: "De pie buena parte del día atendiendo personas", areas: [2, 7] },
      { texto: "Trabajo en campo o sitio de construcción", areas: [6] },
      { texto: "Moderado, mezcla de oficina y campo", areas: [5, 8] },
      { texto: "No me importa mientras el trabajo sea interesante", areas: [3, 10] },
    ]
  },
  {
    id: "GT07", texto: "¿Cuál de estas situaciones manejarías mejor en el trabajo?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Un sistema que no funciona y hay que repararlo urgente", areas: [1, 6] },
      { texto: "Un paciente o persona que necesita ayuda inmediata", areas: [2, 5] },
      { texto: "Un cliente que no le gusta el diseño y pide cambios", areas: [3] },
      { texto: "Un negocio que está perdiendo ventas y hay que salvarlo", areas: [4] },
      { texto: "Un evento que salió mal y hay que improvisar", areas: [7, 9] },
    ]
  },
  {
    id: "GT08", texto: "¿Cuánto valoras la estabilidad económica en tu primer trabajo?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Es lo más importante, necesito un salario fijo", areas: [2, 6, 4] },
      { texto: "Importante, pero también valoro el aprendizaje", areas: [1, 5] },
      { texto: "Primero el desarrollo, lo económico vendrá solo", areas: [3, 9] },
      { texto: "Prefiero emprender aunque gane menos al inicio", areas: [4, 7] },
    ]
  },
  {
    id: "GT09", texto: "¿Cómo te describes cuando enfrentas un problema nuevo?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Analizo todo con calma antes de actuar", areas: [1, 10] },
      { texto: "Busco consejo o recursos antes de decidir", areas: [2, 5] },
      { texto: "Improviso y busco soluciones creativas", areas: [3, 9] },
      { texto: "Tomo la rienda y delego tareas", areas: [4, 8] },
      { texto: "Aprendo rápido sobre la marcha", areas: [6, 7] },
    ]
  },
  {
    id: "GT10", texto: "¿Cuál de estas habilidades blandas es tu punto más fuerte?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Comunicación clara y asertiva", areas: [4, 5, 9] },
      { texto: "Trabajo en equipo y colaboración", areas: [2, 6] },
      { texto: "Creatividad y pensamiento lateral", areas: [3, 7] },
      { texto: "Adaptabilidad y aprendizaje continuo", areas: [1, 10] },
      { texto: "Perseverancia y disciplina", areas: [8, 6] },
      { texto: "Empatía y escucha activa", areas: [2, 5] },
    ]
  },
  {
    id: "GT11", texto: "¿Con qué frecuencia estás dispuesto/a a aprender cosas nuevas en el trabajo?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Siempre, me apasiona estar actualizado/a", areas: [1, 10] },
      { texto: "Frecuentemente, si aporta a mi carrera", areas: [2, 4] },
      { texto: "De vez en cuando si es necesario", areas: [6, 7] },
      { texto: "Prefiero perfeccionar lo que ya sé", areas: [3, 5] },
    ]
  },
  {
    id: "GT12", texto: "¿Qué tan bueno/a eres organizando tu propio tiempo?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Excelente, siempre tengo agenda y la cumplo", areas: [1, 4] },
      { texto: "Bien, en general cumplo mis tiempos", areas: [2, 6] },
      { texto: "Regular, a veces me disperso", areas: [3, 9] },
      { texto: "Necesito que alguien me dirija y organice", areas: [5, 7] },
    ]
  },
  {
    id: "GT13", texto: "¿Cuál de estos logros laborales te haría sentir más orgulloso/a?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Crear una app o producto tech que funcione", areas: [1] },
      { texto: "Ayudar a un paciente a recuperarse", areas: [2] },
      { texto: "Que mi diseño sea reconocido públicamente", areas: [3] },
      { texto: "Cerrar una venta grande o hacer crecer un negocio", areas: [4] },
      { texto: "Que un alumno logre sus metas", areas: [5] },
      { texto: "Terminar una obra o construcción", areas: [6] },
      { texto: "Ser el chef de un evento exitoso", areas: [7] },
      { texto: "Publicar una nota importante en medios", areas: [9] },
    ]
  },
  {
    id: "GT14", texto: "¿Qué tanto te importa que tu trabajo tenga horario fijo?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Mucho, necesito rutina y horarios claros", areas: [2, 6] },
      { texto: "Algo, pero no es lo principal", areas: [4, 5] },
      { texto: "Poco, prefiero flexibilidad total", areas: [1, 3, 9] },
      { texto: "No me importa si el trabajo me gusta", areas: [7, 10] },
    ]
  },
  {
    id: "GT15", texto: "¿Qué tan bien te comunicas por escrito?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Excelente, redacto bien y con claridad", areas: [5, 9, 8] },
      { texto: "Bien, suficiente para el trabajo diario", areas: [4, 2] },
      { texto: "Regular, prefiero la comunicación verbal", areas: [7, 6] },
      { texto: "Poco, soy más de acción que de palabras", areas: [6] },
    ]
  },
  {
    id: "GT16", texto: "¿Qué tan rápido aprendes a usar herramientas o equipos nuevos?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Muy rápido, disfruto dominar herramientas nuevas", areas: [1, 6] },
      { texto: "Rápido con práctica y algo de guía", areas: [2, 7] },
      { texto: "Prefiero dominar bien las que ya uso", areas: [3, 5] },
      { texto: "Me cuesta pero al final aprendo", areas: [8, 4] },
    ]
  },
  {
    id: "GT17", texto: "¿Cómo reaccionas ante los errores o fracasos en el trabajo?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Los analizo, aprendo y no los repito", areas: [1, 10] },
      { texto: "Me afectan pero sigo adelante", areas: [2, 5] },
      { texto: "Los acepto como parte del proceso creativo", areas: [3, 9] },
      { texto: "Los veo como oportunidades de mejora del negocio", areas: [4] },
      { texto: "Me ayudan a ser más metódico y cuidadoso", areas: [6, 7] },
    ]
  },
  {
    id: "GT18", texto: "¿Qué tan importante es para ti que tu trabajo tenga variedad diaria?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Esencial, me aburro en la rutina fácilmente", areas: [3, 9, 7] },
      { texto: "Importante, aunque acepto cierta rutina", areas: [4, 1] },
      { texto: "No importa, la profundidad cuenta más", areas: [2, 10] },
      { texto: "Prefiero la rutina, me da seguridad", areas: [5, 6] },
    ]
  },
  {
    id: "GT19", texto: "¿Tienes experiencia previa (voluntariados, proyectos escolares, trabajos informales)?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Sí, en tecnología o sistemas", areas: [1] },
      { texto: "Sí, en salud, voluntariado social o cuidado de personas", areas: [2, 5] },
      { texto: "Sí, en arte, diseño o comunicación", areas: [3, 9] },
      { texto: "Sí, en ventas, eventos o emprendimiento", areas: [4, 7] },
      { texto: "Sí, en construcción, mecánica o trabajos manuales", areas: [6] },
      { texto: "No tengo experiencia previa aún", areas: [] },
    ]
  },
  {
    id: "GT20", texto: "¿Cuál de estos valores laborales es el más importante para ti?",
    tipo: "opcion_multiple",
    opciones: [
      { texto: "Innovación y creatividad", areas: [1, 3] },
      { texto: "Impacto social y ayuda a los demás", areas: [2, 5, 8] },
      { texto: "Libertad y flexibilidad", areas: [3, 9] },
      { texto: "Estabilidad y seguridad económica", areas: [4, 6] },
      { texto: "Reconocimiento y crecimiento profesional", areas: [4, 1, 9] },
      { texto: "Tradición y artesanía", areas: [7, 6] },
    ]
  },
];

// ============================================================
// CARRERAS UNIVERSITARIAS POR ÁREA
// ============================================================
const CARRERAS = {
  1: [
    { id: "C101", nombre: "Ingeniería de Sistemas", descripcion: "Desarrollo de software, sistemas informáticos y redes de computadores." },
    { id: "C102", nombre: "Ingeniería en Ciencias de la Computación", descripcion: "Fundamentos teóricos de la computación, algoritmos e inteligencia artificial." },
    { id: "C103", nombre: "Tecnología en Desarrollo de Software", descripcion: "Programación aplicada, bases de datos y desarrollo web/móvil." },
  ],
  2: [
    { id: "C201", nombre: "Medicina y Cirugía", descripcion: "Diagnóstico, tratamiento y prevención de enfermedades humanas." },
    { id: "C202", nombre: "Enfermería", descripcion: "Cuidado integral del paciente en entornos hospitalarios y comunitarios." },
    { id: "C203", nombre: "Odontología", descripcion: "Salud oral, diagnóstico y tratamiento de enfermedades bucales." },
    { id: "C204", nombre: "Nutrición y Dietética", descripcion: "Planificación de regímenes alimenticios y educación nutricional." },
  ],
  3: [
    { id: "C301", nombre: "Diseño Gráfico", descripcion: "Comunicación visual, identidad de marca, tipografía y diseño editorial." },
    { id: "C302", nombre: "Diseño Industrial", descripcion: "Diseño de productos funcionales y estéticos para el mercado." },
    { id: "C303", nombre: "Artes Plásticas y Visuales", descripcion: "Pintura, escultura, grabado y arte digital contemporáneo." },
    { id: "C304", nombre: "Animación Digital", descripcion: "Producción de contenido animado 2D y 3D para cine, TV y videojuegos." },
  ],
  4: [
    { id: "C401", nombre: "Administración de Empresas", descripcion: "Gestión organizacional, recursos humanos, finanzas y estrategia." },
    { id: "C402", nombre: "Contaduría Pública", descripcion: "Auditoría, contabilidad, impuestos y control financiero." },
    { id: "C403", nombre: "Economía", descripcion: "Análisis macroeconómico, microeconómico y política económica." },
    { id: "C404", nombre: "Marketing y Publicidad", descripcion: "Estrategia de marca, comportamiento del consumidor y medios digitales." },
  ],
  5: [
    { id: "C501", nombre: "Licenciatura en Educación", descripcion: "Formación de docentes para educación básica, secundaria y superior." },
    { id: "C502", nombre: "Psicología", descripcion: "Comportamiento humano, salud mental y procesos cognitivos." },
    { id: "C503", nombre: "Filosofía", descripcion: "Pensamiento crítico, ética, lógica y metafísica." },
    { id: "C504", nombre: "Historia", descripcion: "Análisis de procesos históricos, culturales y sociales." },
  ],
  6: [
    { id: "C601", nombre: "Ingeniería Civil", descripcion: "Diseño, construcción y supervisión de infraestructura y obras civiles." },
    { id: "C602", nombre: "Ingeniería Mecánica", descripcion: "Diseño y mantenimiento de sistemas mecánicos, térmicos y de manufactura." },
    { id: "C603", nombre: "Arquitectura", descripcion: "Diseño de espacios habitables, urbanismo y patrimonio arquitectónico." },
    { id: "C604", nombre: "Ingeniería Eléctrica", descripcion: "Sistemas de energía, electrónica de potencia y automatización." },
  ],
  7: [
    { id: "C701", nombre: "Gastronomía y Arte Culinario", descripcion: "Técnicas culinarias, pastelería, cocina internacional y gestión de restaurantes." },
    { id: "C702", nombre: "Administración Hotelera y Turística", descripcion: "Gestión de hoteles, turismo sostenible y servicio al cliente." },
  ],
  8: [
    { id: "C801", nombre: "Derecho y Ciencias Políticas", descripcion: "Legislación, jurisprudencia, derecho civil, penal e internacional." },
    { id: "C802", nombre: "Trabajo Social", descripcion: "Intervención social, políticas públicas y bienestar comunitario." },
    { id: "C803", nombre: "Sociología", descripcion: "Análisis de estructuras sociales, cultura y movimientos colectivos." },
  ],
  9: [
    { id: "C901", nombre: "Comunicación Social y Periodismo", descripcion: "Medios masivos, periodismo digital, radio y televisión." },
    { id: "C902", nombre: "Producción Audiovisual", descripcion: "Cine, video, fotografía profesional y contenido digital." },
    { id: "C903", nombre: "Publicidad y Relaciones Públicas", descripcion: "Gestión de imagen, campañas publicitarias y relaciones con medios." },
  ],
  10: [
    { id: "C1001", nombre: "Biología", descripcion: "Estudio de seres vivos, genética, ecología y biología molecular." },
    { id: "C1002", nombre: "Química", descripcion: "Composición y transformación de la materia, química orgánica e industrial." },
    { id: "C1003", nombre: "Física", descripcion: "Fenómenos naturales, mecánica cuántica, astrofísica y física aplicada." },
  ],
};

// ============================================================
// PUESTOS DE TRABAJO POR ÁREA
// ============================================================
const TRABAJOS = {
  1: [
    { id: "T101", titulo: "Técnico en Soporte IT", descripcion: "Mantenimiento de equipos, instalación de software y soporte a usuarios." },
    { id: "T102", titulo: "Desarrollador Web Junior", descripcion: "Creación de sitios web con HTML, CSS, JavaScript y frameworks modernos." },
    { id: "T103", titulo: "Analista de Datos Junior", descripcion: "Recopilación, limpieza y visualización básica de datos con Excel o Python." },
  ],
  2: [
    { id: "T201", titulo: "Auxiliar de Enfermería", descripcion: "Apoyo al personal médico en cuidados básicos al paciente." },
    { id: "T202", titulo: "Promotor de Salud Comunitaria", descripcion: "Campañas de prevención, vacunación y educación en salud." },
    { id: "T203", titulo: "Asistente de Nutrición", descripcion: "Apoyo en elaboración de planes alimentarios supervisados." },
  ],
  3: [
    { id: "T301", titulo: "Diseñador Gráfico Freelance", descripcion: "Creación de logos, flyers, contenido para redes sociales y material editorial." },
    { id: "T302", titulo: "Creador de Contenido Digital", descripcion: "Producción de videos, fotos y textos para plataformas digitales." },
    { id: "T303", titulo: "Ilustrador Digital", descripcion: "Arte para libros, videojuegos, apps y publicidad." },
  ],
  4: [
    { id: "T401", titulo: "Asesor Comercial / Vendedor", descripcion: "Gestión de cartera de clientes, ventas y cumplimiento de metas comerciales." },
    { id: "T402", titulo: "Asistente Administrativo", descripcion: "Gestión documental, atención al cliente y apoyo a gerencia." },
    { id: "T403", titulo: "Cajero Bancario", descripcion: "Operaciones bancarias, atención al cliente y manejo de efectivo." },
  ],
  5: [
    { id: "T501", titulo: "Asistente de Docencia / Monitor", descripcion: "Apoyo a profesores, tutoría a estudiantes y coordinación académica." },
    { id: "T502", titulo: "Asesor Psicosocial Comunitario", descripcion: "Orientación a familias y jóvenes en situaciones de vulnerabilidad." },
    { id: "T503", titulo: "Promotor Cultural", descripcion: "Organización de eventos culturales, educativos y recreativos." },
  ],
  6: [
    { id: "T601", titulo: "Auxiliar de Construcción", descripcion: "Apoyo en obras civiles: mezcla, acarreo de materiales y trabajo de campo." },
    { id: "T602", titulo: "Electricista Domiciliario", descripcion: "Instalaciones eléctricas residenciales, mantenimiento y reparaciones." },
    { id: "T603", titulo: "Técnico en Mantenimiento Industrial", descripcion: "Mantenimiento preventivo y correctivo de maquinaria en plantas." },
  ],
  7: [
    { id: "T701", titulo: "Ayudante de Cocina", descripcion: "Preparación de ingredientes, apoyo al chef y limpieza de cocina." },
    { id: "T702", titulo: "Mesero / Servidor de Restaurante", descripcion: "Atención al cliente en sala, toma de pedidos y servicio de alimentos." },
    { id: "T703", titulo: "Repostero Junior", descripcion: "Elaboración de postres, panes y productos de pastelería." },
  ],
  8: [
    { id: "T801", titulo: "Asistente Legal / Paralegal", descripcion: "Apoyo a abogados: investigación jurídica, redacción de documentos." },
    { id: "T802", titulo: "Gestor Comunitario", descripcion: "Mediación de conflictos y trabajo con comunidades en proyectos sociales." },
  ],
  9: [
    { id: "T901", titulo: "Community Manager Junior", descripcion: "Gestión de redes sociales, creación de contenido y análisis de métricas." },
    { id: "T902", titulo: "Redactor Web / Copywriter", descripcion: "Escritura de artículos, blogs y textos publicitarios para canales digitales." },
    { id: "T903", titulo: "Asistente de Producción Audiovisual", descripcion: "Apoyo en rodajes, edición básica de video y coordinación de sets." },
  ],
  10: [
    { id: "T1001", titulo: "Asistente de Laboratorio", descripcion: "Mantenimiento de equipos, preparación de muestras y análisis básicos." },
    { id: "T1002", titulo: "Monitor Ambiental", descripcion: "Recolección de datos ambientales y apoyo en proyectos de investigación." },
  ],
};

// ============================================================
// UNIVERSIDADES SEED (por ciudad) — 40 instituciones
// ============================================================
const UNIVERSIDADES = [
  // ---- Bogotá ----
  { id: "U01", nombre: "Universidad Nacional de Colombia", tipo: "Pública", ciudad: "bogotá", ofrece_becas: true,  direccion: "Cra. 45 #26-85, Bogotá" },
  { id: "U02", nombre: "Universidad de los Andes", tipo: "Privada", ciudad: "bogotá", ofrece_becas: true,  direccion: "Cra. 1 #18A-12, Bogotá" },
  { id: "U03", nombre: "Universidad Javeriana", tipo: "Privada", ciudad: "bogotá", ofrece_becas: true,  direccion: "Cra. 7 #40-62, Bogotá" },
  { id: "U13", nombre: "Universidad Libre", tipo: "Privada", ciudad: "bogotá", ofrece_becas: false, direccion: "Cra. 70 #53-40, Bogotá" },
  { id: "U14", nombre: "Universidad Distrital F.J.C.", tipo: "Pública", ciudad: "bogotá", ofrece_becas: true,  direccion: "Cra. 7 #40-53, Bogotá" },
  { id: "U15", nombre: "SENA Sede Central", tipo: "Pública", ciudad: "bogotá", ofrece_becas: true,  direccion: "Calle 57 #8-69, Bogotá" },
  { id: "U17", nombre: "Universidad Externado de Colombia", tipo: "Privada", ciudad: "bogotá", ofrece_becas: true,  direccion: "Calle 12 #1-17 Este, Bogotá" },
  { id: "U18", nombre: "Universidad EAN", tipo: "Privada", ciudad: "bogotá", ofrece_becas: false, direccion: "Cra. 11 #78-47, Bogotá" },
  { id: "U19", nombre: "UNIMINUTO Bogotá", tipo: "Privada", ciudad: "bogotá", ofrece_becas: true,  direccion: "Cra. 73A #81C-50, Bogotá" },
  { id: "U20", nombre: "Universidad Piloto de Colombia", tipo: "Privada", ciudad: "bogotá", ofrece_becas: false, direccion: "Cra. 9 #45A-44, Bogotá" },
  // ---- Medellín ----
  { id: "U05", nombre: "Universidad Pontificia Bolivariana", tipo: "Privada", ciudad: "medellín", ofrece_becas: false, direccion: "Circular 1 #70-01, Medellín" },
  { id: "U06", nombre: "Universidad de Antioquia", tipo: "Pública", ciudad: "medellín", ofrece_becas: true,  direccion: "Calle 67 #53-108, Medellín" },
  { id: "U12", nombre: "EAFIT", tipo: "Privada", ciudad: "medellín", ofrece_becas: true,  direccion: "Cra. 49 #7 Sur-50, Medellín" },
  { id: "U21", nombre: "Universidad CES", tipo: "Privada", ciudad: "medellín", ofrece_becas: false, direccion: "Calle 10A #22-04, Medellín" },
  { id: "U22", nombre: "Politécnico Colombiano J.I.C.", tipo: "Pública", ciudad: "medellín", ofrece_becas: true,  direccion: "Calle 48 #7-151, Medellín" },
  { id: "U23", nombre: "SENA Regional Antioquia", tipo: "Pública", ciudad: "medellín", ofrece_becas: true,  direccion: "Calle 51 #57-60, Medellín" },
  { id: "U24", nombre: "Universidad de Medellín", tipo: "Privada", ciudad: "medellín", ofrece_becas: true,  direccion: "Cra. 87 #30-65, Medellín" },
  // ---- Cali ----
  { id: "U04", nombre: "Universidad del Valle", tipo: "Pública", ciudad: "cali", ofrece_becas: true,  direccion: "Cra. 100 #5-169, Cali" },
  { id: "U11", nombre: "ICESI", tipo: "Privada", ciudad: "cali", ofrece_becas: false, direccion: "Cra. 92 #32-50, Cali" },
  { id: "U16", nombre: "SENA Regional Valle", tipo: "Pública", ciudad: "cali", ofrece_becas: true,  direccion: "Cra. 3 #22-45, Cali" },
  { id: "U25", nombre: "Universidad Santiago de Cali", tipo: "Privada", ciudad: "cali", ofrece_becas: true,  direccion: "Calle 5 #62-00, Cali" },
  { id: "U26", nombre: "Universidad Autónoma de Occidente", tipo: "Privada", ciudad: "cali", ofrece_becas: false, direccion: "Km 2 Vía Cali-Jamundí, Cali" },
  { id: "U27", nombre: "Universidad Javeriana Cali", tipo: "Privada", ciudad: "cali", ofrece_becas: true,  direccion: "Cra. 2 #18-70, Cali" },
  // ---- Barranquilla ----
  { id: "U07", nombre: "Universidad del Norte", tipo: "Privada", ciudad: "barranquilla", ofrece_becas: true,  direccion: "Km 5 Vía Puerto Colombia, Barranquilla" },
  { id: "U28", nombre: "Universidad Simón Bolívar", tipo: "Privada", ciudad: "barranquilla", ofrece_becas: true,  direccion: "Cra. 59 #59-65, Barranquilla" },
  { id: "U29", nombre: "Universidad Autónoma del Caribe", tipo: "Privada", ciudad: "barranquilla", ofrece_becas: false, direccion: "Calle 90 #46-112, Barranquilla" },
  { id: "U30", nombre: "Universidad del Atlántico", tipo: "Pública", ciudad: "barranquilla", ofrece_becas: true,  direccion: "Cra. 30 #8-49, Barranquilla" },
  { id: "U31", nombre: "SENA Regional Atlántico", tipo: "Pública", ciudad: "barranquilla", ofrece_becas: true,  direccion: "Calle 30 #26-40, Barranquilla" },
  // ---- Bucaramanga ----
  { id: "U08", nombre: "Universidad Industrial de Santander", tipo: "Pública", ciudad: "bucaramanga", ofrece_becas: true,  direccion: "Cra. 27 #9, Bucaramanga" },
  { id: "U32", nombre: "Universidad Autónoma de Bucaramanga", tipo: "Privada", ciudad: "bucaramanga", ofrece_becas: true,  direccion: "Calle 48 #39-234, Bucaramanga" },
  { id: "U33", nombre: "SENA Regional Santander", tipo: "Pública", ciudad: "bucaramanga", ofrece_becas: true,  direccion: "Cra. 22 #34-07, Bucaramanga" },
  // ---- Cartagena ----
  { id: "U34", nombre: "Universidad de Cartagena", tipo: "Pública", ciudad: "cartagena", ofrece_becas: true,  direccion: "Calle 2da de Badillo #36-00, Cartagena" },
  { id: "U35", nombre: "Universidad Tecnológica de Bolívar", tipo: "Privada", ciudad: "cartagena", ofrece_becas: true,  direccion: "Parque Industrial y Tecnológico Carlos Vélez Pombo, Cartagena" },
  { id: "U36", nombre: "SENA Regional Bolívar", tipo: "Pública", ciudad: "cartagena", ofrece_becas: true,  direccion: "Cra. 21 #29-50, Cartagena" },
  // ---- Pereira ----
  { id: "U09", nombre: "Universidad Tecnológica de Pereira", tipo: "Pública", ciudad: "pereira", ofrece_becas: true,  direccion: "Cra. 27 #10-02, Pereira" },
  { id: "U37", nombre: "Universidad Libre Pereira", tipo: "Privada", ciudad: "pereira", ofrece_becas: false, direccion: "Belmonte, Pereira" },
  // ---- Pasto ----
  { id: "U10", nombre: "Universidad de Nariño", tipo: "Pública", ciudad: "pasto", ofrece_becas: true,  direccion: "Calle 18 #21-03, Pasto" },
  { id: "U38", nombre: "SENA Regional Nariño", tipo: "Pública", ciudad: "pasto", ofrece_becas: true,  direccion: "Cra. 24 #20-42, Pasto" },
  // ---- Manizales ----
  { id: "U39", nombre: "Universidad de Caldas", tipo: "Pública", ciudad: "manizales", ofrece_becas: true,  direccion: "Calle 65 #26-10, Manizales" },
  { id: "U40", nombre: "Universidad Nacional Manizales", tipo: "Pública", ciudad: "manizales", ofrece_becas: true,  direccion: "Cra. 27 #64-60, Manizales" },
];

// Mapeo de carreras a universidades que las ofrecen (actualizado con nuevas ciudades)
const UNIVERSIDAD_CARRERA = {
  "C101": ["U01","U02","U03","U08","U09","U14","U12","U22","U24","U26","U28","U32","U35","U39"],
  "C102": ["U01","U02","U05","U07","U12","U22","U26","U28","U32","U39","U40"],
  "C103": ["U14","U15","U16","U09","U19","U22","U23","U31","U33","U36","U38"],
  "C201": ["U01","U02","U04","U05","U06","U08","U21","U25","U27","U30","U34","U35"],
  "C202": ["U01","U04","U06","U07","U09","U10","U21","U22","U25","U30","U34","U38"],
  "C203": ["U01","U02","U03","U04","U05","U21","U25","U27","U34","U35"],
  "C204": ["U01","U03","U05","U06","U09","U21","U25","U27","U30","U34"],
  "C301": ["U02","U03","U04","U07","U12","U15","U20","U24","U26","U27","U29","U32"],
  "C302": ["U02","U05","U07","U11","U12","U20","U24","U26","U35"],
  "C303": ["U01","U04","U06","U10","U24","U25","U27","U34","U39"],
  "C304": ["U02","U07","U11","U12","U20","U26","U27","U35"],
  "C401": ["U01","U02","U03","U04","U05","U06","U07","U08","U09","U10","U11","U12","U13","U17","U18","U19","U24","U25","U26","U27","U28","U29","U30","U32","U34","U35","U37","U39"],
  "C402": ["U01","U03","U04","U06","U07","U08","U13","U17","U24","U25","U28","U30","U32","U34"],
  "C403": ["U01","U02","U04","U06","U07","U12","U17","U24","U26","U35","U39"],
  "C404": ["U02","U03","U05","U07","U11","U12","U18","U24","U26","U27","U29","U32","U35"],
  "C501": ["U01","U04","U06","U08","U09","U10","U19","U22","U25","U30","U34","U38","U39"],
  "C502": ["U01","U02","U03","U04","U05","U06","U07","U17","U21","U24","U25","U27","U28","U32","U34","U35"],
  "C503": ["U01","U04","U06","U08","U17","U25","U34","U39"],
  "C504": ["U01","U04","U06","U08","U17","U25","U34","U39"],
  "C601": ["U01","U04","U06","U07","U08","U09","U22","U24","U26","U30","U32","U34","U35","U39","U40"],
  "C602": ["U01","U02","U06","U07","U08","U12","U22","U24","U30","U32","U35","U39","U40"],
  "C603": ["U01","U02","U03","U04","U05","U06","U11","U20","U24","U26","U27","U32","U35"],
  "C604": ["U01","U06","U07","U08","U09","U22","U24","U30","U32","U35","U39","U40"],
  "C701": ["U15","U16","U19","U23","U25","U31","U33","U36","U38"],
  "C702": ["U05","U07","U11","U24","U26","U27","U28","U29","U34","U35"],
  "C801": ["U01","U02","U03","U04","U06","U07","U08","U13","U17","U25","U28","U29","U30","U32","U34","U35","U37"],
  "C802": ["U01","U04","U06","U10","U17","U19","U25","U30","U34","U38"],
  "C803": ["U01","U04","U06","U17","U25","U30","U34"],
  "C901": ["U02","U03","U04","U07","U09","U11","U18","U24","U25","U26","U28","U29","U32","U35"],
  "C902": ["U02","U04","U07","U11","U12","U20","U24","U26","U27","U28","U35"],
  "C903": ["U02","U03","U07","U11","U18","U24","U26","U28","U29","U35"],
  "C1001": ["U01","U04","U06","U08","U10","U22","U24","U30","U34","U39","U40"],
  "C1002": ["U01","U02","U04","U06","U08","U22","U24","U30","U34","U39","U40"],
  "C1003": ["U01","U02","U04","U06","U08","U22","U24","U30","U34","U39","U40"],
};

// ============================================================
// EMPRESAS Y OFERTAS LABORALES SEED — 50 empresas
// ============================================================
const EMPRESAS = [
  // ---- Bogotá — Tecnología ----
  { id: "E01", nombre: "TechCo Solutions", ciudad: "bogotá", direccion: "Calle 93 #11-21, Bogotá" },
  { id: "E19", nombre: "Pragma S.A.S.", ciudad: "bogotá", direccion: "Cra. 11 #82-76, Bogotá" },
  { id: "E20", nombre: "Softcorp Colombia", ciudad: "bogotá", direccion: "Calle 116 #7-15, Bogotá" },
  // ---- Medellín — Tecnología ----
  { id: "E02", nombre: "DigitalMind Medellín", ciudad: "medellín", direccion: "Cra. 43A #18-111, Medellín" },
  { id: "E21", nombre: "PSL Corp.", ciudad: "medellín", direccion: "Cra. 43A #1-50, Medellín" },
  // ---- Barranquilla — Tecnología ----
  { id: "E22", nombre: "Indra Colombia Barranquilla", ciudad: "barranquilla", direccion: "Calle 76 #54-11, Barranquilla" },
  // ---- Cali — Tecnología ----
  { id: "E17", nombre: "StartupHub Cali", ciudad: "cali", direccion: "Cra. 5 #4-70, Cali" },
  // ---- Bogotá — Salud ----
  { id: "E03", nombre: "Clínica Shaio", ciudad: "bogotá", direccion: "Diagonal 115 #70C-75, Bogotá" },
  { id: "E23", nombre: "Hospital El Tunal", ciudad: "bogotá", direccion: "Transv. 19a #43B-70, Bogotá" },
  { id: "E24", nombre: "Compensar EPS", ciudad: "bogotá", direccion: "Av. Calle 26 #57-41, Bogotá" },
  // ---- Medellín — Salud ----
  { id: "E04", nombre: "Clínica Las Américas", ciudad: "medellín", direccion: "Cra. 80 #71-101, Medellín" },
  { id: "E25", nombre: "Hospital Pablo Tobón Uribe", ciudad: "medellín", direccion: "Calle 78B #69-240, Medellín" },
  // ---- Cali — Salud ----
  { id: "E13", nombre: "Hospital Universitario del Valle", ciudad: "cali", direccion: "Calle 5 #36-08, Cali" },
  { id: "E26", nombre: "Clínica Farallones", ciudad: "cali", direccion: "Cra. 98B #18-49, Cali" },
  // ---- Barranquilla — Salud ----
  { id: "E27", nombre: "Clínica General del Norte", ciudad: "barranquilla", direccion: "Cra. 38 #80-139, Barranquilla" },
  // ---- Cartagena — Salud ----
  { id: "E28", nombre: "Clínica Blas de Lezo", ciudad: "cartagena", direccion: "Cra. 2 #30-180, Cartagena" },
  // ---- Bogotá — Arte y Diseño ----
  { id: "E05", nombre: "Estudio Creativo Naranja", ciudad: "bogotá", direccion: "Calle 71 #5-47, Bogotá" },
  { id: "E29", nombre: "Leo Burnett Colombia", ciudad: "bogotá", direccion: "Calle 90 #19-41, Bogotá" },
  // ---- Cali — Arte y Diseño ----
  { id: "E06", nombre: "Agencia Pixel Cali", ciudad: "cali", direccion: "Av. 6N #24-25, Cali" },
  // ---- Medellín — Arte y Diseño ----
  { id: "E30", nombre: "Media Commerce Partners", ciudad: "medellín", direccion: "Cra. 43A #10-100, Medellín" },
  // ---- Barranquilla — Arte y Diseño ----
  { id: "E31", nombre: "Hektárea Agencia", ciudad: "barranquilla", direccion: "Calle 72 #57-21, Barranquilla" },
  // ---- Medellín — Negocios ----
  { id: "E07", nombre: "Grupo Empresarial Éxito", ciudad: "medellín", direccion: "Cra. 48 #32-195, Medellín" },
  { id: "E18", nombre: "Bancolombia", ciudad: "medellín", direccion: "Cra. 48 #26-85, Medellín" },
  // ---- Bogotá — Negocios ----
  { id: "E15", nombre: "ICBF Bogotá", ciudad: "bogotá", direccion: "Av. Calle 68 #64C-75, Bogotá" },
  { id: "E16", nombre: "Manpower Group Colombia", ciudad: "bogotá", direccion: "Calle 100 #8A-55, Bogotá" },
  { id: "E32", nombre: "Banco de Bogotá", ciudad: "bogotá", direccion: "Calle 36 #7-47, Bogotá" },
  // ---- Cali — Negocios ----
  { id: "E33", nombre: "Davivienda Cali", ciudad: "cali", direccion: "Av. 4N #28-03, Cali" },
  // ---- Barranquilla — Negocios ----
  { id: "E34", nombre: "Olímpica S.A.", ciudad: "barranquilla", direccion: "Calle 44 #41-115, Barranquilla" },
  // ---- Cartagena — Negocios ----
  { id: "E35", nombre: "Contecar Cartagena", ciudad: "cartagena", direccion: "Zona Industrial de Mamonal, Cartagena" },
  // ---- Bogotá — Construcción ----
  { id: "E08", nombre: "Constructora Cemex Colombia", ciudad: "bogotá", direccion: "Cra. 13A #93-82, Bogotá" },
  { id: "E36", nombre: "Conciviles S.A.", ciudad: "bogotá", direccion: "Calle 134 #9A-25, Bogotá" },
  // ---- Medellín — Construcción ----
  { id: "E37", nombre: "Conconcreto S.A.", ciudad: "medellín", direccion: "Cra. 43B #16A-55, Medellín" },
  // ---- Cartagena — Construcción ----
  { id: "E38", nombre: "Promigas S.A. ESP", ciudad: "cartagena", direccion: "Zona Industrial de Mamonal, Cartagena" },
  // ---- Bogotá — Gastronomía ----
  { id: "E09", nombre: "Restaurante La Pinta", ciudad: "bogotá", direccion: "Calle 93B #12-26, Bogotá" },
  { id: "E39", nombre: "Hotel Marriott Bogotá", ciudad: "bogotá", direccion: "Av. El Dorado #69B-53, Bogotá" },
  // ---- Medellín — Gastronomía ----
  { id: "E10", nombre: "Restaurante El Cielo", ciudad: "medellín", direccion: "Cra. 40 #10A-22, Medellín" },
  { id: "E40", nombre: "Hotel Dann Carlton Medellín", ciudad: "medellín", direccion: "Calle 1A Sur #43A-83, Medellín" },
  // ---- Barranquilla — Gastronomía ----
  { id: "E41", nombre: "Hotel El Prado", ciudad: "barranquilla", direccion: "Cra. 54 #70-10, Barranquilla" },
  // ---- Cartagena — Gastronomía ----
  { id: "E42", nombre: "Hotel Las Américas Resort", ciudad: "cartagena", direccion: "Manga Calle Real, Cartagena" },
  // ---- Bogotá — Comunicación ----
  { id: "E11", nombre: "Caracol TV", ciudad: "bogotá", direccion: "Calle 103 #69B-43, Bogotá" },
  { id: "E12", nombre: "RCN Radio", ciudad: "bogotá", direccion: "Cra. 60 #55-47, Bogotá" },
  { id: "E43", nombre: "Publicis Colombia", ciudad: "bogotá", direccion: "Cra. 7 #71-21, Bogotá" },
  // ---- Barranquilla — Comunicación ----
  { id: "E44", nombre: "El Heraldo Digital", ciudad: "barranquilla", direccion: "Calle 53B #46-25, Barranquilla" },
  // ---- Cali — Comunicación ----
  { id: "E45", nombre: "Telepacífico", ciudad: "cali", direccion: "Av. 2N #23-46, Cali" },
  // ---- Bogotá — Social/Educación ----
  { id: "E46", nombre: "Fundación Escuela Nueva", ciudad: "bogotá", direccion: "Calle 74 #20-26, Bogotá" },
  { id: "E47", nombre: "Corporación Región", ciudad: "bogotá", direccion: "Calle 55 #41-10, Bogotá" },
  // ---- Medellín — Social ----
  { id: "E48", nombre: "Corporación Convivamos", ciudad: "medellín", direccion: "Calle 107 #52A-30, Medellín" },
  // ---- Bogotá — Ciencias ----
  { id: "E49", nombre: "Corpoica / Agrosavia", ciudad: "bogotá", direccion: "Km 14 Vía Mosquera-Bogotá" },
  // ---- Cali — Ciencias ----
  { id: "E14", nombre: "Ingenio Riopaila Castilla", ciudad: "cali", direccion: "Vía Cali-Palmira, Cali" },
  // ---- Barranquilla — Ciencias ----
  { id: "E50", nombre: "ProBeneficencia Atlántico", ciudad: "barranquilla", direccion: "Cra. 49 #72-15, Barranquilla" },
];

// Mapeo de trabajos a empresas que contratan (ampliado por ciudad)
const EMPRESA_TRABAJO = {
  "T101": ["E01","E02","E07","E16","E19","E20","E21","E22","E17"],
  "T102": ["E01","E02","E17","E05","E19","E21","E22","E30"],
  "T103": ["E01","E02","E07","E18","E19","E20","E21","E32","E33","E34"],
  "T201": ["E03","E04","E13","E23","E24","E25","E26","E27","E28"],
  "T202": ["E03","E13","E15","E23","E24","E25","E26","E27","E28"],
  "T203": ["E03","E04","E13","E23","E25","E26","E28"],
  "T301": ["E05","E06","E11","E17","E29","E30","E31","E43","E45"],
  "T302": ["E05","E06","E11","E12","E29","E30","E31","E43","E44","E45"],
  "T303": ["E05","E06","E17","E29","E30","E31","E43"],
  "T401": ["E07","E16","E18","E14","E32","E33","E34","E35"],
  "T402": ["E07","E16","E18","E15","E32","E33","E34","E35","E39","E40","E41","E42"],
  "T403": ["E18","E07","E32","E33","E34"],
  "T501": ["E15","E16","E46","E47","E48"],
  "T502": ["E15","E04","E46","E47","E48"],
  "T503": ["E15","E11","E46","E47","E48"],
  "T601": ["E08","E14","E36","E37","E38"],
  "T602": ["E08","E16","E36","E37","E38"],
  "T603": ["E08","E14","E16","E36","E37","E38"],
  "T701": ["E09","E10","E39","E40","E41","E42"],
  "T702": ["E09","E10","E07","E39","E40","E41","E42"],
  "T703": ["E09","E10","E39","E40","E41","E42"],
  "T801": ["E15","E16","E46","E47","E48"],
  "T802": ["E15","E46","E47","E48"],
  "T901": ["E11","E12","E05","E17","E29","E30","E31","E43","E44","E45"],
  "T902": ["E11","E12","E05","E06","E29","E43","E44","E45"],
  "T903": ["E11","E12","E06","E29","E43","E44","E45"],
  "T1001": ["E03","E04","E13","E14","E49","E50"],
  "T1002": ["E14","E16","E49","E50"],
};

// ============================================================
// FUNCIONES GENERADORAS DE PREGUNTAS (declaradas antes de usarse)
// ============================================================

function generarPreguntasDefault(areaId, areaNombre) {
  const bancoBase = [
    `¿Por qué crees que te interesa el área de ${areaNombre}?`,
    `¿Cuál crees que es la habilidad más importante en ${areaNombre}?`,
    `¿Cómo te ves trabajando en ${areaNombre} en 5 años?`,
    `¿Cuánto tiempo estás dispuesto/a a invertir estudiando ${areaNombre}?`,
    `¿Conoces figuras reconocidas del área de ${areaNombre}?`,
  ];
  const preguntas = [];
  for (let i = 1; i <= 30; i++) {
    const base = bancoBase[(i - 1) % bancoBase.length];
    preguntas.push({
      id: `FE${areaId}_${String(i).padStart(2,'0')}`,
      texto: i === 1 ? base : `Pregunta ${i} de ${areaNombre}: ¿Cuál de estas opciones describe mejor tu relación con este campo?`,
      opciones: [
        "Opción A: Tengo mucha afinidad y experiencia previa",
        "Opción B: Me interesa y estoy dispuesto/a a aprenderlo",
        "Opción C: Tengo curiosidad pero poca experiencia",
        "Opción D: Casi no he explorado este tema aún",
      ],
      correcta: 1
    });
  }
  return preguntas;
}

function generarEntrevistaDefault(areaId, areaNombre) {
  const preguntas = [];
  const tipos = [
    { tipo: "texto_libre", plantilla: (n) => `¿Qué habilidades tienes que te hagan adecuado/a para trabajar en ${areaNombre}? (Pregunta ${n})` },
    { tipo: "opcion_multiple", plantilla: (n) => `Frente a un reto laboral en ${areaNombre}, ¿cuál sería tu reacción? (Situación ${n})` },
  ];
  for (let i = 1; i <= 30; i++) {
    const base = tipos[(i - 1) % 2];
    if (base.tipo === "texto_libre") {
      preguntas.push({ id: `FT${areaId}_${String(i).padStart(2,'0')}`, texto: base.plantilla(i), tipo: "texto_libre", minPalabras: 8 });
    } else {
      preguntas.push({
        id: `FT${areaId}_${String(i).padStart(2,'0')}`,
        texto: base.plantilla(i),
        tipo: "opcion_multiple",
        opciones: [
          "Me rindo fácilmente",
          "Busco soluciones, aprendo y pido apoyo si necesito",
          "Espero que otro lo resuelva",
          "Me estreso pero no actúo"
        ],
        correcta: 1
      });
    }
  }
  return preguntas;
}

// ============================================================
// CUESTIONARIOS FINALES — ESTUDIO
// 30 preguntas por carrera/área con respuesta correcta
// ============================================================
const CUESTIONARIOS_FINALES_ESTUDIO = {
  // Área 1 — Tecnología
  1: {
    titulo: "Evaluación de Aptitud: Tecnología e Informática",
    preguntas: [
      { id:"FE1_01", texto:"¿Qué es un algoritmo?", opciones:["Una marca de computadora","Secuencia de pasos para resolver un problema","Un tipo de virus","Un lenguaje de programación"], correcta:1 },
      { id:"FE1_02", texto:"¿Cuál de estos es un lenguaje de programación?", opciones:["Excel","Python","Adobe","Linux"], correcta:1 },
      { id:"FE1_03", texto:"¿Qué significa HTML?", opciones:["High Text Markup Language","HyperText Markup Language","Hyperlink and Text Modeling Language","Home Tool Markup Language"], correcta:1 },
      { id:"FE1_04", texto:"En lógica de programación, un 'bucle' sirve para:", opciones:["Guardar datos","Repetir instrucciones","Detener el programa","Crear variables"], correcta:1 },
      { id:"FE1_05", texto:"¿Qué es una base de datos?", opciones:["Un tipo de red social","Colección organizada de datos","Un antivirus","Una nube de almacenamiento"], correcta:1 },
      { id:"FE1_06", texto:"¿Qué es el 'bug' en programación?", opciones:["Un insecto en el servidor","Un error en el código","Un tipo de software","Una actualización"], correcta:1 },
      { id:"FE1_07", texto:"¿Cuál es la función de un sistema operativo?", opciones:["Navegar en internet","Gestionar recursos del hardware y ejecutar programas","Hacer videos","Editar fotos"], correcta:1 },
      { id:"FE1_08", texto:"¿Qué significa 'open source'?", opciones:["Software de pago","Software cuyo código fuente es público y modificable","Software solo para empresas","Software sin soporte"], correcta:1 },
      { id:"FE1_09", texto:"¿Qué es una IP?", opciones:["Tipo de software","Dirección única de un dispositivo en red","Idioma de programación","Marca de computadora"], correcta:1 },
      { id:"FE1_10", texto:"¿Cuál de estas herramientas se usa para control de versiones de código?", opciones:["Photoshop","Excel","Git","Word"], correcta:2 },
      { id:"FE1_11", texto:"¿Qué es la inteligencia artificial (IA)?", opciones:["Un robot físico","Capacidad de una máquina para imitar funciones cognitivas humanas","Un videojuego avanzado","Una red social automática"], correcta:1 },
      { id:"FE1_12", texto:"¿Qué hace el operador '==' en la mayoría de lenguajes de programación?", opciones:["Asigna un valor","Compara si dos valores son iguales","Suma dos valores","Declara una variable"], correcta:1 },
      { id:"FE1_13", texto:"¿Qué es el 'frontend' de una aplicación web?", opciones:["El servidor","La base de datos","La parte visual e interactiva que ve el usuario","El código del sistema"], correcta:2 },
      { id:"FE1_14", texto:"¿Cuál de estos es un ejemplo de almacenamiento en la nube?", opciones:["USB","Google Drive","Disco duro externo","RAM"], correcta:1 },
      { id:"FE1_15", texto:"¿Qué es la ciberseguridad?", opciones:["Seguridad física de los servidores","Protección de sistemas, redes y datos digitales","El diseño de redes","Instalación de antivirus"], correcta:1 },
      { id:"FE1_16", texto:"¿Qué significa 'deploy' en desarrollo de software?", opciones:["Eliminar el software","Publicar y poner en producción una aplicación","Descargar actualizaciones","Hacer pruebas del código"], correcta:1 },
      { id:"FE1_17", texto:"¿Cuál es la diferencia entre hardware y software?", opciones:["Ninguna","Hardware son componentes físicos, software son programas","Software es lo físico, hardware lo virtual","Son lo mismo"], correcta:1 },
      { id:"FE1_18", texto:"¿Qué es una API?", opciones:["Un tipo de computadora","Interfaz que permite comunicar dos aplicaciones","Un antivirus","Un tipo de base de datos"], correcta:1 },
      { id:"FE1_19", texto:"¿Cuál de estos describe mejor el rol de un ingeniero de sistemas?", opciones:["Reparar computadoras físicas","Diseñar, desarrollar y mantener sistemas informáticos","Instalar internet","Vender equipos"], correcta:1 },
      { id:"FE1_20", texto:"¿Qué es UX (User Experience)?", opciones:["Lenguaje de diseño","La experiencia del usuario al interactuar con un producto digital","Un tipo de programación","Una base de datos visual"], correcta:1 },
      { id:"FE1_21", texto:"¿Qué es CSS?", opciones:["Lenguaje de programación lógica","Lenguaje para dar estilo visual a páginas web","Base de datos en la nube","Sistema operativo"], correcta:1 },
      { id:"FE1_22", texto:"¿Qué estructura de datos se comporta como una 'pila de platos' (LIFO)?", opciones:["Cola (queue)","Árbol binario","Pila (stack)","Lista enlazada"], correcta:2 },
      { id:"FE1_23", texto:"¿Cuál es el propósito del SQL?", opciones:["Diseñar interfaces","Consultar y manipular bases de datos relacionales","Crear animaciones","Programar en móviles"], correcta:1 },
      { id:"FE1_24", texto:"¿Qué es el machine learning?", opciones:["Aprendizaje humano con máquinas","Capacidad de los sistemas para aprender de datos sin programación explícita","Un tipo de teclado","Software educativo"], correcta:1 },
      { id:"FE1_25", texto:"¿Qué hace una función recursiva?", opciones:["Repite tareas con bucles","Se llama a sí misma para resolver subproblemas","Guarda datos en nube","Compila código"], correcta:1 },
      { id:"FE1_26", texto:"¿Qué significa 'responsive design'?", opciones:["Diseño que responde lento","Diseño que se adapta a distintos tamaños de pantalla","Diseño sin colores","Diseño de backend"], correcta:1 },
      { id:"FE1_27", texto:"¿Qué es el 'debugging'?", opciones:["Agregar nuevas funciones","Proceso de encontrar y corregir errores en el código","Borrar datos","Instalar software"], correcta:1 },
      { id:"FE1_28", texto:"¿Cuál de estos es un framework de JavaScript?", opciones:["Django","Laravel","React","Spring Boot"], correcta:2 },
      { id:"FE1_29", texto:"¿Qué es la programación orientada a objetos (POO)?", opciones:["Programar con objetos físicos","Paradigma que organiza código en objetos con atributos y métodos","Solo existe en Java","Un lenguaje específico"], correcta:1 },
      { id:"FE1_30", texto:"¿Qué tan importante crees que es actualizarse constantemente en tecnología?", opciones:["No es importante, lo que se aprende es suficiente","Importante solo a veces","Muy importante, la tecnología cambia constantemente","Depende del empleador"], correcta:2 },
    ]
  },
  // Área 2 — Salud
  2: {
    titulo: "Evaluación de Aptitud: Salud y Ciencias Médicas",
    preguntas: [
      { id:"FE2_01", texto:"¿Qué significa el término 'diagnóstico'?", opciones:["Tratamiento de enfermedades","Identificar una enfermedad mediante síntomas y pruebas","Receta médica","Procedimiento quirúrgico"], correcta:1 },
      { id:"FE2_02", texto:"¿Cuál es la función principal del sistema circulatorio?", opciones:["Procesar alimentos","Transportar oxígeno, nutrientes y desechos por el cuerpo","Producir hormonas","Regular la temperatura"], correcta:1 },
      { id:"FE2_03", texto:"¿Qué es la anatomía?", opciones:["Estudio de enfermedades","Estudio de la estructura del cuerpo humano","Estudio de medicamentos","Estudio del cerebro"], correcta:1 },
      { id:"FE2_04", texto:"¿Cuál es el órgano principal del sistema nervioso central?", opciones:["Corazón","Pulmón","Cerebro","Hígado"], correcta:2 },
      { id:"FE2_05", texto:"¿Qué es la homeostasis?", opciones:["Proceso de enfermarse","Capacidad del organismo de mantener equilibrio interno","Tipo de bacteria","Técnica quirúrgica"], correcta:1 },
      { id:"FE2_06", texto:"¿Qué significa 'asepsia'?", opciones:["Infección severa","Técnica para prevenir infecciones eliminando microorganismos","Tipo de cirugía","Medicamento analgésico"], correcta:1 },
      { id:"FE2_07", texto:"¿Cuántas cámaras tiene el corazón humano?", opciones:["2","3","4","6"], correcta:2 },
      { id:"FE2_08", texto:"¿Qué es la anamnesis?", opciones:["Tipo de anestesia","Historia clínica del paciente obtenida por entrevista","Prueba de laboratorio","Técnica de cirugía"], correcta:1 },
      { id:"FE2_09", texto:"¿Cuál es la función principal del hígado?", opciones:["Bombear sangre","Procesar nutrientes, filtrar toxinas y producir bilis","Regular respiración","Producir hormonas sexuales"], correcta:1 },
      { id:"FE2_10", texto:"¿Qué es la presión arterial?", opciones:["Presión del aire en pulmones","Fuerza que ejerce la sangre sobre las paredes arteriales","Velocidad del corazón","Temperatura corporal"], correcta:1 },
      { id:"FE2_11", texto:"¿Qué profesional de la salud se especializa en enfermedades del corazón?", opciones:["Dermatólogo","Cardiólogo","Neurólogo","Nefrólogo"], correcta:1 },
      { id:"FE2_12", texto:"¿Qué es la profilaxis?", opciones:["Tratamiento post-enfermedad","Medidas preventivas para evitar enfermedades","Tipo de dieta","Medicamento antiinflamatorio"], correcta:1 },
      { id:"FE2_13", texto:"¿Cuál de estos es un signo vital?", opciones:["Color del cabello","Frecuencia cardíaca","Talla del paciente","Peso al nacer"], correcta:1 },
      { id:"FE2_14", texto:"¿Qué es la patología?", opciones:["Estudio de medicamentos","Ciencia que estudia las enfermedades y sus causas","Tipo de cirugía","Sistema de vacunación"], correcta:1 },
      { id:"FE2_15", texto:"¿Cuántos huesos tiene el esqueleto adulto humano aproximadamente?", opciones:["100","150","206","300"], correcta:2 },
      { id:"FE2_16", texto:"¿Cuál de estos es un ejemplo de medicina preventiva?", opciones:["Cirugía de emergencia","Vacunación","Trasplante de órganos","Quimioterapia"], correcta:1 },
      { id:"FE2_17", texto:"¿Qué es la semiología médica?", opciones:["Estudio de señales de tráfico","Ciencia que estudia los síntomas y signos de las enfermedades","Estudio de bacterias","Técnica de enfermería"], correcta:1 },
      { id:"FE2_18", texto:"¿Cuál es la función principal de los riñones?", opciones:["Producir insulina","Filtrar la sangre y eliminar desechos por la orina","Producir sangre","Almacenar calcio"], correcta:1 },
      { id:"FE2_19", texto:"¿Qué mide el electrocardiograma (ECG)?", opciones:["Presión arterial","Actividad eléctrica del corazón","Oxígeno en sangre","Temperatura corporal"], correcta:1 },
      { id:"FE2_20", texto:"¿Qué implica el principio ético de 'no maleficencia'?", opciones:["Hacer el bien al paciente","No causar daño intencional al paciente","Respetar la autonomía","Distribuir recursos justos"], correcta:1 },
      { id:"FE2_21", texto:"¿Qué es la farmacocinética?", opciones:["Cómo el cuerpo absorbe, distribuye y elimina un medicamento","Nombre de medicamentos","Diseño de pastillas","Fabricación de vacunas"], correcta:0 },
      { id:"FE2_22", texto:"¿Cuál es la diferencia entre síntoma y signo?", opciones:["Son lo mismo","Síntoma es subjetivo (lo siente el paciente), signo es objetivo (lo mide el médico)","Síntoma lo mide el médico, signo lo siente el paciente","Depende del diagnóstico"], correcta:1 },
      { id:"FE2_23", texto:"¿Qué es la terapia intensiva?", opciones:["Terapia psicológica","Cuidado médico especializado para pacientes en estado crítico","Técnica de masajes","Tipo de operación"], correcta:1 },
      { id:"FE2_24", texto:"¿Qué es la epidemiología?", opciones:["Estudio de epidemias solo","Ciencia que estudia la distribución y determinantes de enfermedades en poblaciones","Cura de enfermedades","Tipo de especialidad quirúrgica"], correcta:1 },
      { id:"FE2_25", texto:"¿Cómo se llama el líquido que transporta la sangre fuera del corazón?", opciones:["Venas","Capilares","Arterias","Linfáticos"], correcta:2 },
      { id:"FE2_26", texto:"¿Qué es la inmunidad?", opciones:["Proceso de infección","Capacidad del organismo de defenderse contra enfermedades","Tipo de medicamento","Técnica de diagnóstico"], correcta:1 },
      { id:"FE2_27", texto:"¿Qué estudia la neurología?", opciones:["Los riñones","El sistema nervioso y sus enfermedades","Los pulmones","Los huesos"], correcta:1 },
      { id:"FE2_28", texto:"¿Cuál es la función principal de los eritrocitos (glóbulos rojos)?", opciones:["Combatir infecciones","Transportar oxígeno","Coagular la sangre","Producir anticuerpos"], correcta:1 },
      { id:"FE2_29", texto:"¿Qué es la nutrición clínica?", opciones:["Dietas para adelgazar","Manejo nutricional de pacientes con enfermedades específicas","Cocina hospitalaria","Química de alimentos"], correcta:1 },
      { id:"FE2_30", texto:"¿Qué cualidad consideras más importante en un profesional de la salud?", opciones:["Rapidez para operar","Empatía, ética y actualización constante","Ganar bien económicamente","Tener el mejor equipo"], correcta:1 },
    ]
  },
  // Área 3 — Arte y Diseño
  3: {
    titulo: "Evaluación de Aptitud: Arte y Diseño",
    preguntas: [
      { id:"FE3_01", texto:"¿Qué son los colores primarios en el modelo de luz (RGB)?", opciones:["Rojo, azul, amarillo","Rojo, verde, azul","Cyan, magenta, amarillo","Verde, naranja, morado"], correcta:1 },
      { id:"FE3_02", texto:"¿Qué es la tipografía en diseño?", opciones:["Técnica de pintura","Arte de diseñar y usar tipos de letras","Edición de videos","Tipo de fotografía"], correcta:1 },
      { id:"FE3_03", texto:"¿Qué es la composición visual?", opciones:["Tipo de música","Organización de elementos visuales en un espacio","Programa de diseño","Técnica de escultura"], correcta:1 },
      { id:"FE3_04", texto:"¿Qué significa 'paleta de colores' en diseño?", opciones:["Herramienta física para mezclar pintura","Conjunto de colores específicos usados en un proyecto","Tipo de pantalla","Filtro fotográfico"], correcta:1 },
      { id:"FE3_05", texto:"¿Qué es el contraste en diseño visual?", opciones:["Usar muchos colores iguales","Diferencia marcada entre elementos para destacar información","Tipo de fuente","Técnica de animación"], correcta:1 },
      { id:"FE3_06", texto:"¿Qué hace Photoshop principalmente?", opciones:["Diseñar páginas web","Editar y manipular imágenes rasterizadas","Crear animaciones 3D","Programar apps"], correcta:1 },
      { id:"FE3_07", texto:"¿Qué es el branding?", opciones:["Tipo de pintura","Gestión de la identidad y percepción de una marca","Técnica de fotografía","Tipo de ilustración"], correcta:1 },
      { id:"FE3_08", texto:"¿Cuál es la diferencia entre imagen vectorial y rasterizada?", opciones:["No hay diferencia","Vector usa matemáticas y escala sin perder calidad; raster usa píxeles","Raster escala sin perder calidad","Solo el formato del archivo"], correcta:1 },
      { id:"FE3_09", texto:"¿Qué es el 'layout' en diseño?", opciones:["Color de fondo","Organización y disposición de los elementos en una página","Tipo de tipografía","Filtro de imagen"], correcta:1 },
      { id:"FE3_10", texto:"¿Qué es el diseño UX/UI?", opciones:["Solo el color de una app","Diseño centrado en la experiencia y la interfaz del usuario","Técnica de programación","Tipo de animación"], correcta:1 },
      { id:"FE3_11", texto:"¿Qué es la saturación de un color?", opciones:["Qué tan claro u oscuro es","Intensidad o pureza de un color","El tono del color","El brillo de la pantalla"], correcta:1 },
      { id:"FE3_12", texto:"¿Qué es el espacio negativo en diseño?", opciones:["Un error de diseño","El área vacía alrededor de los elementos que define forma","Color negro","Fondo oscuro"], correcta:1 },
      { id:"FE3_13", texto:"¿Cuál software se usa principalmente para diseño vectorial?", opciones:["Lightroom","Adobe Illustrator","After Effects","Premiere"], correcta:1 },
      { id:"FE3_14", texto:"¿Qué es la regla de los tercios en fotografía?", opciones:["Usar tres filtros en cada foto","Dividir la imagen en 9 partes iguales para componer mejor","Tomar tres fotos iguales","Editar en tres capas"], correcta:1 },
      { id:"FE3_15", texto:"¿Qué es una 'moodboard'?", opciones:["Tipo de animación","Collage de referencias visuales para definir estilo de un proyecto","Paleta de colores","Tipo de fuente tipográfica"], correcta:1 },
      { id:"FE3_16", texto:"¿Qué es el kerning?", opciones:["Tipo de ilustración","Ajuste del espacio entre caracteres tipográficos individuales","Técnica de fotografía","Estilo de fuente"], correcta:1 },
      { id:"FE3_17", texto:"¿Qué es el diseño responsivo?", opciones:["Diseño que responde lento","Diseño que se adapta visualmente a diferentes tamaños de pantalla","Diseño animado","Diseño interactivo"], correcta:1 },
      { id:"FE3_18", texto:"¿Qué es la identidad corporativa?", opciones:["El empleado más importante","Conjunto de elementos visuales que representan la imagen de una empresa","Solo el logotipo","Estilo del jefe"], correcta:1 },
      { id:"FE3_19", texto:"¿Qué es la armonía de color?", opciones:["Usar muchos colores brillantes","Combinación de colores que visualmente resultan agradables y coherentes","Solo colores pastel","Evitar el negro"], correcta:1 },
      { id:"FE3_20", texto:"¿Qué es el 'storyboard'?", opciones:["Tipo de póster","Secuencia de dibujos que planifican el orden visual de una producción","Herramienta de programación","Técnica de escultura"], correcta:1 },
      { id:"FE3_21", texto:"¿Qué es la escala en diseño?", opciones:["Solo el tamaño de la pantalla","Relación de tamaño entre elementos para crear jerarquía visual","Color predominante","Tipo de tipografía"], correcta:1 },
      { id:"FE3_22", texto:"¿Cuál es el propósito del diseño editorial?", opciones:["Crear apps","Organizar y diseñar contenido visual en libros, revistas y publicaciones","Hacer animaciones","Editar fotografías"], correcta:1 },
      { id:"FE3_23", texto:"¿Qué es la iconografía?", opciones:["Tipo de fotografía","Representación visual de conceptos mediante íconos o símbolos","Técnica de escultura","Tipo de fuente"], correcta:1 },
      { id:"FE3_24", texto:"¿Qué es el modelo de color CMYK?", opciones:["Sistema RGB extendido","Sistema de color para impresión (Cyan, Magenta, Yellow, Black)","Solo para pantallas","Sistema de luz"], correcta:1 },
      { id:"FE3_25", texto:"¿Qué hace un director de arte en publicidad?", opciones:["Gestiona presupuestos","Define la visión visual de campañas y dirige al equipo creativo","Diseña sitios web","Redacta textos"], correcta:1 },
      { id:"FE3_26", texto:"¿Qué es la animación 2D?", opciones:["Solo dibujos animados clásicos","Técnica de crear movimiento con imágenes en dos dimensiones","Animación solo para niños","Tipo de videojuego"], correcta:1 },
      { id:"FE3_27", texto:"¿Qué es el 'wireframe' en diseño web?", opciones:["Tipo de animación","Esquema básico de la estructura de una página sin diseño visual","Diseño final del sitio","Código de la página"], correcta:1 },
      { id:"FE3_28", texto:"¿Cuál es la resolución estándar para imágenes en impresión de calidad?", opciones:["72 DPI","150 DPI","300 DPI","600 DPI"], correcta:2 },
      { id:"FE3_29", texto:"¿Qué es el diseño sostenible?", opciones:["Solo usar colores verdes","Práctica de diseñar considerando el impacto ambiental y social","Usar materiales reciclados solo en packaging","Diseño gratuito"], correcta:1 },
      { id:"FE3_30", texto:"¿Qué habilidad consideras más importante para un diseñador?", opciones:["Saber muchos programas","Pensamiento crítico, empatía y criterio estético sólido","Dibujar perfectamente a mano","Conocer muchos estilos"], correcta:1 },
    ]
  },
  // Área 4 — Negocios
  4: {
    titulo: "Evaluación de Aptitud: Negocios y Administración",
    preguntas: [
      { id:"FE4_01", texto:"¿Qué es el flujo de caja de una empresa?", opciones:["El dinero del jefe","Registro de entradas y salidas de dinero en un período","Tipo de inversión","Nombre del banco"], correcta:1 },
      { id:"FE4_02", texto:"¿Qué significa ROI?", opciones:["Registro Oficial de Ingresos","Return On Investment (Retorno sobre la Inversión)","Reporte de Operaciones Internas","Red de Oportunidades Industriales"], correcta:1 },
      { id:"FE4_03", texto:"¿Qué es el marketing mix (las 4P)?", opciones:["Tipos de empleados","Producto, Precio, Plaza, Promoción","Pasos para contratar","Tipos de clientes"], correcta:1 },
      { id:"FE4_04", texto:"¿Qué es la misión de una empresa?", opciones:["Su historia","Razón de ser y propósito fundamental de la empresa","Lista de empleados","El logotipo"], correcta:1 },
      { id:"FE4_05", texto:"¿Qué es el análisis FODA?", opciones:["Tipo de contrato","Herramienta que analiza Fortalezas, Oportunidades, Debilidades y Amenazas","Sistema contable","Tipo de reunión"], correcta:1 },
      { id:"FE4_06", texto:"¿Qué es la contabilidad?", opciones:["Área de marketing","Registro sistemático de transacciones económicas de una empresa","Tipo de impuesto","Sistema de ventas"], correcta:1 },
      { id:"FE4_07", texto:"¿Qué es el punto de equilibrio?", opciones:["Cuando la empresa tiene muchas ganancias","Nivel de ventas donde ingresos igualan costos (ni ganancia ni pérdida)","El mejor mes del año","Cantidad máxima de empleados"], correcta:1 },
      { id:"FE4_08", texto:"¿Qué es el liderazgo transformacional?", opciones:["Liderar con castigos","Tipo de liderazgo que inspira y motiva cambios positivos en el equipo","Solo liderar por resultados","Liderar desde la distancia"], correcta:1 },
      { id:"FE4_09", texto:"¿Qué es la cadena de suministro?", opciones:["Red de ventas de supermercados","Sistema de proveedores, productores y distribuidores hasta el cliente final","Tipo de contrato","Crédito empresarial"], correcta:1 },
      { id:"FE4_10", texto:"¿Qué es el capital de trabajo?", opciones:["El salario del trabajador","Recursos corrientes disponibles para operar el negocio en el corto plazo","Tipo de inversión fija","El dinero del dueño"], correcta:1 },
      { id:"FE4_11", texto:"¿Qué es el mercado objetivo?", opciones:["La bolsa de valores","Grupo específico de personas a quien va dirigido un producto o servicio","El mercado central de la ciudad","Todos los clientes posibles"], correcta:1 },
      { id:"FE4_12", texto:"¿Qué es el balance general?", opciones:["Promedio de ventas","Estado financiero que muestra activos, pasivos y patrimonio en un momento","Lista de pagos de empleados","Resumen mensual de gastos"], correcta:1 },
      { id:"FE4_13", texto:"¿Qué es el emprendimiento?", opciones:["Solo crear empresas grandes","Proceso de crear, organizar y gestionar un negocio asumiendo riesgos","Obtener empleo estable","Inversión en bolsa"], correcta:1 },
      { id:"FE4_14", texto:"¿Qué es la gestión del talento humano?", opciones:["Solo pagar salarios","Atracción, desarrollo, motivación y retención del personal de una empresa","Contratar personas famosas","Solo entrevistar candidatos"], correcta:1 },
      { id:"FE4_15", texto:"¿Qué es el valor agregado de un producto?", opciones:["El precio final","Beneficio adicional que hace más atractivo el producto frente a la competencia","Costo de producción","Impuesto al producto"], correcta:1 },
      { id:"FE4_16", texto:"¿Qué es el benchmarking?", opciones:["Tipo de publicidad","Práctica de comparar procesos propios con los mejores del sector para mejorar","Evaluación de empleados","Estrategia de precios"], correcta:1 },
      { id:"FE4_17", texto:"¿Qué es el presupuesto en una empresa?", opciones:["Lista de deseos","Plan financiero que estima ingresos y gastos para un período futuro","Solo el salario","Tipo de inversión"], correcta:1 },
      { id:"FE4_18", texto:"¿Qué es la segmentación de mercado?", opciones:["Dividir las ganancias","Dividir el mercado en grupos con características similares para enfocarse mejor","Tipo de publicidad","Organización del personal"], correcta:1 },
      { id:"FE4_19", texto:"¿Qué es el ciclo de vida del producto?", opciones:["Tiempo de garantía","Etapas que atraviesa un producto: introducción, crecimiento, madurez, declive","Vida del fabricante","Duración física del producto"], correcta:1 },
      { id:"FE4_20", texto:"¿Qué es la responsabilidad social empresarial (RSE)?", opciones:["Solo pagar impuestos","Compromiso voluntario de la empresa con el bienestar social y ambiental","Donaciones obligatorias","Solo cumplir la ley"], correcta:1 },
      { id:"FE4_21", texto:"¿Qué es la tasa de interés?", opciones:["Porcentaje de empleados","Costo del dinero prestado o ganancia del dinero invertido expresado en %","Tipo de impuesto","Descuento en ventas"], correcta:1 },
      { id:"FE4_22", texto:"¿Qué es la estrategia de diferenciación?", opciones:["Copiar a la competencia","Ofrecer algo único que hace que los clientes elijan tu producto sobre otros","Bajar precios al mínimo","Eliminar competencia"], correcta:1 },
      { id:"FE4_23", texto:"¿Qué es la depreciación en contabilidad?", opciones:["Aumento del valor de un activo","Disminución del valor de un activo por uso u obsolescencia en el tiempo","Tipo de gasto operativo","Devolución de impuestos"], correcta:1 },
      { id:"FE4_24", texto:"¿Qué es la negociación ganar-ganar?", opciones:["Solo uno de los lados gana","Enfoque donde ambas partes obtienen beneficios satisfactorios","Tipo de contrato","Estrategia de precios"], correcta:1 },
      { id:"FE4_25", texto:"¿Qué es el marketing digital?", opciones:["Solo publicidad en TV","Estrategias de marketing aplicadas en canales digitales (redes, SEO, email)","Solo diseño de páginas web","Tipo de app"], correcta:1 },
      { id:"FE4_26", texto:"¿Qué es la liquidez de una empresa?", opciones:["Cantidad de empleados","Capacidad de pagar obligaciones a corto plazo con activos disponibles","Solo el efectivo en caja","Tipo de deuda"], correcta:1 },
      { id:"FE4_27", texto:"¿Qué es el plan de negocios?", opciones:["Solo el nombre de la empresa","Documento que describe objetivos, estrategia, finanzas y operaciones de un negocio","Lista de proveedores","Registro de ventas"], correcta:1 },
      { id:"FE4_28", texto:"¿Qué es el costo de oportunidad?", opciones:["El costo de producir más","Lo que se sacrifica al elegir una opción en lugar de la mejor alternativa","Precio de una máquina","Costo de marketing"], correcta:1 },
      { id:"FE4_29", texto:"¿Qué es la oferta y demanda?", opciones:["Solo precios de productos","Relación entre la cantidad de bienes disponibles y el interés de compradores","Tipo de impuesto","Sistema de distribución"], correcta:1 },
      { id:"FE4_30", texto:"¿Cuál crees que es la habilidad más importante para un buen administrador?", opciones:["Solo saber matemáticas","Liderazgo, comunicación, visión estratégica y adaptabilidad","Ser el más inteligente","Tener más experiencia"], correcta:1 },
    ]
  },
  // Área 5 — Educación
  5: {
    titulo: "Evaluación de Aptitud: Educación y Humanidades",
    preguntas: [
      { id:"FE5_01", texto:"¿Qué es la pedagogía?", opciones:["Técnica de cocina","Ciencia del arte de enseñar y los métodos educativos","Tipo de psicología","Sistema de evaluación"], correcta:1 },
      { id:"FE5_02", texto:"¿Cuál es el objetivo principal de la educación?", opciones:["Memorizar datos","Desarrollar capacidades intelectuales, éticas y sociales del individuo","Solo obtener trabajo","Pasar exámenes"], correcta:1 },
      { id:"FE5_03", texto:"¿Qué es el aprendizaje significativo?", opciones:["Aprender de memoria","Proceso donde el estudiante conecta nuevo conocimiento con lo que ya sabe","Solo aprender lo más fácil","Técnica de memorización"], correcta:1 },
      { id:"FE5_04", texto:"¿Qué es la empatía?", opciones:["Solo ser amable","Capacidad de comprender y compartir los sentimientos de otra persona","Tipo de emoción negativa","Técnica de negociación"], correcta:1 },
      { id:"FE5_05", texto:"¿Qué es el pensamiento crítico?", opciones:["Criticar a los demás","Habilidad de analizar, evaluar y cuestionar información de forma objetiva","Solo leer mucho","Tipo de inteligencia"], correcta:1 },
      { id:"FE5_06", texto:"¿Qué es la didáctica?", opciones:["Tipo de castigo escolar","Arte y ciencia de la enseñanza: métodos y técnicas para facilitar el aprendizaje","Solo el libro de texto","Sistema de calificaciones"], correcta:1 },
      { id:"FE5_07", texto:"¿Qué es la psicología del aprendizaje?", opciones:["Psicología para niños solo","Estudio de cómo las personas adquieren, organizan y aplican el conocimiento","Técnica de memoria","Método de enseñanza"], correcta:1 },
      { id:"FE5_08", texto:"¿Qué es la inclusión educativa?", opciones:["Solo para personas con discapacidad","Garantizar acceso y participación de todos en el sistema educativo sin discriminación","Tipo de institución","Sistema de becas"], correcta:1 },
      { id:"FE5_09", texto:"¿Qué es la ética profesional?", opciones:["Seguir reglas por obligación","Conjunto de valores y principios que guían la conducta en el ejercicio profesional","Solo ser honesto","Tipo de evaluación"], correcta:1 },
      { id:"FE5_10", texto:"¿Qué es la resolución de conflictos?", opciones:["Evitar discusiones","Proceso de encontrar soluciones pacíficas y justas a desacuerdos entre personas","Solo ceder en los conflictos","Tipo de negociación"], correcta:1 },
      { id:"FE5_11", texto:"¿Qué es la inteligencia emocional?", opciones:["Solo controlar emociones","Capacidad de reconocer, entender y gestionar propias emociones y las de otros","Tipo de prueba psicológica","Habilidad solo de psicólogos"], correcta:1 },
      { id:"FE5_12", texto:"¿Qué es la investigación cualitativa?", opciones:["Solo usar estadísticas","Método que busca entender fenómenos mediante significados, contextos y experiencias","Tipo de encuesta","Investigación de laboratorio"], correcta:1 },
      { id:"FE5_13", texto:"¿Qué es la oratoria?", opciones:["Solo leer en voz alta","Arte de hablar en público de forma persuasiva, clara y efectiva","Tipo de escritura","Técnica de debate"], correcta:1 },
      { id:"FE5_14", texto:"¿Qué es el currículo educativo?", opciones:["Solo las materias que se enseñan","Conjunto de objetivos, contenidos, métodos y evaluaciones de un proceso formativo","Lista de libros de texto","El horario escolar"], correcta:1 },
      { id:"FE5_15", texto:"¿Qué es la filosofía?", opciones:["Tipo de religión","Disciplina que estudia cuestiones fundamentales sobre la existencia, el conocimiento y la ética","Solo para intelectuales","Historia antigua"], correcta:1 },
      { id:"FE5_16", texto:"¿Qué es la sociología?", opciones:["Solo estudiar grupos de personas","Ciencia que estudia la sociedad, sus estructuras, relaciones y cambios","Tipo de psicología","Estudio de culturas antiguas"], correcta:1 },
      { id:"FE5_17", texto:"¿Qué es un perfil docente?", opciones:["El físico del profesor","Conjunto de competencias, habilidades y actitudes que debe tener un buen educador","Solo el título académico","Los años de experiencia"], correcta:1 },
      { id:"FE5_18", texto:"¿Qué es la evaluación formativa?", opciones:["Examen final","Evaluación continua que busca mejorar el aprendizaje durante el proceso educativo","Solo calificaciones","Tipo de tarea"], correcta:1 },
      { id:"FE5_19", texto:"¿Qué es la hermenéutica?", opciones:["Técnica médica","Arte de interpretar textos, símbolos y mensajes de forma profunda","Tipo de filosofía griega","Solo análisis literario"], correcta:1 },
      { id:"FE5_20", texto:"¿Qué es la andragogía?", opciones:["Pedagogía para niños","Educación orientada específicamente a adultos y sus necesidades de aprendizaje","Solo educación universitaria","Tipo de pedagogía antigua"], correcta:1 },
      { id:"FE5_21", texto:"¿Qué son los derechos humanos?", opciones:["Beneficios del gobierno","Derechos fundamentales inherentes a toda persona por su condición humana","Lista de leyes","Solo para ciudadanos"], correcta:1 },
      { id:"FE5_22", texto:"¿Qué es la lingüística?", opciones:["Arte de hablar idiomas","Ciencia que estudia el lenguaje humano y sus estructuras","Solo gramática","Tipo de literatura"], correcta:1 },
      { id:"FE5_23", texto:"¿Qué es la memoria colectiva?", opciones:["La memoria de muchas personas","Recuerdos e historia compartida que construye la identidad de un grupo social","Tipo de archivo","Base de datos histórica"], correcta:1 },
      { id:"FE5_24", texto:"¿Qué es la motivación intrínseca?", opciones:["Motivación por premios externos","Motivación que surge del interior de la persona por interés o satisfacción propia","Solo para deportistas","Tipo de evaluación"], correcta:1 },
      { id:"FE5_25", texto:"¿Qué es la cultura?", opciones:["Solo arte y música","Conjunto de creencias, valores, tradiciones y prácticas compartidas por un grupo humano","Tipo de educación","Solo idioma"], correcta:1 },
      { id:"FE5_26", texto:"¿Qué es la antropología?", opciones:["Estudio de robots","Ciencia que estudia el origen, evolución y diversidad de los seres humanos","Solo estudio de huesos","Tipo de biología"], correcta:1 },
      { id:"FE5_27", texto:"¿Qué es la neurodiversidad?", opciones:["Enfermedad cerebral","Variaciones naturales en el funcionamiento del cerebro humano entre personas","Solo el autismo","Tipo de discapacidad"], correcta:1 },
      { id:"FE5_28", texto:"¿Qué es el constructivismo en educación?", opciones:["Construir escuelas","Teoría donde el estudiante construye activamente su propio conocimiento","Solo trabajo en grupo","Técnica de memoria"], correcta:1 },
      { id:"FE5_29", texto:"¿Qué es la ética en la investigación?", opciones:["Solo no copiar","Conjunto de principios que garantizan honestidad, respeto y responsabilidad en la investigación","Tipo de examen","Solo para científicos"], correcta:1 },
      { id:"FE5_30", texto:"¿Qué habilidad crees esencial para ser buen educador o humanista?", opciones:["Solo saber mucho de la materia","Paciencia, empatía, comunicación clara y amor genuino por el aprendizaje","Tener el título más alto","Solo experiencia"], correcta:1 },
    ]
  },
  // Área 6 — Ingeniería y Construcción
  6: {
    titulo: "Evaluación de Aptitud: Ingeniería y Construcción",
    preguntas: [
      { id:"FE6_01", texto:"¿Qué es la resistencia de materiales?", opciones:["Cómo limpiar materiales","Estudio de cómo los materiales soportan fuerzas y cargas sin romperse","Tipo de material","Historia de construcción"], correcta:1 },
      { id:"FE6_02", texto:"¿Qué hace un plano arquitectónico?", opciones:["Decorar habitaciones","Representar gráficamente el diseño y medidas de una construcción","Lista de materiales","Calcular costos"], correcta:1 },
      { id:"FE6_03", texto:"¿Qué es la estática en ingeniería?", opciones:["Electricidad estática","Rama que estudia cuerpos en reposo bajo la acción de fuerzas en equilibrio","Tipo de material","Diseño de edificios"], correcta:1 },
      { id:"FE6_04", texto:"¿Qué es el concreto armado?", opciones:["Concreto de alta tecnología","Mezcla de concreto y acero que combina resistencia a compresión y tensión","Tipo de pintura","Material para paredes"], correcta:1 },
      { id:"FE6_05", texto:"¿Qué es una cimentación?", opciones:["El techo de un edificio","Base estructural que transmite cargas del edificio al suelo de forma segura","Tipo de material","Sistema eléctrico"], correcta:1 },
      { id:"FE6_06", texto:"¿Qué es la topografía?", opciones:["Tipo de arte","Técnica de medir y representar el terreno y sus características físicas","Historia geográfica","Solo para mapas"], correcta:1 },
      { id:"FE6_07", texto:"¿Qué es la termodinámica?", opciones:["Estudio del calor dinosaurios","Rama de la física que estudia la energía, calor y trabajo en sistemas","Solo para química","Tipo de motor"], correcta:1 },
      { id:"FE6_08", texto:"¿Qué hace un ingeniero civil?", opciones:["Diseña ropa","Diseña, construye y supervisa infraestructura: vías, puentes, edificios, etc.","Repara autos","Gestiona empresas"], correcta:1 },
      { id:"FE6_09", texto:"¿Qué es la resistencia eléctrica (Ley de Ohm)?", opciones:["Velocidad de la corriente","Oposición al flujo de corriente eléctrica (R = V/I)","Tipo de cable","Voltaje de un aparato"], correcta:1 },
      { id:"FE6_10", texto:"¿Qué es el estrés estructural?", opciones:["Cansancio del ingeniero","Fuerza interna por unidad de área en un material bajo carga aplicada","Tipo de material","Ruido en una obra"], correcta:1 },
      { id:"FE6_11", texto:"¿Qué es la mecánica de fluidos?", opciones:["Reparar plomería básica","Estudio del comportamiento de líquidos y gases en reposo y en movimiento","Solo agua en tuberías","Tipo de motor"], correcta:1 },
      { id:"FE6_12", texto:"¿Qué es AutoCAD?", opciones:["Tipo de automóvil","Software de diseño asistido por computadora usado en ingeniería y arquitectura","Tipo de material","Programa de contabilidad"], correcta:1 },
      { id:"FE6_13", texto:"¿Qué es una viga?", opciones:["Herramienta manual","Elemento estructural horizontal que soporta cargas y las transfiere a columnas","Tipo de cemento","Sistema de drenaje"], correcta:1 },
      { id:"FE6_14", texto:"¿Qué es el mantenimiento preventivo?", opciones:["Reparar cuando ya falla","Acciones planificadas para evitar fallas y prolongar la vida útil de equipos","Tipo de inspección","Solo en edificios"], correcta:1 },
      { id:"FE6_15", texto:"¿Qué es el factor de seguridad en diseño estructural?", opciones:["Seguro de trabajo","Relación entre capacidad real del material y la carga máxima permitida","Tipo de material","Permiso de construcción"], correcta:1 },
      { id:"FE6_16", texto:"¿Qué es la hidrología?", opciones:["Estudio de la historia del agua","Ciencia que estudia el ciclo del agua y su distribución en la Tierra","Solo plomería","Tipo de acuífero"], correcta:1 },
      { id:"FE6_17", texto:"¿Qué es un sistema de alcantarillado?", opciones:["Decoración urbana","Red de tuberías para evacuar aguas residuales de manera segura e higiénica","Sistema eléctrico","Tipo de acueducto"], correcta:1 },
      { id:"FE6_18", texto:"¿Qué es la ingeniería sismorresistente?", opciones:["Estudiar terremotos","Diseño de estructuras capaces de soportar movimientos sísmicos sin colapsar","Solo para zonas sísmicas","Tipo de material antivibración"], correcta:1 },
      { id:"FE6_19", texto:"¿Qué son los ensayos de materiales?", opciones:["Pruebas de colores","Pruebas que verifican las propiedades físicas y mecánicas de los materiales","Tipo de experimento escolar","Solo para metales"], correcta:1 },
      { id:"FE6_20", texto:"¿Qué es la energía renovable?", opciones:["Solo energía solar","Energía que proviene de fuentes naturales ilimitadas o que se regeneran","Tipo de combustible","Energía sin costo"], correcta:1 },
      { id:"FE6_21", texto:"¿Qué es la gestión de proyectos en ingeniería?", opciones:["Solo contratar obreros","Planificación, ejecución y control de proyectos para cumplir objetivos de tiempo y costo","Tipo de licencia","Diseño de planos"], correcta:1 },
      { id:"FE6_22", texto:"¿Qué es el BIM (Building Information Modeling)?", opciones:["Tipo de material","Metodología digital de gestión de información en proyectos de construcción","Solo software de diseño","Tipo de concreto"], correcta:1 },
      { id:"FE6_23", texto:"¿Qué hace un técnico en mantenimiento industrial?", opciones:["Solo limpia máquinas","Realiza mantenimiento preventivo y correctivo de equipos y maquinaria industrial","Diseña fábricas","Solo instala equipos nuevos"], correcta:1 },
      { id:"FE6_24", texto:"¿Qué es la ergonomía?", opciones:["Tipo de ejercicio","Diseño de espacios y herramientas adaptados al cuerpo humano para mayor seguridad","Solo para oficinas","Tipo de mobiliario"], correcta:1 },
      { id:"FE6_25", texto:"¿Qué es la norma sismo resistente NSR-10 en Colombia?", opciones:["Lista de materiales","Reglamento que establece los criterios para diseño sismorresistente en Colombia","Tipo de licencia de construcción","Solo para edificios altos"], correcta:1 },
      { id:"FE6_26", texto:"¿Qué es la eficiencia energética?", opciones:["Usar más energía","Usar la menor cantidad de energía posible para lograr el mismo resultado","Solo ahorro de luz","Tipo de motor"], correcta:1 },
      { id:"FE6_27", texto:"¿Qué es un estudio de suelos?", opciones:["Analizar la tierra para jardines","Análisis de las propiedades del terreno para garantizar la seguridad de cimentaciones","Tipo de topografía","Solo para grandes obras"], correcta:1 },
      { id:"FE6_28", texto:"¿Qué es el presupuesto de obra?", opciones:["Sueldo del ingeniero","Estimación del costo total de todos los materiales y mano de obra de una construcción","Lista de permisos","Tipo de contrato"], correcta:1 },
      { id:"FE6_29", texto:"¿Qué es el diseño bioclimático?", opciones:["Solo diseño con plantas","Arquitectura que aprovecha condiciones climáticas naturales para ahorrar energía","Solo para zonas cálidas","Tipo de diseño verde"], correcta:1 },
      { id:"FE6_30", texto:"¿Qué actitud crees más importante en un ingeniero o constructor?", opciones:["Solo saber calcular","Rigor técnico, responsabilidad, trabajo en equipo y ética ante la seguridad pública","Solo la experiencia","Tener los mejores equipos"], correcta:1 },
    ]
  },
  // Área 7 — Gastronomía
  7: {
    titulo: "Evaluación de Aptitud: Gastronomía y Hotelería",
    preguntas: [
      { id:"FE7_01", texto:"¿Qué es la mise en place?", opciones:["Un plato francés","Preparación y organización previa de todos los ingredientes y utensilios en cocina","Tipo de salsa","Sistema de pedidos"], correcta:1 },
      { id:"FE7_02", texto:"¿Qué son las BPM en gastronomía?", opciones:["Buenas Prácticas de Manufactura: normas de higiene y seguridad alimentaria","Medidas de sabor","Tipos de cocción","Nombre de recetas"], correcta:0 },
      { id:"FE7_03", texto:"¿Qué es la temperatura de peligro en alimentos?", opciones:["Cuando se cocina demasiado","Rango de 4°C a 60°C donde bacterias crecen rápidamente","Solo freezer frío","Temperatura de cocción máxima"], correcta:1 },
      { id:"FE7_04", texto:"¿Qué diferencia hay entre sauté y braisé?", opciones:["Ninguna","Sauté es cocción rápida en poco aceite; braisé es cocción lenta en líquido cubierto","Braisé es más rápido","Solo el país de origen"], correcta:1 },
      { id:"FE7_05", texto:"¿Qué es la cocina de autor?", opciones:["Cocinar libros","Expresión culinaria personal del chef que refleja su creatividad e identidad","Solo cocina francesa","Recetas famosas"], correcta:1 },
      { id:"FE7_06", texto:"¿Qué es el PEPS/FIFO en cocina?", opciones:["Sistema de precios","Principio para usar primero lo que llegó primero para evitar desperdicio","Nombre de receta","Sistema de pedidos"], correcta:1 },
      { id:"FE7_07", texto:"¿Qué hace el chef ejecutivo en un restaurante?", opciones:["Solo cocinar","Dirige la cocina, diseña el menú, gestiona al equipo y controla costos","Solo atender clientes","Lava los platos"], correcta:1 },
      { id:"FE7_08", texto:"¿Qué es la brigada de cocina?", opciones:["El uniforme del chef","Equipo organizado jerárquicamente que trabaja en la cocina de un restaurante","Solo los cocineros","El grupo de meseros"], correcta:1 },
      { id:"FE7_09", texto:"¿Qué es la gastronomía molecular?", opciones:["Cocina química peligrosa","Aplicación de ciencia y tecnología para transformar la textura y presentación de alimentos","Solo para laboratorios","Tipo de dieta"], correcta:1 },
      { id:"FE7_10", texto:"¿Qué es el food cost?", opciones:["Precio del restaurante","Porcentaje del costo de ingredientes respecto al precio de venta del plato","Salario del chef","Tipo de impuesto"], correcta:1 },
      { id:"FE7_11", texto:"¿Qué es la repostería?", opciones:["Solo hacer tortas","Arte de elaborar postres, panes dulces, galletas y productos de pastelería","Técnica de cocina salada","Solo decorar tortas"], correcta:1 },
      { id:"FE7_12", texto:"¿Qué es la cocción al vapor?", opciones:["Cocinar con agua hirviendo sumergida","Método de cocinar alimentos con vapor de agua sin contacto directo con el líquido","Tipo de horno","Solo para verduras"], correcta:1 },
      { id:"FE7_13", texto:"¿Qué es la contaminación cruzada en cocina?", opciones:["Usar muchos ingredientes juntos","Transferencia de patógenos de un alimento a otro durante la manipulación","Solo en ensaladas","Mezclar sabores"], correcta:1 },
      { id:"FE7_14", texto:"¿Qué es la mentoría culinaria?", opciones:["Ver videos de cocina","Guía de un chef experimentado a uno en formación para desarrollar habilidades","Solo leer recetas","Tipo de certificación"], correcta:1 },
      { id:"FE7_15", texto:"¿Qué es la carta o menú degustación?", opciones:["Lista de ingredientes","Secuencia de pequeñas porciones que muestran la habilidad del chef en varios sabores","Solo para eventos","Tipo de descuento"], correcta:1 },
      { id:"FE7_16", texto:"¿Qué es el sous vide?", opciones:["Tipo de cuchillo","Técnica de cocción al vacío a temperatura controlada y baja por tiempo largo","Tipo de salsa","Solo para carnes"], correcta:1 },
      { id:"FE7_17", texto:"¿Qué es el maridaje?", opciones:["Tipo de cocina","Combinación armónica de vinos u otras bebidas con platos específicos","Solo técnica francesa","Decoración de mesa"], correcta:1 },
      { id:"FE7_18", texto:"¿Qué es el protocolo de servicio en un restaurante?", opciones:["Lista de reglas estrictas","Conjunto de normas y procedimientos para ofrecer un servicio de calidad al cliente","Solo para fine dining","Tipo de contrato"], correcta:1 },
      { id:"FE7_19", texto:"¿Qué es la cocina de fusión?", opciones:["Mezclar todo sin criterio","Combinación intencional de técnicas e ingredientes de diferentes culturas culinarias","Solo cocina asiática","Tipo de error culinario"], correcta:1 },
      { id:"FE7_20", texto:"¿Qué es el revenue management en hotelería?", opciones:["Gestión de quejas","Estrategia para maximizar ingresos ajustando precios según demanda y temporada","Solo para hoteles de lujo","Lista de servicios"], correcta:1 },
      { id:"FE7_21", texto:"¿Qué son los fondos de cocina?", opciones:["Dinero de la cocina","Bases líquidas (de carne, verduras, pescado) que sirven para salsas y sopas","Tipo de aceite","Rellenos de pasteles"], correcta:1 },
      { id:"FE7_22", texto:"¿Qué es el uniforme del chef (importancia)?", opciones:["Solo apariencia","Protección, higiene y distinción de rango dentro del equipo de cocina","Solo para fotos","Obligación laboral"], correcta:1 },
      { id:"FE7_23", texto:"¿Qué es la cocina de temporada?", opciones:["Solo cocinar en verano","Usar ingredientes frescos disponibles en cada estación del año para mayor calidad","Técnica de almacenamiento","Solo para mercados"], correcta:1 },
      { id:"FE7_24", texto:"¿Qué es la mise en garde en hotelería?", opciones:["Tipo de habitación","Protocolo de seguridad y preparación de procedimientos de emergencia en hoteles","Solo para seguridad","Tipo de servicio"], correcta:1 },
      { id:"FE7_25", texto:"¿Qué son los alérgenos alimentarios?", opciones:["Solo el gluten","Sustancias en alimentos que causan reacción inmunológica adversa en personas sensibles","Toxinas peligrosas","Solo en mariscos"], correcta:1 },
      { id:"FE7_26", texto:"¿Qué es el check-in y check-out en hotelería?", opciones:["Tipos de habitación","Proceso de registro de entrada y salida del huésped al hotel","Tipo de tarifa","Solo para turismo"], correcta:1 },
      { id:"FE7_27", texto:"¿Qué es la pastelería artística?", opciones:["Hacer pasteles comestibles","Arte de crear piezas de pastelería con alto nivel estético y técnica decorativa","Solo para bodas","Tipo de concurso"], correcta:1 },
      { id:"FE7_28", texto:"¿Qué es la gestión de residuos en cocina?", opciones:["Tirar basura cualquier parte","Manejo responsable de desperdicios para reducir el impacto ambiental en la operación","Solo para empresas grandes","Tipo de reciclaje"], correcta:1 },
      { id:"FE7_29", texto:"¿Qué es la cocina vegana?", opciones:["Solo verduras hervidas","Cocina que no usa ningún producto de origen animal: ni lácteos, ni huevos, ni carne","Solo para enfermos","Tipo de dieta temporal"], correcta:1 },
      { id:"FE7_30", texto:"¿Qué actitud es esencial en la cocina profesional?", opciones:["Solo saber recetas","Disciplina, pasión, higiene, trabajo en equipo y actitud de aprendizaje continuo","Solo la rapidez","Tener el mejor cuchillo"], correcta:1 },
    ]
  },
  // Área 8 — Derecho y Ciencias Sociales
  8: {
    titulo: "Evaluación de Aptitud: Derecho y Ciencias Sociales",
    preguntas: [
      { id:"FE8_01", texto:"¿Qué es el Estado de Derecho?", opciones:["Un tipo de gobierno monárquico","Sistema donde el poder está limitado y todos — incluido el gobierno — deben respetar la ley","Solo la Constitución","Nombre del sistema judicial"], correcta:1 },
      { id:"FE8_02", texto:"¿Qué son los derechos fundamentales?", opciones:["Derechos de los trabajadores únicamente","Derechos inherentes a toda persona reconocidos por la Constitución y tratados internacionales","Privilegios que da el gobierno","Solo el derecho al voto"], correcta:1 },
      { id:"FE8_03", texto:"¿Qué es la tutela en Colombia?", opciones:["Tipo de herencia","Mecanismo judicial para proteger derechos fundamentales de forma rápida e inmediata","Solo para menores de edad","Tipo de contrato civil"], correcta:1 },
      { id:"FE8_04", texto:"¿Qué diferencia hay entre derecho penal y derecho civil?", opciones:["Son lo mismo","Penal regula delitos y sanciones del Estado; civil regula relaciones entre particulares","Solo el juez que interviene","Solo el tiempo del proceso"], correcta:1 },
      { id:"FE8_05", texto:"¿Qué es la presunción de inocencia?", opciones:["Que todos son culpables hasta probarse lo contrario","Principio de que toda persona es inocente hasta que se demuestre su culpabilidad legalmente","Solo aplica en delitos menores","Tipo de recurso judicial"], correcta:1 },
      { id:"FE8_06", texto:"¿Qué es el habeas corpus?", opciones:["Tipo de contrato","Acción legal para proteger la libertad física de una persona detenida ilegalmente","Documento de propiedad","Tipo de demanda civil"], correcta:1 },
      { id:"FE8_07", texto:"¿Qué es la sociología?", opciones:["Solo estudiar grupos de personas","Ciencia que estudia las estructuras, relaciones y cambios en la sociedad","Psicología aplicada","Historia del arte"], correcta:1 },
      { id:"FE8_08", texto:"¿Qué es la Constitución Política?", opciones:["Un libro de historia","Norma jurídica suprema que establece los principios y estructura del Estado","Solo las leyes tributarias","El código penal"], correcta:1 },
      { id:"FE8_09", texto:"¿Qué es el trabajo social?", opciones:["Trabajo voluntario","Profesión que promueve el bienestar social y apoya a personas en situación de vulnerabilidad","Solo ayuda a indigentes","Tipo de trabajo comunitario sin estudios"], correcta:1 },
      { id:"FE8_10", texto:"¿Qué es la jurisprudencia?", opciones:["Colección de leyes","Conjunto de decisiones judiciales que sirven como precedente para resolver casos similares","Solo las sentencias de la Corte Suprema","Tipo de investigación legal"], correcta:1 },
      { id:"FE8_11", texto:"¿Qué es la mediación en resolución de conflictos?", opciones:["Proceso judicial obligatorio","Método alternativo donde un tercero neutral ayuda a las partes a llegar a un acuerdo","Solo para conflictos laborales","Tipo de castigo legal"], correcta:1 },
      { id:"FE8_12", texto:"¿Qué es el debido proceso?", opciones:["El tiempo que dura un juicio","Garantía de que todo procedimiento judicial siga reglas justas que protegen al ciudadano","Solo para juicios penales","El orden de los abogados"], correcta:1 },
      { id:"FE8_13", texto:"¿Qué estudia la criminología?", opciones:["Solo técnicas policiales","Disciplina que analiza las causas, formas y consecuencias del crimen en la sociedad","Solo el derecho penal","Historia de los crímenes famosos"], correcta:1 },
      { id:"FE8_14", texto:"¿Qué es el derecho internacional humanitario?", opciones:["Leyes de comercio entre países","Normas que limitan los efectos de los conflictos armados y protegen a personas no combatientes","Tratados de paz","Solo las leyes de la ONU"], correcta:1 },
      { id:"FE8_15", texto:"¿Qué es la igualdad de género como concepto jurídico?", opciones:["Solo que hombres y mujeres ganen igual","Principio que garantiza igualdad de derechos, oportunidades y trato sin discriminación por sexo","Solo aplica en el trabajo","Tipo de cuota política"], correcta:1 },
      { id:"FE8_16", texto:"¿Qué es un contrato según el derecho civil?", opciones:["Solo un papel con firmas","Acuerdo de voluntades entre dos o más partes que genera obligaciones y derechos","Solo contratos laborales","Lista de condiciones de venta"], correcta:1 },
      { id:"FE8_17", texto:"¿Qué es la política pública?", opciones:["Plan de un partido político","Conjunto de decisiones y acciones del Estado para resolver problemas de la sociedad","Solo las leyes aprobadas","Programa de gobierno"], correcta:1 },
      { id:"FE8_18", texto:"¿Qué es la responsabilidad civil extracontractual?", opciones:["Responsabilidad penal","Obligación de reparar el daño causado a otra persona por un acto fuera de un contrato","Solo aplica a empresas","Tipo de seguro"], correcta:1 },
      { id:"FE8_19", texto:"¿Qué es el derecho de autor?", opciones:["Solo para escritores","Protección legal que reconoce derechos morales y patrimoniales del creador de una obra original","Solo aplica si se registra","Tipo de marca comercial"], correcta:1 },
      { id:"FE8_20", texto:"¿Qué es la acción popular en Colombia?", opciones:["Protesta callejera","Mecanismo legal para proteger derechos colectivos e intereses de la comunidad","Solo para organizaciones","Tipo de demanda penal"], correcta:1 },
      { id:"FE8_21", texto:"¿Qué es la exclusión social?", opciones:["Ser rechazado en una fiesta","Proceso por el cual personas o grupos son marginados del acceso a recursos, derechos y participación","Solo pobreza económica","Tipo de discriminación menor"], correcta:1 },
      { id:"FE8_22", texto:"¿Qué es el derecho laboral?", opciones:["Leyes solo de sindicatos","Rama del derecho que regula las relaciones entre trabajadores y empleadores","Solo para grandes empresas","El derecho a trabajar"], correcta:1 },
      { id:"FE8_23", texto:"¿Qué son los tratados internacionales de derechos humanos?", opciones:["Recomendaciones sin valor legal","Acuerdos vinculantes entre Estados para proteger derechos de sus ciudadanos","Solo los de la ONU","Tipo de declaración política"], correcta:1 },
      { id:"FE8_24", texto:"¿Qué es el interés superior del menor?", opciones:["Que los niños son más importantes","Principio jurídico que en toda decisión que afecte a un niño se debe priorizar su bienestar","Solo aplica en divorcios","Tipo de protección escolar"], correcta:1 },
      { id:"FE8_25", texto:"¿Qué es la acción de cumplimiento?", opciones:["Obligar a alguien a pagar","Mecanismo para exigir el cumplimiento de leyes o actos administrativos que no se aplican","Tipo de proceso civil","Solo para incumplimientos de contratos"], correcta:1 },
      { id:"FE8_26", texto:"¿Qué es la antropología social?", opciones:["Estudio de los huesos","Disciplina que estudia las culturas, estructuras sociales y comportamientos humanos","Solo historia antigua","Tipo de psicología"], correcta:1 },
      { id:"FE8_27", texto:"¿Qué es el sistema acusatorio en Colombia?", opciones:["Sistema donde el juez investiga y juzga","Sistema donde la Fiscalía acusa y el juez decide con base en el debate entre partes","Solo para delitos graves","Sistema de arbitraje"], correcta:1 },
      { id:"FE8_28", texto:"¿Qué es el derecho constitucional?", opciones:["Solo la Constitución escrita","Rama del derecho que estudia la organización del Estado y los derechos fundamentales","Solo derecho penal especial","Las leyes más viejas del país"], correcta:1 },
      { id:"FE8_29", texto:"¿Por qué es importante conocer los derechos humanos para trabajar en ciencias sociales?", opciones:["No es necesario","Porque son el marco ético y legal para defender la dignidad humana en cualquier intervención social","Solo para abogados","Es suficiente con buenas intenciones"], correcta:1 },
      { id:"FE8_30", texto:"¿Qué habilidad consideras más esencial para un profesional del derecho o las ciencias sociales?", opciones:["Memorizar todas las leyes","Pensamiento crítico, empatía, argumentación y compromiso con la justicia social","Solo ser buen orador","Conocer muchos casos famosos"], correcta:1 },
    ]
  },
  // Área 9 — Comunicación y Medios
  9: {
    titulo: "Evaluación de Aptitud: Comunicación y Medios",
    preguntas: [
      { id:"FE9_01", texto:"¿Qué es el periodismo de investigación?", opciones:["Solo entrevistar famosos","Práctica periodística que profundiza en temas de interés público mediante investigación rigurosa","Solo noticias de política","Tipo de periodismo deportivo"], correcta:1 },
      { id:"FE9_02", texto:"¿Qué es la narrativa transmedia?", opciones:["Ver TV y cine al mismo tiempo","Historia o contenido distribuido en múltiples plataformas, cada una con aporte original","Solo para videojuegos","Tipo de publicidad"], correcta:1 },
      { id:"FE9_03", texto:"¿Qué es el SEO (Search Engine Optimization)?", opciones:["Tipo de software","Conjunto de técnicas para mejorar el posicionamiento orgánico de un sitio en buscadores","Solo publicidad pagada","Diseño web"], correcta:1 },
      { id:"FE9_04", texto:"¿Qué es la comunicación asertiva?", opciones:["Hablar muy rápido","Capacidad de expresar ideas y sentimientos de forma clara, directa y respetuosa","Solo no discutir","Hablar en público"], correcta:1 },
      { id:"FE9_05", texto:"¿Qué es el framing en comunicación?", opciones:["Tipo de foto","Manera en que los medios enmarcan una historia para influir en la percepción del público","Solo técnica de cine","Tipo de edición de video"], correcta:1 },
      { id:"FE9_06", texto:"¿Qué son las redes sociales desde la perspectiva comunicacional?", opciones:["Solo entretenimiento","Plataformas digitales que permiten crear, compartir e intercambiar información y contenido","Solo para publicidad","Tipo de periodismo digital"], correcta:1 },
      { id:"FE9_07", texto:"¿Qué es la producción audiovisual?", opciones:["Solo grabar videos caseros","Proceso de planificación, grabación y edición de contenido en audio y video con objetivos comunicativos","Solo para televisión","Tipo de arte plástico"], correcta:1 },
      { id:"FE9_08", texto:"¿Qué es la desinformación?", opciones:["No tener internet","Difusión intencional de información falsa o engañosa para influir en la opinión pública","Solo noticias antiguas","Error de comunicación"], correcta:1 },
      { id:"FE9_09", texto:"¿Qué es el community manager?", opciones:["Gerente de una comunidad física","Profesional que gestiona la presencia de una marca o institución en redes sociales","Solo programador web","Periodista digital"], correcta:1 },
      { id:"FE9_10", texto:"¿Qué es el lead en un artículo periodístico?", opciones:["El título grande","Primer párrafo que responde las preguntas fundamentales: qué, quién, cuándo, dónde y por qué","El resumen al final","La foto principal"], correcta:1 },
      { id:"FE9_11", texto:"¿Qué es el storyboard en producción audiovisual?", opciones:["El guion escrito","Secuencia visual de cuadros que planifica las tomas y escenas de una producción","El presupuesto de rodaje","Lista de actores"], correcta:1 },
      { id:"FE9_12", texto:"¿Qué es la comunicación organizacional?", opciones:["Comunicar solo con el jefe","Gestión de la comunicación interna y externa de una organización para lograr sus objetivos","Solo publicidad corporativa","Tipo de mercadeo"], correcta:1 },
      { id:"FE9_13", texto:"¿Qué es el podcast?", opciones:["Tipo de radio AM","Archivo de audio digital publicado en internet y disponible para suscripción y escucha bajo demanda","Solo para música","Tipo de transmisión en vivo"], correcta:1 },
      { id:"FE9_14", texto:"¿Qué es la imagen corporativa?", opciones:["Solo el logotipo","Percepción que el público tiene de una empresa construida a través de todos sus mensajes y acciones","El color de la empresa","Solo el slogan"], correcta:1 },
      { id:"FE9_15", texto:"¿Qué es el análisis de audiencia?", opciones:["Contar cuántas personas ven algo","Estudio sistemático de las características, hábitos y preferencias del público objetivo","Solo encuestas de opinión","Tipo de estadística avanzada"], correcta:1 },
      { id:"FE9_16", texto:"¿Qué es la edición de video no lineal?", opciones:["Editar en orden de filmación","Proceso de edición digital que permite acceder y modificar cualquier parte del video sin orden secuencial","Solo para cine","Tipo de programa de computadora"], correcta:1 },
      { id:"FE9_17", texto:"¿Qué es el comunicado de prensa?", opciones:["Solo un correo","Documento oficial enviado a los medios para informar sobre noticias de una organización","Tipo de anuncio pagado","Solo para empresas grandes"], correcta:1 },
      { id:"FE9_18", texto:"¿Qué es el storytelling en comunicación?", opciones:["Contar cuentos infantiles","Técnica de comunicar ideas o marcas usando narrativas emocionalmente conectadas con el público","Solo para libros","Tipo de publicidad tradicional"], correcta:1 },
      { id:"FE9_19", texto:"¿Qué es la ética periodística?", opciones:["Seguir solo las instrucciones del jefe","Conjunto de principios que guían la práctica periodística: veracidad, imparcialidad y responsabilidad","Solo no inventar noticias","Tipo de normativa legal"], correcta:1 },
      { id:"FE9_20", texto:"¿Qué es el marketing de contenidos?", opciones:["Solo hacer anuncios","Estrategia de crear y distribuir contenido valioso para atraer y fidelizar a una audiencia específica","Solo blogs y artículos","Tipo de publicidad masiva"], correcta:1 },
      { id:"FE9_21", texto:"¿Qué es la semiótica?", opciones:["Tipo de matemáticas","Ciencia que estudia los signos, símbolos y su significado en la comunicación humana","Solo para filólogos","Tipo de gramática"], correcta:1 },
      { id:"FE9_22", texto:"¿Qué es la agenda setting en medios?", opciones:["Planificar una reunión","Capacidad de los medios para determinar qué temas considera importante el público","Solo para periodismo político","Tipo de encuesta de opinión"], correcta:1 },
      { id:"FE9_23", texto:"¿Qué es el fact-checking?", opciones:["Solo revisar ortografía","Verificación sistemática de la veracidad de afirmaciones públicas o noticias","Tipo de edición periodística","Solo para redes sociales"], correcta:1 },
      { id:"FE9_24", texto:"¿Qué es la fotografía periodística?", opciones:["Solo fotos bonitas","Uso de la fotografía para documentar y comunicar hechos noticiosos de forma objetiva e impactante","Tipo de arte visual","Solo para prensa impresa"], correcta:1 },
      { id:"FE9_25", texto:"¿Qué es el discurso público?", opciones:["Solo un discurso político","Comunicación oral dirigida a una audiencia con el objetivo de informar, persuadir o motivar","Tipo de debate","Solo para presidentes"], correcta:1 },
      { id:"FE9_26", texto:"¿Qué es el color correction en producción audiovisual?", opciones:["Cambiar los colores por gusto","Ajuste técnico de colores y tonos en video para garantizar consistencia visual y calidad profesional","Solo para películas","Tipo de filtro de redes sociales"], correcta:1 },
      { id:"FE9_27", texto:"¿Qué es la comunicación intercultural?", opciones:["Hablar otro idioma","Proceso de comunicación entre personas de diferentes culturas reconociendo y adaptándose a las diferencias","Solo para traductores","Tipo de diplomacia"], correcta:1 },
      { id:"FE9_28", texto:"¿Qué es el branding personal?", opciones:["Tener muchos seguidores","Proceso de construir y gestionar una imagen e identidad profesional propia de forma estratégica","Solo para famosos","Tipo de marketing pagado"], correcta:1 },
      { id:"FE9_29", texto:"¿Por qué es importante la alfabetización mediática hoy en día?", opciones:["No es importante en la era digital","Permite a los ciudadanos analizar, evaluar y crear medios de forma crítica y responsable","Solo para periodistas","Es suficiente con usar internet"], correcta:1 },
      { id:"FE9_30", texto:"¿Qué habilidad es más importante para un profesional de la comunicación?", opciones:["Solo escribir bien","Escucha activa, creatividad, pensamiento crítico, empatía y adaptación a nuevas plataformas","Solo hablar en público","Conocer todos los programas de edición"], correcta:1 },
    ]
  },
  // Área 10 — Ciencias Naturales
  10: {
    titulo: "Evaluación de Aptitud: Ciencias Naturales",
    preguntas: [
      { id:"FE10_01", texto:"¿Qué es el método científico?", opciones:["Solo experimentos en laboratorio","Proceso sistemático de observación, hipótesis, experimentación, análisis y conclusión para generar conocimiento","Solo para físicos","Lista de pasos para estudiar"], correcta:1 },
      { id:"FE10_02", texto:"¿Qué es la biodiversidad?", opciones:["Cantidad de plantas en un lugar","Variedad de formas de vida (genes, especies, ecosistemas) en un área o el planeta","Solo animales exóticos","Número de especies conocidas"], correcta:1 },
      { id:"FE10_03", texto:"¿Qué estudia la biología molecular?", opciones:["Los animales en su hábitat","Estructura y función de moléculas biológicas (ADN, ARN, proteínas) y sus interacciones celulares","Química de laboratorio","Solo medicina genética"], correcta:1 },
      { id:"FE10_04", texto:"¿Qué es la tabla periódica?", opciones:["Una lista de recetas químicas","Organización sistemática de los elementos químicos por número atómico y propiedades","Solo para químicos profesionales","Lista de sustancias peligrosas"], correcta:1 },
      { id:"FE10_05", texto:"¿Qué es la fotosíntesis?", opciones:["Proceso de respiración animal","Proceso por el que las plantas convierten luz solar, CO₂ y agua en glucosa y oxígeno","Tipo de reproducción vegetal","Forma en que los hongos crecen"], correcta:1 },
      { id:"FE10_06", texto:"¿Qué es la genética?", opciones:["Solo clonación","Ciencia que estudia la herencia y la variación de los rasgos biológicos entre generaciones","Solo ADN","Tipo de biotecnología"], correcta:1 },
      { id:"FE10_07", texto:"¿Qué es un ecosistema?", opciones:["Solo un parque natural","Sistema formado por seres vivos (biocenosis) y su entorno físico (biotopo) en interacción","Solo el mar o los bosques","Tipo de clima"], correcta:1 },
      { id:"FE10_08", texto:"¿Qué es la termodinámica?", opciones:["Estudio del calor en la cocina","Rama de la física que estudia las relaciones entre calor, trabajo y energía en sistemas","Solo para ingenieros","Tipo de electrónica"], correcta:1 },
      { id:"FE10_09", texto:"¿Qué es la química orgánica?", opciones:["Química natural sin laboratorio","Rama de la química que estudia compuestos basados en carbono y sus reacciones","Solo para farmacéuticos","Química de alimentos únicamente"], correcta:1 },
      { id:"FE10_10", texto:"¿Qué es el cambio climático?", opciones:["Solo el calentamiento del sol","Alteración duradera de las condiciones climáticas de la Tierra, impulsada principalmente por actividades humanas","Solo en los polos","Tipo de fenómeno natural temporal"], correcta:1 },
      { id:"FE10_11", texto:"¿Qué es la microbiología?", opciones:["Estudio de cosas pequeñas","Ciencia que estudia microorganismos (bacterias, virus, hongos, protozoos) y sus efectos","Solo para hospitales","Tipo de biología marina"], correcta:1 },
      { id:"FE10_12", texto:"¿Qué es el pH?", opciones:["Tipo de vitamina","Medida de la acidez o basicidad de una solución (escala del 0 al 14)","Solo en laboratorio clínico","Medida de temperatura"], correcta:1 },
      { id:"FE10_13", texto:"¿Qué es la selección natural?", opciones:["Elegir animales para zoológico","Mecanismo evolutivo donde los organismos con mejores adaptaciones al ambiente tienen más éxito reproductivo","Solo teoría de Darwin","Tipo de cría animal"], correcta:1 },
      { id:"FE10_14", texto:"¿Qué es la astronomía?", opciones:["Ver estrellas como hobby","Ciencia que estudia los cuerpos celestes, el universo y los fenómenos que ocurren fuera de la Tierra","Solo para NASA","Tipo de astrología científica"], correcta:1 },
      { id:"FE10_15", texto:"¿Qué es la biotecnología?", opciones:["Solo transgénicos","Aplicación de principios biológicos y tecnológicos para desarrollar productos y soluciones útiles para la sociedad","Solo ingeniería genética","Tecnología de laboratorio"], correcta:1 },
      { id:"FE10_16", texto:"¿Qué es la mecánica cuántica?", opciones:["Mecánica de máquinas","Teoría física que describe el comportamiento de partículas a escala subatómica con reglas probabilísticas","Solo para físicos teóricos","Tipo de mecánica clásica"], correcta:1 },
      { id:"FE10_17", texto:"¿Qué son los organismos GMO?", opciones:["Organismos Muy Organizados","Organismos Genéticamente Modificados: cuyo material genético fue alterado mediante biotecnología","Solo plantas transgénicas","Tipo de especie invasora"], correcta:1 },
      { id:"FE10_18", texto:"¿Qué es la oceanografía?", opciones:["Turismo marino","Ciencia multidisciplinaria que estudia los océanos: física, química, biología y geología marina","Solo para biólogos marinos","Tipo de geografía"], correcta:1 },
      { id:"FE10_19", texto:"¿Qué es la bioquímica?", opciones:["Química para biólogos","Ciencia que estudia los procesos y sustancias químicas que ocurren en los seres vivos","Solo para médicos","Tipo de química industrial"], correcta:1 },
      { id:"FE10_20", texto:"¿Qué es la paleontología?", opciones:["Estudio de piedras","Ciencia que estudia los organismos extintos a través de fósiles y registros geológicos","Solo dinosaurios","Tipo de arqueología"], correcta:1 },
      { id:"FE10_21", texto:"¿Qué es una reacción de oxidación-reducción (redox)?", opciones:["Solo rusting del metal","Reacción química donde hay transferencia de electrones entre sustancias","Solo en laboratorio industrial","Tipo de reacción ácido-base"], correcta:1 },
      { id:"FE10_22", texto:"¿Qué es la ecología?", opciones:["Cuidar el medio ambiente","Ciencia que estudia las relaciones entre seres vivos y su entorno físico y biótico","Solo para ambientalistas","Tipo de biología aplicada"], correcta:1 },
      { id:"FE10_23", texto:"¿Qué es la neurociencia?", opciones:["Psicología del cerebro","Campo científico que estudia el sistema nervioso, su estructura, función y relación con el comportamiento","Solo para médicos neurólogos","Tipo de biología avanzada"], correcta:1 },
      { id:"FE10_24", texto:"¿Qué es la nanotecnología?", opciones:["Tecnología muy pequeña","Ciencia y aplicación de materiales y dispositivos en escala nanométrica (1-100 nanómetros)","Solo para ingeniería","Tipo de física experimental"], correcta:1 },
      { id:"FE10_25", texto:"¿Qué es la cadena alimenticia?", opciones:["El menú de un restaurante","Secuencia lineal de quién come a quién en un ecosistema: productores, consumidores, descomponedores","Solo en la naturaleza tropical","Tipo de clasificación biológica"], correcta:1 },
      { id:"FE10_26", texto:"¿Qué es la física de partículas?", opciones:["Física de materiales pequeños","Rama que estudia las partículas subatómicas fundamentales y sus interacciones y fuerzas","Solo para CERN","Tipo de física aplicada"], correcta:1 },
      { id:"FE10_27", texto:"¿Qué es la taxonomía biológica?", opciones:["Colección de animales","Ciencia de clasificar y nombrar los organismos vivos según sus características y relaciones evolutivas","Solo para biólogos clásicos","Tipo de catálogo científico"], correcta:1 },
      { id:"FE10_28", texto:"¿Qué es la química analítica?", opciones:["Analizar fórmulas químicas","Rama de la química que desarrolla métodos para determinar la composición de materiales y sustancias","Solo para laboratorios clínicos","Tipo de química teórica"], correcta:1 },
      { id:"FE10_29", texto:"¿Por qué es importante el pensamiento estadístico en ciencias naturales?", opciones:["No es importante","Permite analizar datos experimentales, encontrar patrones y sacar conclusiones válidas y reproducibles","Solo para matemáticos","Solo en ciencias sociales"], correcta:1 },
      { id:"FE10_30", texto:"¿Qué actitud es más importante para ser un científico exitoso?", opciones:["Saber de memoria todos los libros","Curiosidad, rigor, pensamiento crítico, honestidad intelectual y apertura a cuestionar lo que se sabe","Solo trabajar mucho","Tener el mejor equipamiento"], correcta:1 },
    ]
  },
};

// (Generadores declarados arriba del archivo)

// ============================================================
// CUESTIONARIOS FINALES — TRABAJO (tipo entrevista)
// 30 preguntas por área
// ============================================================
const CUESTIONARIOS_FINALES_TRABAJO = {
  1: {
    titulo: "Entrevista Laboral: Tecnología e Informática",
    preguntas: [
      { id:"FT1_01", texto:"Cuéntanos: ¿qué te motivó a buscar trabajo en el área de tecnología?", tipo:"texto_libre", minPalabras: 10 },
      { id:"FT1_02", texto:"¿Qué herramientas tecnológicas dominas actualmente?", tipo:"texto_libre", minPalabras: 5 },
      { id:"FT1_03", texto:"Si un sistema de la empresa deja de funcionar de repente, ¿cuál sería tu primer paso?", tipo:"opcion_multiple", opciones:["Esperar a que se solucione solo","Reportarlo inmediatamente al equipo técnico y documentar el error","Ignorarlo y seguir trabajando","Cerrar todo y reiniciar"], correcta:1 },
      { id:"FT1_04", texto:"¿Cómo manejas la presión de resolver un problema técnico urgente con un plazo corto?", tipo:"opcion_multiple", opciones:["Me bloqueo y pido que lo haga otro","Priorizo, busco soluciones sistemáticamente y pido ayuda si es necesario","Solo trabajo hasta tarde sin planificar","Aviso que no puedo cumplir"], correcta:1 },
      { id:"FT1_05", texto:"Describe una situación donde tuviste que aprender algo nuevo de tecnología rápidamente.", tipo:"texto_libre", minPalabras: 10 },
      { id:"FT1_06", texto:"¿Qué harías si descubres un error de seguridad grave en el sistema de la empresa?", tipo:"opcion_multiple", opciones:["No decirle a nadie para no causar pánico","Reportarlo de inmediato al responsable y documentar el hallazgo","Arreglarlo solo sin decir nada","Publicarlo en redes sociales"], correcta:1 },
      { id:"FT1_07", texto:"¿Cómo organizas tu tiempo cuando tienes múltiples tareas técnicas pendientes?", tipo:"opcion_multiple", opciones:["Empiezo por lo más fácil","Priorizo por urgencia e impacto, usando listas o herramientas de gestión","Hago todo a la vez","Espero que alguien me indique"], correcta:1 },
      { id:"FT1_08", texto:"¿Qué significa para ti trabajar en equipo en un ambiente tecnológico?", tipo:"texto_libre", minPalabras: 10 },
      { id:"FT1_09", texto:"Si tuvieras que explicar un proceso técnico complejo a alguien sin conocimiento, ¿cómo lo harías?", tipo:"opcion_multiple", opciones:["Con términos técnicos avanzados","Con analogías simples, ejemplos visuales y verificando que entienda","Solo enviándole documentación","Delegando esa tarea a otro"], correcta:1 },
      { id:"FT1_10", texto:"¿Qué tan cómodo/a te sientes aprendiendo por tu cuenta con recursos en línea?", tipo:"opcion_multiple", opciones:["No me gusta, necesito profesor presencial","Muy cómodo/a, es mi método preferido","Solo si me obligan","No lo he intentado"], correcta:1 },
      { id:"FT1_11", texto:"¿Qué es lo más importante para ti en tu primer empleo en tecnología?", tipo:"texto_libre", minPalabras: 8 },
      { id:"FT1_12", texto:"¿Cómo reaccionas cuando un colega te critica tu código o trabajo técnico?", tipo:"opcion_multiple", opciones:["Me ofendo y no acepto la crítica","Escucho, analizo si tiene razón y mejoro si corresponde","Defiendo mi trabajo sin escuchar","Ignoro los comentarios"], correcta:1 },
      { id:"FT1_13", texto:"¿Tienes experiencia trabajando con sistemas operativos Linux o ambientes de desarrollo?", tipo:"opcion_multiple", opciones:["No tengo experiencia y no me interesa","No tengo experiencia pero estoy dispuesto/a a aprender","Tengo experiencia básica","Tengo experiencia sólida"], correcta:3 },
      { id:"FT1_14", texto:"Describe tu mayor logro personal en tecnología hasta ahora.", tipo:"texto_libre", minPalabras: 8 },
      { id:"FT1_15", texto:"¿Qué harías si no entiendes una tarea técnica que te asignaron?", tipo:"opcion_multiple", opciones:["Adivino y espero lo mejor","Pregunto al supervisor o busco documentación antes de comenzar","No hago nada y espero","Digo que sí entendí aunque no sea cierto"], correcta:1 },
      { id:"FT1_16", texto:"¿Cómo te actualizas en tecnología constantemente?", tipo:"texto_libre", minPalabras: 5 },
      { id:"FT1_17", texto:"¿Qué harías si detectas que un proceso de la empresa puede mejorarse con tecnología?", tipo:"opcion_multiple", opciones:["No digo nada para no meterme","Propongo la mejora a mi jefe con datos y una propuesta concreta","Lo cambio directamente sin avisar","Lo comento con compañeros pero no con jefes"], correcta:1 },
      { id:"FT1_18", texto:"¿Cuál es tu disponibilidad horaria para trabajar?", tipo:"opcion_multiple", opciones:["Solo medio tiempo","Tiempo completo con disponibilidad de horario flexible","Solo en horario fijo de oficina","No tengo disponibilidad completa"], correcta:1 },
      { id:"FT1_19", texto:"¿Qué esperarías de tu equipo de trabajo directo?", tipo:"texto_libre", minPalabras: 8 },
      { id:"FT1_20", texto:"¿Qué tipo de tecnologías o áreas te gustaría especializarte a futuro?", tipo:"texto_libre", minPalabras: 5 },
      { id:"FT1_21", texto:"¿Cómo manejarías un cliente molesto que reporta que el sistema no funciona?", tipo:"opcion_multiple", opciones:["Me pongo a la defensiva","Escucho, me disculpo, investigo el problema y comunico el tiempo de solución","Transfiero la llamada a otro","Digo que el problema no existe"], correcta:1 },
      { id:"FT1_22", texto:"¿Qué tan importante es documentar el trabajo técnico que realizas?", tipo:"opcion_multiple", opciones:["No es importante, basta con hacerlo","Muy importante para que otros puedan entender y mantener el trabajo","Solo si me lo piden","Solo en proyectos grandes"], correcta:1 },
      { id:"FT1_23", texto:"¿Hablas o entiendes inglés técnico básico?", tipo:"opcion_multiple", opciones:["No y no me interesa aprender","No pero estoy dispuesto/a a aprender","Entiendo documentación técnica básica","Tengo nivel conversacional o superior"], correcta:2 },
      { id:"FT1_24", texto:"¿Qué haría si cometes un error que afecta al sistema y al cliente?", tipo:"opcion_multiple", opciones:["Culpo a otro","Reconozco el error, lo reporto, busco la solución y aprendo de ello","Intento ocultarlo","Renuncio"], correcta:1 },
      { id:"FT1_25", texto:"¿Cuál es tu expectativa salarial inicial para este puesto?", tipo:"texto_libre", minPalabras: 3 },
      { id:"FT1_26", texto:"¿Cuántas horas a la semana estarías dispuesto/a a dedicar a formación propia?", tipo:"opcion_multiple", opciones:["Ninguna, con el trabajo es suficiente","1-2 horas a la semana","3-5 horas a la semana","Más de 5 horas, me apasiona aprender"], correcta:3 },
      { id:"FT1_27", texto:"¿Tienes portafolio, proyectos personales o GitHub con trabajo propio?", tipo:"opcion_multiple", opciones:["No tengo nada y no planeo tenerlo","No tengo pero estoy creando mis primeros proyectos","Tengo proyectos escolares","Tengo portafolio con proyectos personales documentados"], correcta:3 },
      { id:"FT1_28", texto:"¿Qué valor te diferencia de otros candidatos para este puesto?", tipo:"texto_libre", minPalabras: 10 },
      { id:"FT1_29", texto:"¿Estás dispuesto/a a empezar como junior y crecer con el tiempo?", tipo:"opcion_multiple", opciones:["No, quiero un puesto senior desde el inicio","Sí, entiendo que el crecimiento se gana con tiempo y resultados","Solo si el salario es alto desde el inicio","Depende"], correcta:1 },
      { id:"FT1_30", texto:"¿Qué te gustaría aprender en los primeros 3 meses en este trabajo?", tipo:"texto_libre", minPalabras: 8 },
    ]
  },
  // Área 2 — Salud y Asistencia
  2: {
    titulo: "Entrevista Laboral: Salud y Asistencia",
    preguntas: [
      { id:"FT2_01", texto:"¿Qué te motivó a querer trabajar en el área de salud o asistencia?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT2_02", texto:"¿Cómo manejarías a un paciente o usuario que se niega a recibir la atención?", tipo:"opcion_multiple", opciones:["Lo obligo a recibir la atención","Escucho sus razones, explico los beneficios con empatía y respeto su decisión si es un adulto capaz","Lo ignoro y paso al siguiente","Llamo a seguridad inmediatamente"], correcta:1 },
      { id:"FT2_03", texto:"Describe una situación donde demostraste empatía con alguien que necesitaba ayuda.", tipo:"texto_libre", minPalabras:10 },
      { id:"FT2_04", texto:"¿Qué harías si cometes un error durante la atención a un paciente?", tipo:"opcion_multiple", opciones:["Lo ocultaría para no tener problemas","Lo reportaría de inmediato al supervisor, evaluaría el daño y aplicaría el protocolo de corrección","Esperaría a ver si algo pasa","Lo negaría si alguien me pregunta"], correcta:1 },
      { id:"FT2_05", texto:"¿Cómo cuidas tu salud mental trabajando en entornos de alta exigencia emocional?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT2_06", texto:"¿Qué importancia tiene la higiene de manos en la atención en salud?", tipo:"opcion_multiple", opciones:["Es exagerado lavarlas tan seguido","Es fundamental para prevenir infecciones intrahospitalarias y proteger al paciente y al profesional","Solo cuando hay heridas abiertas","Solo cuando el paciente parece enfermo"], correcta:1 },
      { id:"FT2_07", texto:"¿Qué harías si un colega actúa de forma irresponsable con un paciente?", tipo:"opcion_multiple", opciones:["Me quedo callado para no crear conflictos","Reporto la situación al superior correspondiente, priorizando el bienestar del paciente","Solo lo observo para tener pruebas","Lo enfrento públicamente"], correcta:1 },
      { id:"FT2_08", texto:"¿Cómo explicarías un diagnóstico o procedimiento a un paciente con bajo nivel educativo?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT2_09", texto:"¿Qué es el consentimiento informado?", tipo:"opcion_multiple", opciones:["Una firma obligatoria sin importar si entiende","Proceso donde el paciente recibe información completa y comprensible para decidir libremente sobre su atención","Solo para cirugías mayores","Formulario legal para proteger al médico"], correcta:1 },
      { id:"FT2_10", texto:"¿Qué tan importante es el trabajo en equipo en entornos de salud?", tipo:"opcion_multiple", opciones:["Cada profesional trabaja solo","Es esencial: la atención integral requiere coordinación entre múltiples disciplinas para el bienestar del paciente","Solo en urgencias","Es secundario, lo importante es la técnica individual"], correcta:1 },
      { id:"FT2_11", texto:"Describe qué conocimientos básicos de primeros auxilios tienes.", tipo:"texto_libre", minPalabras:5 },
      { id:"FT2_12", texto:"¿Cómo priorizarías si hay varios pacientes con necesidades urgentes al mismo tiempo?", tipo:"opcion_multiple", opciones:["Atiendo al primero que llegó","Aplico el sistema de triage: evalúo nivel de urgencia y ateniendo primero al de mayor riesgo vital","El que más grita primero","Llamo a alguien para que decida"], correcta:1 },
      { id:"FT2_13", texto:"¿Qué actitud debes tener frente a pacientes de diferentes culturas o religiones?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT2_14", texto:"¿Qué es la confidencialidad del paciente y por qué es importante?", tipo:"opcion_multiple", opciones:["Solo no contar chismes","Obligación ética y legal de proteger la información médica del paciente y no divulgarla sin su autorización","Solo aplica para VIH o adicciones","Regla administrativa del hospital"], correcta:1 },
      { id:"FT2_15", texto:"¿Qué herramientas o técnicas conoces para registrar información clínica del paciente?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT2_16", texto:"¿Cómo reaccionarías ante una emergencia médica inesperada en tu turno?", tipo:"opcion_multiple", opciones:["Entro en pánico y pido que vengan otros","Activo el protocolo de emergencia, llamo ayuda especializada y actúo con los recursos disponibles","Solo espero a que llegue el médico","Salgo a buscar ayuda y dejo al paciente solo"], correcta:1 },
      { id:"FT2_17", texto:"¿Por qué es importante continuar aprendiendo y actualizarse en el área de salud?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT2_18", texto:"¿Tienes disponibilidad de trabajar en turnos rotativos, incluyendo noches y fines de semana?", tipo:"opcion_multiple", opciones:["No, solo trabajo de día y de lunes a viernes","Sí, entiendo que la atención en salud es continua y estoy dispuesto/a","Solo si me pagan extra","Prefiero solo fines de semana"], correcta:1 },
      { id:"FT2_19", texto:"¿Qué significa para ti la dignidad del paciente?", tipo:"texto_libre", minPalabras:10 },
      { id:"FT2_20", texto:"¿Cómo manejarías el duelo de un paciente o familiar ante una noticia difícil?", tipo:"texto_libre", minPalabras:10 },
      { id:"FT2_21", texto:"¿Qué harías si detectas síntomas de burnout o agotamiento profesional en ti mismo?", tipo:"opcion_multiple", opciones:["Seguiría trabajando sin hacer nada","Reconocería la situación, buscaría apoyo profesional y hablaría con mi supervisor para ajustar la carga","Solo tomaría vacaciones","Lo ocultaría para no parecer débil"], correcta:1 },
      { id:"FT2_22", texto:"¿Qué importancia tiene la documentación clínica correcta?", tipo:"opcion_multiple", opciones:["Es solo burocracia innecesaria","Garantiza continuidad del cuidado, respaldo legal y comunicación efectiva entre el equipo de salud","Solo para auditorías","Es responsabilidad solo del médico"], correcta:1 },
      { id:"FT2_23", texto:"¿Qué harías si observas malas condiciones de bioseguridad en tu lugar de trabajo?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT2_24", texto:"¿Tienes conocimiento sobre alguna certificación en primeros auxilios o soporte vital básico?", tipo:"opcion_multiple", opciones:["No y no me interesa","No tengo pero estoy dispuesto/a a certificarme","He tomado un curso básico","Tengo certificación vigente en primeros auxilios o SVB"], correcta:3 },
      { id:"FT2_25", texto:"¿Cuál es tu expectativa de crecimiento profesional en el área de salud?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT2_26", texto:"¿Cómo te actualizas en protocolos y guías de práctica clínica?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT2_27", texto:"¿Qué tan importante consideras la comunicación con la familia del paciente?", tipo:"opcion_multiple", opciones:["No es mi responsabilidad","Es parte esencial del cuidado: la familia es aliada y necesita información clara y acompañamiento","Solo cuando hay urgencia","Solo si el paciente lo pide"], correcta:1 },
      { id:"FT2_28", texto:"¿Qué valor te diferencia de otros candidatos para trabajar en salud o asistencia?", tipo:"texto_libre", minPalabras:10 },
      { id:"FT2_29", texto:"¿Estás dispuesto/a a empezar en un nivel de auxiliar y crecer con la experiencia?", tipo:"opcion_multiple", opciones:["No, quiero un puesto de mayor responsabilidad desde el inicio","Sí, entiendo que en salud el crecimiento se basa en experiencia, confianza y resultados","Solo si el salario compensa","Depende del tipo de contrato"], correcta:1 },
      { id:"FT2_30", texto:"¿Qué te gustaría aprender o mejorar en los primeros 6 meses de este trabajo?", tipo:"texto_libre", minPalabras:8 },
    ]
  },
  // Área 3 — Arte y Diseño
  3: {
    titulo: "Entrevista Laboral: Arte y Diseño",
    preguntas: [
      { id:"FT3_01", texto:"¿Qué te motivó a querer trabajar en arte, diseño o creatividad?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT3_02", texto:"¿Tienes portafolio de trabajos propios? Descríbelo brevemente.", tipo:"texto_libre", minPalabras:5 },
      { id:"FT3_03", texto:"¿Cómo reaccionas cuando un cliente rechaza o pide muchos cambios a tu trabajo creativo?", tipo:"opcion_multiple", opciones:["Me ofendo, es mi trabajo artístico","Escucho el feedback, entiendo el objetivo del cliente y propongo ajustes basados en sus necesidades","Hago los cambios sin ningún criterio","Me niego a cambiar lo que ya diseñé"], correcta:1 },
      { id:"FT3_04", texto:"¿Qué programas o herramientas de diseño manejas actualmente?", tipo:"texto_libre", minPalabras:3 },
      { id:"FT3_05", texto:"¿Cómo manejas los plazos de entrega en proyectos creativos con tiempo limitado?", tipo:"opcion_multiple", opciones:["Entrego cuando el trabajo esté perfecto, sin importar el tiempo","Planifico las etapas, comunico al cliente el avance y priorizo calidad dentro del tiempo acordado","Pido extensiones siempre","Entrego algo incompleto antes que tarde"], correcta:1 },
      { id:"FT3_06", texto:"¿Qué es para ti el diseño centrado en el usuario?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT3_07", texto:"¿Cómo manejas el proceso creativo cuando tienes un bloqueo mental?", tipo:"opcion_multiple", opciones:["Espero que pase solo","Busco referencias, cambio de ambiente, reviso trabajos ajenos y retomo con una perspectiva nueva","Me frustro y dejo el proyecto","Copio ideas de otros directamente"], correcta:1 },
      { id:"FT3_08", texto:"¿Has trabajado con clientes o briefs? Describe cómo abordas un brief creativo.", tipo:"texto_libre", minPalabras:8 },
      { id:"FT3_09", texto:"¿Qué es la propiedad intelectual en el trabajo creativo?", tipo:"opcion_multiple", opciones:["Los derechos solo del cliente","Derechos legales que protegen las creaciones originales del autor (diseños, ilustraciones, fotografías)","Solo aplica para música","El precio del trabajo creativo"], correcta:1 },
      { id:"FT3_10", texto:"¿Qué tan cómodo/a te sientes recibiendo feedback de clientes o superiores?", tipo:"opcion_multiple", opciones:["No me gusta que critiquen mi trabajo","Muy cómodo/a, el feedback es esencial para mejorar y entregar lo que el cliente realmente necesita","Solo feedback positivo","Solo de personas que entiendan de diseño"], correcta:1 },
      { id:"FT3_11", texto:"¿Qué importancia tiene la tipografía en el diseño gráfico?", tipo:"opcion_multiple", opciones:["Es solo decoración del texto","Es fundamental: influye en la jerarquía visual, la lectura y la identidad del diseño","Solo el estilo de la letra importa","Solo para diseño editorial"], correcta:1 },
      { id:"FT3_12", texto:"Describe un proyecto creativo del que te sientas orgulloso/a y por qué.", tipo:"texto_libre", minPalabras:10 },
      { id:"FT3_13", texto:"¿Cómo defines el estilo de un proyecto cuando el cliente no tiene claro lo que quiere?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT3_14", texto:"¿Qué es la accesibilidad en diseño digital?", tipo:"opcion_multiple", opciones:["Solo diseño para discapacitados","Práctica de diseñar productos utilizables por el mayor número de personas posible, incluyendo personas con discapacidades","Solo contraste de colores","Tipo de normativa legal"], correcta:1 },
      { id:"FT3_15", texto:"¿Cuál es tu proceso para entender la identidad visual de una marca?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT3_16", texto:"¿Trabajarías bien en un equipo multidisciplinario con marketing, programadores y directivos?", tipo:"opcion_multiple", opciones:["Prefiero trabajar solo","Sí, el trabajo creativo de calidad requiere entender las necesidades de todas las áreas involucradas","Solo con otros diseñadores","Si puedo liderar el equipo"], correcta:1 },
      { id:"FT3_17", texto:"¿Qué técnicas usas para presentar y defender una propuesta creativa?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT3_18", texto:"¿Estás dispuesto/a a aprender nuevas herramientas digitales que no dominas actualmente?", tipo:"opcion_multiple", opciones:["No, ya sé suficiente","Sí, el campo del diseño evoluciona constantemente y aprender nuevas herramientas es parte del trabajo","Solo si la empresa paga el curso","Solo herramientas gratuitas"], correcta:1 },
      { id:"FT3_19", texto:"¿Qué sabes de diseño UX/UI o experiencia de usuario?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT3_20", texto:"¿Cómo equilibras tu visión artística personal con los requerimientos del cliente o la empresa?", tipo:"texto_libre", minPalabras:10 },
      { id:"FT3_21", texto:"¿Qué herramientas usarías para presentar un prototipo a un cliente?", tipo:"opcion_multiple", opciones:["Solo un boceto a mano","Figma, Adobe XD, presentaciones interactivas o prototipos de alta fidelidad según el alcance del proyecto","Solo PDF con imágenes","El producto final terminado"], correcta:1 },
      { id:"FT3_22", texto:"¿Qué es el branding y cuál es el papel del diseñador en él?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT3_23", texto:"¿Tienes experiencia en impresión o materiales físicos (offset, serigrafía, etc.)?", tipo:"opcion_multiple", opciones:["No tengo experiencia y no me interesa","No tengo experiencia práctica pero conozco la teoría y quiero aprender","Tengo conocimiento básico de especificaciones de impresión","Tengo experiencia directa con proveedores de impresión"], correcta:2 },
      { id:"FT3_24", texto:"¿Cómo manejas múltiples proyectos de diseño al mismo tiempo?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT3_25", texto:"¿Cuál es tu expectativa salarial inicial para este puesto creativo?", tipo:"texto_libre", minPalabras:3 },
      { id:"FT3_26", texto:"¿Cómo te mantienes actualizado/a en tendencias de diseño?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT3_27", texto:"¿Qué harías si el cliente insiste en un diseño que crees que es visualmente incorrecto o dañino para su marca?", tipo:"opcion_multiple", opciones:["Hago lo que pide sin opinar","Argumento con datos y ejemplos por qué esa decisión puede perjudicar sus objetivos, luego respeto su decisión final","Me niego a hacer ese diseño","Lo hago pero firmo diferente"], correcta:1 },
      { id:"FT3_28", texto:"¿Qué valor te diferencia de otros candidatos para este puesto?", tipo:"texto_libre", minPalabras:10 },
      { id:"FT3_29", texto:"¿Estás dispuesto/a a comenzar con proyectos pequeños y crecer dentro del equipo creativo?", tipo:"opcion_multiple", opciones:["No, quiero liderar proyectos grandes desde el inicio","Sí, entiendo que la confianza y la responsabilidad se construyen con resultados y tiempo","Solo si el salario es alto desde el inicio","Depende de las condiciones"], correcta:1 },
      { id:"FT3_30", texto:"¿Qué te gustaría aprender o crear en los primeros 3 meses de este trabajo?", tipo:"texto_libre", minPalabras:8 },
    ]
  },
  // Área 4 — Negocios y Ventas
  4: {
    titulo: "Entrevista Laboral: Negocios y Ventas",
    preguntas: [
      { id:"FT4_01", texto:"¿Qué te motivó a querer trabajar en negocios, ventas o administración?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT4_02", texto:"¿Tienes experiencia en ventas, atención al cliente o administración? Descríbela.", tipo:"texto_libre", minPalabras:5 },
      { id:"FT4_03", texto:"¿Cómo manejarías a un cliente que rechaza tu propuesta de venta?", tipo:"opcion_multiple", opciones:["Lo insisto hasta que compre","Escucho sus objeciones, entiendo sus necesidades y ofrezco alternativas que agreguen valor real","Lo descarto como cliente","Le bajo el precio inmediatamente"], correcta:1 },
      { id:"FT4_04", texto:"¿Qué estrategia usarías para fidelizar a un cliente ya existente?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT4_05", texto:"¿Cómo organiza tu jornada de trabajo cuando tienes múltiples tareas comerciales?", tipo:"opcion_multiple", opciones:["Hago lo que se me vaya ocurriendo","Priorizo por impacto en resultados, uso agenda o CRM, y establezco metas diarias medibles","Solo atiendo urgencias","Espero instrucciones del jefe"], correcta:1 },
      { id:"FT4_06", texto:"¿Qué es el valor percibido por el cliente y cómo lo usarías en ventas?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT4_07", texto:"¿Cómo reaccionas cuando no cumples tu meta de ventas en un período?", tipo:"opcion_multiple", opciones:["Me rindo y espero el próximo mes","Analizo qué salió mal, ajusto mi estrategia, pido retroalimentación y me comprometo con mejores resultados","Culpo al producto o al mercado","Solo aumento la cantidad de llamadas sin cambiar el enfoque"], correcta:1 },
      { id:"FT4_08", texto:"Describe una negociación exitosa que hayas tenido, aunque sea en tu vida personal.", tipo:"texto_libre", minPalabras:10 },
      { id:"FT4_09", texto:"¿Qué es la propuesta de valor de un producto o servicio?", tipo:"opcion_multiple", opciones:["El precio más bajo","La razón convincente por la que un cliente debería elegir tu producto sobre el de la competencia","El catálogo de productos","La promesa de descuento"], correcta:1 },
      { id:"FT4_10", texto:"¿Qué tan cómodo/a te sientes trabajando con indicadores de desempeño y métricas?", tipo:"opcion_multiple", opciones:["No me gustan los números","Muy cómodo/a, los indicadores son esenciales para tomar decisiones basadas en datos","Solo los básicos de ventas","Si alguien más los analiza"], correcta:1 },
      { id:"FT4_11", texto:"¿Qué harías si detectas que un proceso administrativo interno es ineficiente?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT4_12", texto:"¿Cuál es tu enfoque para cerrar una venta sin presionar al cliente?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT4_13", texto:"¿Qué importancia tiene el servicio postventa para una empresa?", tipo:"opcion_multiple", opciones:["No es importante, la venta ya ocurrió","Es fundamental: fideliza clientes, genera recompras y construye reputación positiva de la marca","Solo si el cliente se queja","Solo en productos de alto precio"], correcta:1 },
      { id:"FT4_14", texto:"¿Tienes manejo de Excel, Google Sheets u otras herramientas de análisis de datos básico?", tipo:"opcion_multiple", opciones:["No manejo ninguna","Manejo herramientas básicas y estoy dispuesto/a a mejorar","Tengo buen nivel en hojas de cálculo","Tengo nivel avanzado en análisis de datos"], correcta:2 },
      { id:"FT4_15", texto:"¿Cómo construirías una relación de confianza con un cliente nuevo?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT4_16", texto:"¿Qué harías si un cliente pide algo que está fuera de las políticas de la empresa?", tipo:"opcion_multiple", opciones:["Se lo ofrezco igual para no perder la venta","Explico las políticas claramente, busco alternativas dentro de las mismas y escalo si es necesario","Digo que no es posible y finalizo la conversación","Le pido que lo pida por otro canal"], correcta:1 },
      { id:"FT4_17", texto:"¿Qué sabes sobre CRM (Customer Relationship Management)?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT4_18", texto:"¿Cómo presentarías los resultados de tu área a un directivo en poco tiempo?", tipo:"opcion_multiple", opciones:["Con muchos datos y tablas sin filtrar","Con un resumen ejecutivo que destaque los indicadores clave, logros y oportunidades de mejora","Solo verbalmente sin datos","Con una presentación de muchas diapositivas"], correcta:1 },
      { id:"FT4_19", texto:"¿Qué significa la orientación al cliente para ti?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT4_20", texto:"¿Cómo manejarías una queja formal de un cliente importante?", tipo:"texto_libre", minPalabras:10 },
      { id:"FT4_21", texto:"¿Tienes disponibilidad para trabajar en campo o visitar clientes fuera de la oficina?", tipo:"opcion_multiple", opciones:["No, solo trabajo en oficina","Sí, entiendo que las visitas a clientes son parte fundamental del rol comercial","Solo si me pagan el transporte","Depende del cliente"], correcta:1 },
      { id:"FT4_22", texto:"¿Qué herramienta o método usarías para identificar nuevas oportunidades de negocio?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT4_23", texto:"¿Cómo manejarías el rechazo constante en un rol de ventas?", tipo:"opcion_multiple", opciones:["Me desanimo fácilmente","Entiendo que el rechazo es parte del proceso y cada no me acerca a un sí; me enfoco en aprender de cada interacción","Lo tomo muy personal","Cambio de estrategia radicalmente en cada rechazo"], correcta:1 },
      { id:"FT4_24", texto:"¿Qué sabes sobre el proceso de compras en empresas B2B?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT4_25", texto:"¿Cuál es tu expectativa salarial inicial para este puesto?", tipo:"texto_libre", minPalabras:3 },
      { id:"FT4_26", texto:"¿Cómo construirías tu carnet de clientes en los primeros 3 meses?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT4_27", texto:"¿Qué es para ti un buen indicador de desempeño en ventas?", tipo:"opcion_multiple", opciones:["Solo el total de ventas del mes","Combinación de: tasa de cierre, satisfacción del cliente, retención y calidad de relaciones a largo plazo","Solo la cantidad de llamadas","El número de correos enviados"], correcta:1 },
      { id:"FT4_28", texto:"¿Qué valor te diferencia de otros candidatos para este puesto comercial?", tipo:"texto_libre", minPalabras:10 },
      { id:"FT4_29", texto:"¿Estás dispuesto/a a comenzar como asesor/a junior y crecer hacia roles de mayor responsabilidad?", tipo:"opcion_multiple", opciones:["No, quiero ser gerente desde el inicio","Sí, el crecimiento en negocios requiere construir experiencia, credibilidad y resultados concretos","Solo si hay un plan escrito de ascenso","Depende del salario inicial"], correcta:1 },
      { id:"FT4_30", texto:"¿Qué te gustaría lograr en los primeros 6 meses de este trabajo?", tipo:"texto_libre", minPalabras:8 },
    ]
  },
  // Área 5 — Educación y Social
  5: {
    titulo: "Entrevista Laboral: Educación y Trabajo Social",
    preguntas: [
      { id:"FT5_01", texto:"¿Qué te motivó a querer trabajar en educación o trabajo social?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT5_02", texto:"¿Tienes experiencia trabajando con niños, jóvenes, adultos o comunidades?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT5_03", texto:"¿Cómo manejarías a un estudiante o usuario que constantemente muestra comportamiento disruptivo?", tipo:"opcion_multiple", opciones:["Lo ignoro o lo expulso","Busco la causa del comportamiento, establezco límites con empatía y diseño estrategias inclusivas","Solo lo reporto a superiores","Lo separo del grupo permanentemente"], correcta:1 },
      { id:"FT5_04", texto:"Describe una experiencia donde hayas ayudado a alguien a superar una dificultad.", tipo:"texto_libre", minPalabras:10 },
      { id:"FT5_05", texto:"¿Qué es para ti la educación inclusiva?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT5_06", texto:"¿Cómo adaptarías una clase o taller para personas con diferentes niveles de comprensión?", tipo:"opcion_multiple", opciones:["Explico igual para todos","Diseño actividades diferenciadas, uso múltiples formatos y verifico la comprensión de cada persona","Solo me enfoco en los que más entienden","Separo al grupo por nivel de conocimiento"], correcta:1 },
      { id:"FT5_07", texto:"¿Qué herramientas pedagógicas o metodologías conoces para enseñar o intervenir socialmente?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT5_08", texto:"¿Cómo protegerías la confidencialidad de un caso de trabajo social sensible?", tipo:"opcion_multiple", opciones:["La información puede compartirse con quienes sean cercanos al caso","Solo comparto información con los profesionales directamente involucrados y siguiendo los protocolos de privacidad","Comparto con la familia siempre","La publico en el informe de la institución"], correcta:1 },
      { id:"FT5_09", texto:"¿Qué harías si detectas una situación de abuso o maltrato hacia un menor a tu cargo?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT5_10", texto:"¿Qué es el trabajo interdisciplinario y por qué es importante en lo social/educativo?", tipo:"opcion_multiple", opciones:["Cada profesional trabaja independiente","Colaboración entre múltiples disciplinas para abordar problemáticas complejas de forma integral","Solo en casos extremos","Trabajo en equipo con personas del mismo perfil"], correcta:1 },
      { id:"FT5_11", texto:"¿Cómo manejarías el agotamiento emocional al trabajar con poblaciones vulnerables?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT5_12", texto:"¿Qué es el aprendizaje basado en proyectos y cómo lo aplicarías?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT5_13", texto:"¿Cómo trabajarías con una familia disfuncional para apoyar el desarrollo de un niño?", tipo:"texto_libre", minPalabras:10 },
      { id:"FT5_14", texto:"¿Qué importancia tiene la evaluación en el proceso educativo o de intervención social?", tipo:"opcion_multiple", opciones:["Es solo un trámite burocrático","Permite medir el progreso, ajustar estrategias y garantizar que los objetivos se están logrando","Solo sirve para calificaciones","Es responsabilidad del director"], correcta:1 },
      { id:"FT5_15", texto:"¿Qué tecnologías o plataformas digitales has usado para procesos educativos o sociales?", tipo:"texto_libre", minPalabras:3 },
      { id:"FT5_16", texto:"¿Cómo abordarías la educación sexual con adolescentes de manera responsable?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT5_17", texto:"¿Qué es el enfoque de derechos en el trabajo social?", tipo:"opcion_multiple", opciones:["Ayudar a las personas por caridad","Perspectiva que reconoce a cada persona como sujeto de derechos y no como objeto de asistencia","Solo para abogados","Tipo de protocolo legal"], correcta:1 },
      { id:"FT5_18", texto:"¿Tienes disponibilidad para hacer trabajo de campo en comunidades o visitas domiciliarias?", tipo:"opcion_multiple", opciones:["No, solo trabajo en oficina o aula","Sí, el contacto directo con la comunidad es esencial para el trabajo social y educativo","Solo si hay seguridad garantizada","Depende del área geográfica"], correcta:1 },
      { id:"FT5_19", texto:"¿Qué significa para ti la responsabilidad ética en educación o trabajo social?", tipo:"texto_libre", minPalabras:10 },
      { id:"FT5_20", texto:"¿Cómo motivarías a un grupo desmotivado para participar activamente en un taller o clase?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT5_21", texto:"¿Qué es la resiliencia y cómo la promoverías en las personas que atiendes?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT5_22", texto:"¿Qué harías si un usuario o estudiante te busca con una crisis emocional grave?", tipo:"opcion_multiple", opciones:["Lo escucho y le digo que todo pasará","Brindo contención emocional inmediata, activo el protocolo de crisis y refiero a profesionales especializados","Lo tranquilizo y regreso a mi actividad","Le recomiendo un libro de autoayuda"], correcta:1 },
      { id:"FT5_23", texto:"¿Cómo diseñarías un programa comunitario para jóvenes en riesgo?", tipo:"texto_libre", minPalabras:10 },
      { id:"FT5_24", texto:"¿Qué importancia tiene la participación comunitaria en los proyectos sociales?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT5_25", texto:"¿Cuál es tu expectativa de crecimiento en el área educativa o social?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT5_26", texto:"¿Cómo manejarías situaciones de injusticia que afectan a las personas que atiendes?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT5_27", texto:"¿Qué harías si tus valores personales entran en conflicto con las políticas de tu institución?", tipo:"opcion_multiple", opciones:["Ignoro las políticas y actúo según mi criterio","Expreso mi posición por canales formales, busco diálogo y si no hay acuerdo, evalúo si es el lugar adecuado para mí","No digo nada y sigo trabajando","Renuncio inmediatamente"], correcta:1 },
      { id:"FT5_28", texto:"¿Qué valor te diferencia de otros candidatos para trabajar en educación o trabajo social?", tipo:"texto_libre", minPalabras:10 },
      { id:"FT5_29", texto:"¿Estás dispuesto/a a comenzar en un nivel básico y construir tu experiencia progresivamente?", tipo:"opcion_multiple", opciones:["No, quiero autonomía total desde el inicio","Sí, la experiencia acumulada es lo que forma a un buen educador o trabajador social","Solo si el salario lo justifica","Depende de las condiciones"], correcta:1 },
      { id:"FT5_30", texto:"¿Qué impacto te gustaría haber generado en las personas que atiendes después de un año de trabajo?", tipo:"texto_libre", minPalabras:10 },
    ]
  },
  // Área 6 — Construcción y Mantenimiento
  6: {
    titulo: "Entrevista Laboral: Construcción y Mantenimiento",
    preguntas: [
      { id:"FT6_01", texto:"¿Qué te motivó a querer trabajar en construcción, ingeniería o mantenimiento?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT6_02", texto:"¿Tienes experiencia previa en obras, instalaciones o mantenimiento? Descríbela.", tipo:"texto_libre", minPalabras:5 },
      { id:"FT6_03", texto:"¿Cómo actuarías si detectas una falla de seguridad en una obra o instalación?", tipo:"opcion_multiple", opciones:["Continúo trabajando y lo anoto después","Detengo las actividades en el área afectada, reporto inmediatamente y señalizo el peligro","Solo lo anoto en el informe de turno","Espero a que alguien más lo reporte"], correcta:1 },
      { id:"FT6_04", texto:"¿Qué sabes sobre normas de seguridad industrial y uso de EPP?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT6_05", texto:"¿Cómo organizarías los materiales y herramientas de un proyecto de obra para evitar pérdidas?", tipo:"opcion_multiple", opciones:["Donde quepan","Con inventario registrado, almacenamiento adecuado, control de entradas/salidas y responsables asignados","Solo guardo los más caros","No me preocupo por eso, que lo haga el almacenista"], correcta:1 },
      { id:"FT6_06", texto:"¿Qué harías si descubres que un material no cumple con las especificaciones técnicas del proyecto?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT6_07", texto:"¿Cómo trabajas bajo condiciones climáticas adversas en campo?", tipo:"opcion_multiple", opciones:["No trabajo bajo esas condiciones","Me ajusto al protocolo de seguridad para trabajo en clima extremo y comunico si el riesgo supera lo permitido","Trabajo igual sin cuidados especiales","Solo en interiores"], correcta:1 },
      { id:"FT6_08", texto:"¿Sabes leer planos o diagramas técnicos?", tipo:"opcion_multiple", opciones:["No sé y no me interesa aprender","No sé bien pero estoy dispuesto/a a aprenderlo","Tengo conocimientos básicos de lectura de planos","Tengo experiencia leyendo planos estructurales, eléctricos o hidráulicos"], correcta:2 },
      { id:"FT6_09", texto:"Describe cómo priorizarías las tareas de mantenimiento preventivo en una planta o edificio.", tipo:"texto_libre", minPalabras:8 },
      { id:"FT6_10", texto:"¿Qué harías si un compañero de trabajo opera herramientas sin el equipo de protección adecuado?", tipo:"opcion_multiple", opciones:["No me meto, es su responsabilidad","Le llamo la atención de forma respetuosa y si no hace caso, lo reporto al supervisor de seguridad","Lo ignoro","Lo reporto directamente sin hablarle antes"], correcta:1 },
      { id:"FT6_11", texto:"¿Tienes conocimientos en electricidad, plomería, soldadura u otro oficio técnico?", tipo:"texto_libre", minPalabras:3 },
      { id:"FT6_12", texto:"¿Cómo manejas los imprevistos en obra que pueden retrasar el cronograma?", tipo:"opcion_multiple", opciones:["Entro en pánico y paro todo","Evalúo el impacto, informo al director de obra, propongo soluciones y ajusto el plan de trabajo","Solo reporto el retraso sin proponer soluciones","Continúo sin informar para no preocupar a nadie"], correcta:1 },
      { id:"FT6_13", texto:"¿Qué importancia tiene el trabajo en equipo en la construcción o el mantenimiento?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT6_14", texto:"¿Tienes licencia de conducción o alguna certificación técnica relevante?", tipo:"texto_libre", minPalabras:3 },
      { id:"FT6_15", texto:"¿Qué es el mantenimiento predictivo?", tipo:"opcion_multiple", opciones:["Mantenimiento solo cuando algo se daña","Monitoreo continuo del estado de equipos para predecir fallas antes de que ocurran y evitar paradas no programadas","Mantenimiento periódico programado","Revisión anual de instalaciones"], correcta:1 },
      { id:"FT6_16", texto:"¿Cómo garantizarías la calidad de tu trabajo en campo antes de entregar una obra o reparación?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT6_17", texto:"¿Tienes disponibilidad para trabajar en horarios extendidos, fines de semana o turnos rotativos?", tipo:"opcion_multiple", opciones:["No, solo trabajo en horario de oficina","Sí, entiendo que la construcción y el mantenimiento requieren disponibilidad amplia","Solo si me pagan horas extra desde la primera hora","Depende de la semana"], correcta:1 },
      { id:"FT6_18", texto:"¿Qué harías si un jefe te pide hacer algo que crees que es inseguro o incumple normas técnicas?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT6_19", texto:"¿Qué sabes sobre gestión de residuos en obra y normativa ambiental básica?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT6_20", texto:"¿Cómo manejarías la coordinación con proveedores de materiales que no cumplen tiempos de entrega?", tipo:"opcion_multiple", opciones:["Espero pacientemente","Comunico el problema con anticipación, busco proveedores alternativos y ajusto el cronograma con el equipo","Lo ignoro hasta que lleguen","Lo reporto solo cuando sea una emergencia"], correcta:1 },
      { id:"FT6_21", texto:"¿Qué herramientas de mano y eléctricas sabes usar con seguridad?", tipo:"texto_libre", minPalabras:3 },
      { id:"FT6_22", texto:"¿Cómo asegurarías que una instalación entregada funcione correctamente a largo plazo?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT6_23", texto:"¿Tienes experiencia en proyectos de renovación o remodelación?", tipo:"opcion_multiple", opciones:["Ninguna experiencia","He participado en proyectos pequeños de remodelación","Tengo experiencia en proyectos medianos con supervisión","He liderado o participado activamente en proyectos de renovación de mediana o gran escala"], correcta:2 },
      { id:"FT6_24", texto:"¿Qué harías si tu equipo de trabajo tiene dificultades para coordinarse correctamente?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT6_25", texto:"¿Cuál es tu expectativa salarial inicial para este puesto?", tipo:"texto_libre", minPalabras:3 },
      { id:"FT6_26", texto:"¿Cómo te mantienes actualizado/a en técnicas constructivas y materiales nuevos?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT6_27", texto:"¿Qué harías si hay un accidente laboral leve en tu área de trabajo?", tipo:"opcion_multiple", opciones:["Lo atiendo solo sin reportarlo","Brindo primeros auxilios básicos, activo el protocolo de accidentes y reporto al supervisor y salud ocupacional","Solo lo reporto al final del turno","Lo llevo directamente al hospital sin reportar"], correcta:1 },
      { id:"FT6_28", texto:"¿Qué valor te diferencia de otros candidatos para este puesto técnico?", tipo:"texto_libre", minPalabras:10 },
      { id:"FT6_29", texto:"¿Estás dispuesto/a a empezar como ayudante o auxiliar técnico y crecer con experiencia?", tipo:"opcion_multiple", opciones:["No, quiero un rol de supervisión desde el inicio","Sí, entiendo que la experiencia práctica es la base para crecer en construcción y mantenimiento","Solo si me ascienden rápidamente","Depende de las condiciones"], correcta:1 },
      { id:"FT6_30", texto:"¿Qué te gustaría aprender o mejorar en los primeros 3 meses de este trabajo?", tipo:"texto_libre", minPalabras:8 },
    ]
  },
  // Área 7 — Gastronomía y Hostelería
  7: {
    titulo: "Entrevista Laboral: Gastronomía y Hostelería",
    preguntas: [
      { id:"FT7_01", texto:"¿Qué te motivó a querer trabajar en gastronomía, hotelería o servicio al cliente?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT7_02", texto:"¿Tienes experiencia en cocina, servicio o atención hotelera? Descríbela.", tipo:"texto_libre", minPalabras:5 },
      { id:"FT7_03", texto:"¿Cómo manejarías a un comensal que se queja del sabor de un plato que preparaste?", tipo:"opcion_multiple", opciones:["Me defiendo diciendo que el plato está bien","Escucho con respeto, me disculpo, ofrezco una solución (cambio o ajuste) y verifico que quede satisfecho","Lo ignoro y sigo trabajando","Le digo que así es la receta"], correcta:1 },
      { id:"FT7_04", texto:"¿Qué normas de higiene y manipulación de alimentos conoces y aplicas?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT7_05", texto:"¿Cómo organizas tu estación de trabajo (mise en place) antes de iniciar el servicio?", tipo:"opcion_multiple", opciones:["Improviso al momento del servicio","Organizo todos los ingredientes, utensilios y preparaciones previas antes de que inicie el servicio","Solo preparo lo básico","Que cada quien se busque lo que necesita"], correcta:1 },
      { id:"FT7_06", texto:"¿Qué harías si detectas que un ingrediente tiene signos de descomposición durante el servicio?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT7_07", texto:"¿Cómo trabajas bajo presión en horas pico en un restaurante o hotel?", tipo:"opcion_multiple", opciones:["Me bloqueo y cometo errores","Mantengo la calma, priorizo por orden de llegada y calidad, y coordino con el equipo","Trabajo más rápido sacrificando calidad","Pido ayuda y paro el servicio"], correcta:1 },
      { id:"FT7_08", texto:"Describe una situación donde tuviste que improvisar para resolver un problema en cocina o servicio.", tipo:"texto_libre", minPalabras:10 },
      { id:"FT7_09", texto:"¿Qué es el food cost y cómo lo controlarías en tu rol?", tipo:"opcion_multiple", opciones:["No sé qué es","Porcentaje del costo de ingredientes respecto al precio de venta; se controla midiendo porciones y reduciendo desperdicios","Solo lo controla el dueño","El precio de la materia prima"], correcta:1 },
      { id:"FT7_10", texto:"¿Qué tan importante es el trabajo en equipo en cocina o servicio hotelero?", tipo:"opcion_multiple", opciones:["Cada quien trabaja independiente","Es fundamental: en gastronomía, el resultado depende de la coordinación y comunicación de todo el equipo","Solo en cocinas grandes","Depende del plato que se prepara"], correcta:1 },
      { id:"FT7_11", texto:"¿Tienes conocimiento de alergias alimentarias comunes y cómo manejarlas en cocina?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT7_12", texto:"¿Cómo atenderías a un huésped o cliente con necesidades especiales o solicitudes inusuales?", tipo:"opcion_multiple", opciones:["Le digo que no podemos hacer excepciones","Escucho con atención, evalúo qué es posible dentro de las capacidades del establecimiento y busco solucionar","Lo ignoro si la solicitud parece exagerada","Transfiero el problema a otro compañero"], correcta:1 },
      { id:"FT7_13", texto:"¿Qué técnicas culinarias básicas dominas?", tipo:"texto_libre", minPalabras:3 },
      { id:"FT7_14", texto:"¿Qué harías si un colega de cocina no cumple las normas de higiene?", tipo:"opcion_multiple", opciones:["No me involucro, cada quien es responsable","Le llamo la atención de forma respetuosa y si reincide, lo reporto al jefe de cocina","Lo ignoro para no crear conflicto","Solo lo reporto a recursos humanos"], correcta:1 },
      { id:"FT7_15", texto:"¿Qué significa el servicio de excelencia para ti?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT7_16", texto:"¿Tienes disponibilidad para trabajar en turnos rotativos, fines de semana y festivos?", tipo:"opcion_multiple", opciones:["No, solo trabajo entre semana","Sí, entiendo que la gastronomía y la hotelería operan los 7 días de la semana en horarios variados","Solo fines de semana de día","Solo noches entre semana"], correcta:1 },
      { id:"FT7_17", texto:"¿Qué técnica usarías para reducir el desperdicio de alimentos en la cocina?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT7_18", texto:"¿Cómo describirías un plato o menú a un cliente para hacerlo más atractivo?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT7_19", texto:"¿Qué importancia tiene la presentación de un plato en la experiencia del cliente?", tipo:"opcion_multiple", opciones:["No importa si sabe bien","Es parte fundamental: el cliente come primero con los ojos y la presentación impacta directamente en su satisfacción","Solo en restaurantes de lujo","Es secundaria frente al sabor"], correcta:1 },
      { id:"FT7_20", texto:"¿Cómo reaccionarías si el restaurante o hotel recibe una reseña negativa en redes sociales?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT7_21", texto:"¿Qué conocimientos tienes sobre vinos, cocteles o maridaje?", tipo:"texto_libre", minPalabras:3 },
      { id:"FT7_22", texto:"¿Cómo garantizarías la temperatura correcta de los alimentos durante el servicio?", tipo:"opcion_multiple", opciones:["A ojo, si parece bien está bien","Con termómetros calibrados, manteniendo equipos correctos y siguiendo protocolos de temperatura de seguridad alimentaria","Solo verifico si el cliente se queja","Solo al inicio del turno"], correcta:1 },
      { id:"FT7_23", texto:"¿Qué es el protocolo de servicio en mesa y cómo lo aplicarías?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT7_24", texto:"¿Tienes o estás dispuesto/a a obtener certificación en manipulación de alimentos?", tipo:"opcion_multiple", opciones:["No me interesa","No tengo pero estoy dispuesto/a a obtenerla","Estoy en proceso de certificarme","Ya tengo certificación vigente en manejo de alimentos"], correcta:2 },
      { id:"FT7_25", texto:"¿Cuál es tu expectativa salarial inicial para este puesto?", tipo:"texto_libre", minPalabras:3 },
      { id:"FT7_26", texto:"¿Cómo te mantienes actualizado/a en tendencias culinarias o de hospitalidad?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT7_27", texto:"¿Qué harías si hay una emergencia sanitaria en la cocina durante el servicio?", tipo:"opcion_multiple", opciones:["Continúo cocinando para no parar el servicio","Activo el protocolo de emergencia sanitaria, aíslo el área afectada, informo al jefe y protejo a los clientes","Solo lo reporto al finalizar","Llamo a los bomberos inmediatamente"], correcta:1 },
      { id:"FT7_28", texto:"¿Qué valor te diferencia de otros candidatos para este puesto gastronómico o hotelero?", tipo:"texto_libre", minPalabras:10 },
      { id:"FT7_29", texto:"¿Estás dispuesto/a a empezar como ayudante o asistente y crecer con experiencia?", tipo:"opcion_multiple", opciones:["No, quiero ser chef o jefe desde el inicio","Sí, la gastronomía y la hotelería exigen construir experiencia y reputación con tiempo y resultados","Solo si el salario lo justifica","Depende del establecimiento"], correcta:1 },
      { id:"FT7_30", texto:"¿Qué te gustaría aprender o perfeccionar en los primeros 6 meses de este trabajo?", tipo:"texto_libre", minPalabras:8 },
    ]
  },
  // Área 8 — Derecho y Gestión Social
  8: {
    titulo: "Entrevista Laboral: Derecho y Gestión Social",
    preguntas: [
      { id:"FT8_01", texto:"¿Qué te motivó a querer trabajar en derecho, gestión social o área jurídica?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT8_02", texto:"¿Tienes experiencia en prácticas jurídicas, trabajo comunitario o gestión social?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT8_03", texto:"¿Cómo manejarías un caso donde tus valores personales entran en conflicto con la ley vigente?", tipo:"opcion_multiple", opciones:["Actúo según mis valores y no según la ley","Consulto con un supervisor, analizo el marco legal completo y si hay contradicción ética real, lo elevo por canales formales","Ignoro mis valores y solo aplico la ley mecánicamente","Renuncio al caso sin buscar alternativas"], correcta:1 },
      { id:"FT8_04", texto:"Describe una situación donde hayas resuelto un conflicto entre personas con visiones opuestas.", tipo:"texto_libre", minPalabras:10 },
      { id:"FT8_05", texto:"¿Qué es la ética profesional en el derecho o el trabajo social?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT8_06", texto:"¿Cómo explicarías los derechos de una persona en términos simples a alguien que no tiene formación legal?", tipo:"opcion_multiple", opciones:["Con lenguaje técnico para demostrar conocimiento","Con lenguaje sencillo, ejemplos cotidianos y verificando que la persona entienda y pueda actuar","Con un documento escrito sin explicar","Refiriéndola a otro profesional"], correcta:1 },
      { id:"FT8_07", texto:"¿Qué sabes sobre los mecanismos de protección de derechos fundamentales en Colombia?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT8_08", texto:"¿Cómo garantizarías la confidencialidad de la información de un cliente o usuario?", tipo:"opcion_multiple", opciones:["Compartiendo solo con personas de confianza","Siguiendo los protocolos de privacidad, almacenando la información de forma segura y solo compartiéndola con autorización","No hablando del tema en público","Solo cuidando los documentos físicos"], correcta:1 },
      { id:"FT8_09", texto:"¿Qué harías si detectas que una persona no conoce sus derechos en una situación de vulneración?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT8_10", texto:"¿Qué importancia tiene la redacción jurídica o técnica en tu profesión?", tipo:"opcion_multiple", opciones:["No es tan importante si se explica bien verbalmente","Es fundamental: documentos mal redactados pueden generar ambigüedades legales y afectar negativamente los resultados","Solo para documentos formales","Es responsabilidad del jefe revisar"], correcta:1 },
      { id:"FT8_11", texto:"¿Cómo manejarías un caso de alta complejidad emocional que involucra violencia o abuso?", tipo:"texto_libre", minPalabras:10 },
      { id:"FT8_12", texto:"¿Qué es la mediación y la conciliación como herramientas de resolución de conflictos?", tipo:"opcion_multiple", opciones:["Son lo mismo que un juicio","Mecanismos alternativos donde un tercero neutral facilita acuerdos sin necesidad de un proceso judicial","Solo para conflictos laborales","Sistemas de arbitraje costosos"], correcta:1 },
      { id:"FT8_13", texto:"¿Cómo trabajarías en red con otras entidades para apoyar a una persona en situación vulnerable?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT8_14", texto:"¿Qué sabes sobre legislación laboral básica en Colombia?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT8_15", texto:"¿Qué es el interés superior del menor como principio jurídico aplicado?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT8_16", texto:"¿Cómo abordarías el acompañamiento a una víctima de violencia de género?", tipo:"opcion_multiple", opciones:["Con neutralidad total y sin tomar partido","Con enfoque diferencial, empatía, garantizando su seguridad y activando las rutas de atención correspondientes","Solo documentando el caso","Dándole consejos personales sobre qué hacer"], correcta:1 },
      { id:"FT8_17", texto:"¿Qué herramientas de gestión o software conoces para manejar casos o proyectos sociales?", tipo:"texto_libre", minPalabras:3 },
      { id:"FT8_18", texto:"¿Tienes disponibilidad para trabajar en campo, comunidades o zonas de difícil acceso?", tipo:"opcion_multiple", opciones:["No, solo en oficina","Sí, entiendo que el trabajo social y jurídico comunitario requiere presencia en campo","Solo si hay transporte pagado","Depende de la seguridad del área"], correcta:1 },
      { id:"FT8_19", texto:"¿Qué significa para ti defender los derechos de poblaciones históricamente marginalizadas?", tipo:"texto_libre", minPalabras:10 },
      { id:"FT8_20", texto:"¿Cómo manejarías la presión de plazos legales o administrativos urgentes?", tipo:"opcion_multiple", opciones:["Trabajo sin planificar hasta terminar","Priorizo las acciones según impacto legal, organizo el tiempo con agenda y comunico el estado del caso al cliente","Pido extensiones siempre","Delego todo sin supervisar"], correcta:1 },
      { id:"FT8_21", texto:"¿Qué harías si un colega actúa de forma éticamente cuestionable en un caso?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT8_22", texto:"¿Qué es el enfoque de género en el derecho y el trabajo social?", tipo:"opcion_multiple", opciones:["Solo defender a las mujeres","Perspectiva analítica que visibiliza cómo el género determina desigualdades y guía la práctica hacia la equidad","Aplicar leyes solo para mujeres","Tipo de protocolo de RRHH"], correcta:1 },
      { id:"FT8_23", texto:"¿Cómo generarías confianza con una comunidad que desconfía de las instituciones?", tipo:"texto_libre", minPalabras:10 },
      { id:"FT8_24", texto:"¿Tienes conocimiento en elaboración de informes sociales o jurídicos?", tipo:"opcion_multiple", opciones:["No tengo experiencia","He elaborado informes básicos de manera académica","Tengo experiencia práctica en informes institucionales","Tengo experiencia sólida en informes jurídicos o sociales formales"], correcta:2 },
      { id:"FT8_25", texto:"¿Cuál es tu expectativa de crecimiento en el campo jurídico o social?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT8_26", texto:"¿Cómo te actualizas en normativa, jurisprudencia o políticas sociales?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT8_27", texto:"¿Qué harías si un superior te pide actuar de forma que vulnera los derechos de un usuario?", tipo:"opcion_multiple", opciones:["Lo hago por respeto a la jerarquía","Me niego, documento el hecho y lo elevo a la instancia de control o ética correspondiente","Cumplo la instrucción y luego lo denuncio","Renuncio inmediatamente sin dejar registro"], correcta:1 },
      { id:"FT8_28", texto:"¿Qué valor te diferencia de otros candidatos para este puesto en derecho o gestión social?", tipo:"texto_libre", minPalabras:10 },
      { id:"FT8_29", texto:"¿Estás dispuesto/a a empezar en un rol de apoyo o asistencia y crecer con la experiencia?", tipo:"opcion_multiple", opciones:["No, quiero autonomía desde el inicio","Sí, la experiencia y la credibilidad en este campo se construyen con resultados y tiempo","Solo si hay plan de carrera escrito","Depende del salario"], correcta:1 },
      { id:"FT8_30", texto:"¿Qué impacto social te gustaría haber generado después de un año trabajando en este campo?", tipo:"texto_libre", minPalabras:10 },
    ]
  },
  // Área 9 — Comunicación y Medios
  9: {
    titulo: "Entrevista Laboral: Comunicación y Medios",
    preguntas: [
      { id:"FT9_01", texto:"¿Qué te motivó a querer trabajar en comunicación, medios o marketing?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT9_02", texto:"¿Tienes portafolio de trabajos en comunicación, diseño o producción? Descríbelo.", tipo:"texto_libre", minPalabras:5 },
      { id:"FT9_03", texto:"¿Cómo reaccionas cuando un cliente o jefe rechaza tu propuesta de comunicación?", tipo:"opcion_multiple", opciones:["Me ofendo porque es mi trabajo creativo","Escucho el feedback, entiendo el objetivo y propongo alternativas basadas en las necesidades reales del cliente","Defiendo mi idea sin ceder","Hago exactamente lo que dicen sin aportar criterio"], correcta:1 },
      { id:"FT9_04", texto:"¿Qué redes sociales o plataformas digitales manejas y con qué nivel de profundidad?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT9_05", texto:"¿Cómo manejarías una crisis de comunicación de una marca en redes sociales?", tipo:"opcion_multiple", opciones:["Elimino los comentarios negativos","Evalúo la gravedad, respondo con transparencia, coordino con el equipo y publico un comunicado claro y oportuno","Ignoro hasta que pase","Solo publico contenido positivo para desviar la atención"], correcta:1 },
      { id:"FT9_06", texto:"Describe un contenido que hayas creado que consideres exitoso y por qué.", tipo:"texto_libre", minPalabras:10 },
      { id:"FT9_07", texto:"¿Qué es el storytelling y cómo lo aplicarías en una campaña?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT9_08", texto:"¿Cómo definirías la audiencia objetivo para una campaña de comunicación?", tipo:"opcion_multiple", opciones:["Basándome en lo que me parece más interesante","Investigando datos demográficos, psicográficos, comportamiento digital y necesidades del público para el producto/servicio","Usando la misma audiencia siempre","Copiando la estrategia de la competencia"], correcta:1 },
      { id:"FT9_09", texto:"¿Qué herramientas de edición de video, audio o diseño manejas?", tipo:"texto_libre", minPalabras:3 },
      { id:"FT9_10", texto:"¿Qué tan cómodo/a te sientes con la redacción en diferentes formatos (nota, guion, copy)?", tipo:"opcion_multiple", opciones:["Solo escribo informalmente","Tengo facilidad para adaptar mi escritura a diferentes formatos y tonos según el objetivo comunicativo","Solo guiones o solo copy","Prefiero lo audiovisual a la escritura"], correcta:1 },
      { id:"FT9_11", texto:"¿Qué es el SEO y cómo lo tendrías en cuenta al crear contenido?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT9_12", texto:"¿Cómo medirías el éxito de una campaña de comunicación o contenido digital?", tipo:"opcion_multiple", opciones:["Por la cantidad de 'me gusta'","Con KPIs definidos: alcance, engagement, conversiones, tráfico web, según el objetivo de la campaña","Solo ventas generadas","Por el número de seguidores nuevos"], correcta:1 },
      { id:"FT9_13", texto:"¿Has producido o participado en contenido audiovisual? Descríbelo.", tipo:"texto_libre", minPalabras:5 },
      { id:"FT9_14", texto:"¿Cómo garantizarías la veracidad y calidad de la información antes de publicarla?", tipo:"opcion_multiple", opciones:["Publico primero y verifico después","Verifico fuentes, contrasto información, consulto fuentes primarias y reviso antes de publicar cualquier contenido","Solo si es un medio de comunicación formal","Si lo dice alguien famoso, es suficiente"], correcta:1 },
      { id:"FT9_15", texto:"¿Qué es la comunicación organizacional y cómo contribuirías a ella en una empresa?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT9_16", texto:"¿Tienes experiencia o conocimiento en pauta digital (Facebook Ads, Google Ads, etc.)?", tipo:"opcion_multiple", opciones:["No tengo experiencia y no me interesa","No tengo experiencia práctica pero conozco conceptos básicos","He gestionado campañas pequeñas con resultados","Tengo experiencia sólida en gestión de pauta digital"], correcta:2 },
      { id:"FT9_17", texto:"¿Cómo organizas un calendario de contenidos para redes sociales o medios?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT9_18", texto:"¿Cómo manejarías comentarios negativos o trolls en las redes sociales de la empresa?", tipo:"opcion_multiple", opciones:["Los bloqueo inmediatamente","Evalúo el comentario: si es crítica válida, respondo con empatía y solución; si es spam/troll, aplico protocolo de moderación","No respondo ninguno","Respondo siempre con humor"], correcta:1 },
      { id:"FT9_19", texto:"¿Qué conoces sobre derechos de autor en contenido digital?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT9_20", texto:"¿Cómo desarrollarías la voz de una marca que no tiene identidad comunicacional definida?", tipo:"texto_libre", minPalabras:10 },
      { id:"FT9_21", texto:"¿Qué importancia tiene la fotografía y el video en la comunicación digital actual?", tipo:"opcion_multiple", opciones:["Son complementos menores","Son elementos centrales: el contenido visual genera hasta 3 veces más engagement y comunica más rápido que el texto","Solo para marcas de moda","Depende del producto"], correcta:1 },
      { id:"FT9_22", texto:"¿Cómo colaborarías con otras áreas (marketing, ventas, RRHH) para la comunicación interna?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT9_23", texto:"¿Tienes disponibilidad para cubrir eventos en horarios variables o fines de semana?", tipo:"opcion_multiple", opciones:["No, solo trabajo en horario de oficina","Sí, entiendo que la comunicación y los medios operan en momentos clave que no siempre son de lunes a viernes","Solo si hay compensación","Solo eventos grandes"], correcta:1 },
      { id:"FT9_24", texto:"¿Qué es la identidad visual de una marca y cuál sería tu rol al trabajar con ella?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT9_25", texto:"¿Cuál es tu expectativa salarial inicial para este puesto?", tipo:"texto_libre", minPalabras:3 },
      { id:"FT9_26", texto:"¿Cómo te mantienes actualizado/a en tendencias de comunicación y medios digitales?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT9_27", texto:"¿Qué harías si te piden publicar contenido que consideras poco ético o engañoso?", tipo:"opcion_multiple", opciones:["Lo publico porque es mi trabajo","Expreso mis reservas con fundamentos, propongo alternativas éticas y si no hay acuerdo, escalo la decisión","Lo publico y me deslindo públicamente","Renuncio inmediatamente"], correcta:1 },
      { id:"FT9_28", texto:"¿Qué valor te diferencia de otros candidatos para este puesto en comunicación o medios?", tipo:"texto_libre", minPalabras:10 },
      { id:"FT9_29", texto:"¿Estás dispuesto/a a empezar como asistente o junior de comunicación y crecer con resultados?", tipo:"opcion_multiple", opciones:["No, quiero liderar proyectos grandes desde el inicio","Sí, la creatividad y el liderazgo comunicacional se construyen con portafolio y resultados reales","Solo si hay plan de carrera","Depende de la empresa"], correcta:1 },
      { id:"FT9_30", texto:"¿Qué te gustaría haber creado o logrado en términos comunicativos después de 6 meses en este trabajo?", tipo:"texto_libre", minPalabras:8 },
    ]
  },
  // Área 10 — Ciencias y Laboratorio
  10: {
    titulo: "Entrevista Laboral: Ciencias y Laboratorio",
    preguntas: [
      { id:"FT10_01", texto:"¿Qué te motivó a querer trabajar en ciencias, laboratorio o investigación?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT10_02", texto:"¿Tienes experiencia en laboratorio, análisis de datos o investigación científica?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT10_03", texto:"¿Cómo garantizarías la exactitud de los resultados en un análisis de laboratorio?", tipo:"opcion_multiple", opciones:["Con una sola repetición del análisis","Siguiendo protocolos estándar, calibrando equipos, realizando controles y repitiendo mediciones cuando hay variabilidad","Redondeando los resultados","Aceptando el primer resultado obtenido"], correcta:1 },
      { id:"FT10_04", texto:"Describe un experimento o análisis que hayas realizado y cómo interpretaste sus resultados.", tipo:"texto_libre", minPalabras:10 },
      { id:"FT10_05", texto:"¿Qué normas de seguridad básicas conoces para trabajo en laboratorio?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT10_06", texto:"¿Qué harías si obtienes un resultado inesperado o fuera de rango en un análisis?", tipo:"opcion_multiple", opciones:["Asumo que fue un error del equipo y no lo reporto","Reporto el resultado, repito el análisis con controles y consulto con el supervisor antes de emitir conclusiones","Cambio el dato para que entre en el rango esperado","Descarto el resultado automáticamente"], correcta:1 },
      { id:"FT10_07", texto:"¿Cómo documentarías los procedimientos y resultados de una serie de experimentos?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT10_08", texto:"¿Qué importancia tiene la cadena de custodia en el manejo de muestras?", tipo:"opcion_multiple", opciones:["No es importante en laboratorios pequeños","Es fundamental para garantizar la trazabilidad, integridad y validez legal de las muestras y resultados","Solo en laboratorios forenses","Solo cuando hay auditoria"], correcta:1 },
      { id:"FT10_09", texto:"¿Qué sabes sobre buenas prácticas de laboratorio (BPL)?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT10_10", texto:"¿Cómo manejarías el trabajo bajo presión con múltiples muestras urgentes al mismo tiempo?", tipo:"opcion_multiple", opciones:["Analizo las que puedo y dejo las demás","Priorizo según urgencia clínica o de proceso, organizo el flujo de trabajo y comunico tiempos realistas al solicitante","Hago todo rápido sacrificando precisión","Solo proceso las que ya conozco bien"], correcta:1 },
      { id:"FT10_11", texto:"¿Qué software o herramientas digitales has usado para análisis de datos o gestión de resultados?", tipo:"texto_libre", minPalabras:3 },
      { id:"FT10_12", texto:"¿Cómo te asegurarías de que un equipo de laboratorio esté correctamente calibrado antes de usarlo?", tipo:"opcion_multiple", opciones:["Si funciona enciende, está bien","Verifico el registro de calibración, realizo pruebas con estándares y solo lo uso si cumple los parámetros de aceptación","Solo lo calibro si veo resultados raros","Espero que el técnico lo revise antes de cada uso"], correcta:1 },
      { id:"FT10_13", texto:"¿Qué harías si detectas un derrame de sustancia química en tu área de trabajo?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT10_14", texto:"¿Cuál es tu nivel de manejo en microscopía, técnicas de tinción u otros procedimientos técnicos específicos?", tipo:"texto_libre", minPalabras:3 },
      { id:"FT10_15", texto:"¿Qué es el control de calidad en un laboratorio?", tipo:"opcion_multiple", opciones:["Limpiar el laboratorio constantemente","Sistema de procedimientos que asegura la confiabilidad, precisión y exactitud de los procesos y resultados analíticos","Solo revisar el inventario","El mantenimiento de los equipos"], correcta:1 },
      { id:"FT10_16", texto:"¿Cómo redactarías un informe técnico de resultados para alguien sin formación científica?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT10_17", texto:"¿Qué tan cómodo/a estás trabajando con protocolos estrictos y detallados?", tipo:"opcion_multiple", opciones:["Prefiero improvisar","Muy cómodo/a, los protocolos garantizan la reproducibilidad y seguridad del trabajo científico","Solo si son cortos","Depende del tipo de trabajo"], correcta:1 },
      { id:"FT10_18", texto:"¿Cómo contribuirías a mantener el orden y la organización del laboratorio?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT10_19", texto:"¿Tienes disponibilidad para turnos rotativos o guardias en laboratorio clínico o industrial?", tipo:"opcion_multiple", opciones:["No, solo trabajo de día","Sí, entiendo que los laboratorios en áreas clínicas o industriales operan de forma continua","Solo si me pagan turno extra desde la primera hora","Depende del tipo de laboratorio"], correcta:1 },
      { id:"FT10_20", texto:"¿Qué harías si un colega trabaja sin EPP adecuado en una zona de riesgo biológico o químico?", tipo:"opcion_multiple", opciones:["No me involucro","Le llamo la atención de forma respetuosa y si reincide, lo reporto al jefe de laboratorio por seguridad de todos","Solo lo anoto en el registro","Solo lo reporto si ocurre un accidente"], correcta:1 },
      { id:"FT10_21", texto:"¿Qué áreas de las ciencias te generan mayor interés para especializarte?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT10_22", texto:"¿Qué es el método científico y cómo lo aplicas en tu trabajo?", tipo:"texto_libre", minPalabras:8 },
      { id:"FT10_23", texto:"¿Cómo manejarías el descubrimiento de una anomalía significativa en tus datos de investigación?", tipo:"opcion_multiple", opciones:["La ignoro si no cambia mis conclusiones","La investigo profundamente, documentó los hallazgos y consulto con el equipo antes de tomar decisiones","La corrijo para que coincida con la hipótesis","Solo la menciono en una nota al pie"], correcta:1 },
      { id:"FT10_24", texto:"¿Qué sabes sobre normas ISO o certificaciones de calidad en laboratorios?", tipo:"texto_libre", minPalabras:3 },
      { id:"FT10_25", texto:"¿Cuál es tu expectativa salarial inicial para este puesto?", tipo:"texto_libre", minPalabras:3 },
      { id:"FT10_26", texto:"¿Cómo te mantienes actualizado/a en avances científicos y tecnológicos de tu área?", tipo:"texto_libre", minPalabras:5 },
      { id:"FT10_27", texto:"¿Qué harías si detectas una discrepancia en los resultados entre dos analistas del mismo laboratorio?", tipo:"opcion_multiple", opciones:["Asumo que uno se equivocó sin investigar","Identifico la fuente de variabilidad, propongo la repetición bajo condiciones controladas y analizo con el equipo la causa raíz","Reporto solo al analista con resultados distintos a los míos","Elijo el resultado que más conviene y sigo"], correcta:1 },
      { id:"FT10_28", texto:"¿Qué valor te diferencia de otros candidatos para este puesto en ciencias o laboratorio?", tipo:"texto_libre", minPalabras:10 },
      { id:"FT10_29", texto:"¿Estás dispuesto/a a empezar como auxiliar o asistente de laboratorio y crecer con experiencia?", tipo:"opcion_multiple", opciones:["No, quiero investigar de forma independiente desde el inicio","Sí, la experiencia práctica y la credibilidad científica se construyen con tiempo, precisión y resultados","Solo si hay plan de formación pagado","Depende del salario"], correcta:1 },
      { id:"FT10_30", texto:"¿Qué descubrimiento o impacto científico te gustaría haber contribuido después de un año en este trabajo?", tipo:"texto_libre", minPalabras:8 },
    ]
  },
};

// ============================================================
// EXPORTACIÓN (acceso global)
// ============================================================
window.APP_DATA = {
  AREAS,
  PREGUNTAS_GENERALES_ESTUDIO,
  PREGUNTAS_GENERALES_TRABAJO,
  CARRERAS,
  TRABAJOS,
  UNIVERSIDADES,
  UNIVERSIDAD_CARRERA,
  EMPRESAS,
  EMPRESA_TRABAJO,
  CUESTIONARIOS_FINALES_ESTUDIO,
  CUESTIONARIOS_FINALES_TRABAJO,
};
