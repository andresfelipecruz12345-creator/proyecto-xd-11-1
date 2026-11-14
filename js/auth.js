/* ============================================================
   CAMINA HACIA EL FUTURO — auth.js
   Módulo de autenticación: registro, login, sesión local
   Simula backend con localStorage (en producción: Flask/MySQL)
   ============================================================ */

"use strict";

const Auth = (() => {

  // ---------- Claves de almacenamiento ----------
  const KEYS = {
    USERS:   "catf_users",
    SESSION: "catf_session",
    LOGS:    "catf_auth_logs",
  };

  // ---------- Helpers de almacenamiento ----------
  const getUsers   = ()      => JSON.parse(localStorage.getItem(KEYS.USERS)   || "{}");
  const saveUsers  = (users) => localStorage.setItem(KEYS.USERS, JSON.stringify(users));

  const getSession = ()      => JSON.parse(localStorage.getItem(KEYS.SESSION) || "null");
  const saveSession= (sess)  => localStorage.setItem(KEYS.SESSION, JSON.stringify(sess));
  const clearSession = ()    => localStorage.removeItem(KEYS.SESSION);

  // ---------- Logger central ----------
  const log = (type, message, extra = {}) => {
    const entry = { timestamp: new Date().toISOString(), type, message, ...extra };
    const logs = JSON.parse(localStorage.getItem(KEYS.LOGS) || "[]");
    logs.push(entry);
    if (logs.length > 200) logs.shift(); // máx 200 entradas
    localStorage.setItem(KEYS.LOGS, JSON.stringify(logs));
    console.log(`[CATF Auth][${type}]`, message, extra);
  };

  // ---------- Hash simple (simulado — en prod: bcrypt) ----------
  const simpleHash = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash |= 0;
    }
    return "hash_" + Math.abs(hash).toString(36);
  };

  // ============================================================
  // VALIDACIONES
  // ============================================================
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const validatePassword = (pwd) => pwd && pwd.length >= 8;
  const validateAge = (age) => {
    const n = parseInt(age, 10);
    return !isNaN(n) && n >= 14 && n <= 35;
  };
  const validatePhone = (phone) => !phone || /^\+?[\d\s\-]{7,15}$/.test(phone.trim());
  const validateName  = (name)  => name && name.trim().length >= 2;

  // ============================================================
  // REGISTRO DE CUENTA NUEVA
  // ============================================================
  const register = ({ nombre, correo, contrasena, ciudad, edad, telefono }) => {
    // Validar campos obligatorios
    if (!validateName(nombre))
      return { ok: false, error: "El nombre debe tener al menos 2 caracteres." };
    if (!validateEmail(correo))
      return { ok: false, error: "El correo electrónico no tiene un formato válido." };
    if (!validatePassword(contrasena))
      return { ok: false, error: "La contraseña debe tener más de 8 caracteres." };
    if (!ciudad || ciudad.trim().length < 2)
      return { ok: false, error: "Ingresa tu ciudad de residencia." };
    if (!validateAge(edad))
      return { ok: false, error: "La edad debe ser entre 14 y 35 años." };
    if (telefono && !validatePhone(telefono))
      return { ok: false, error: "El número de teléfono no es válido." };

    const users = getUsers();
    const emailKey = correo.trim().toLowerCase();

    if (users[emailKey])
      return { ok: false, error: "Ya existe una cuenta con ese correo electrónico." };

    const newUser = {
      id:               "u_" + Date.now(),
      nombre:           nombre.trim(),
      correo:           emailKey,
      contrasenaHash:   simpleHash(contrasena),
      ciudad:           ciudad.trim().toLowerCase(),
      edad:             parseInt(edad, 10),
      telefono:         telefono ? telefono.trim() : "",
      fechaRegistro:    new Date().toISOString(),
      ultimaModificacion: new Date().toISOString(),
    };

    users[emailKey] = newUser;
    saveUsers(users);
    log("REGISTER", "Nuevo usuario registrado", { correo: emailKey });

    // Iniciar sesión automáticamente
    const session = buildSession(newUser);
    saveSession(session);

    return { ok: true, user: sanitizeUser(newUser) };
  };

  // ============================================================
  // INICIO DE SESIÓN
  // ============================================================
  const login = ({ correo, contrasena }) => {
    if (!correo || !contrasena)
      return { ok: false, error: "Ingresa tu correo y contraseña." };

    const users   = getUsers();
    const emailKey = correo.trim().toLowerCase();
    const user    = users[emailKey];

    if (!user) {
      log("LOGIN_FAIL", "Usuario no encontrado", { correo: emailKey });
      return { ok: false, error: "Lo siento, no pudimos encontrar tu cuenta. Inténtalo de nuevo." };
    }

    if (user.contrasenaHash !== simpleHash(contrasena)) {
      log("LOGIN_FAIL", "Contraseña incorrecta", { correo: emailKey });
      return { ok: false, error: "La contraseña es incorrecta. Inténtalo de nuevo." };
    }

    const session = buildSession(user);
    saveSession(session);
    log("LOGIN", "Sesión iniciada", { correo: emailKey });

    return { ok: true, user: sanitizeUser(user) };
  };

  // ============================================================
  // CERRAR SESIÓN
  // ============================================================
  const logout = () => {
    const sess = getSession();
    if (sess) log("LOGOUT", "Sesión cerrada", { correo: sess.correo });
    clearSession();
  };

  // ============================================================
  // OBTENER USUARIO ACTUAL
  // ============================================================
  const getCurrentUser = () => {
    const sess = getSession();
    if (!sess) return null;
    const users = getUsers();
    const user  = users[sess.correo];
    return user ? sanitizeUser(user) : null;
  };

  // ============================================================
  // ACTUALIZAR PERFIL
  // ============================================================
  const updateProfile = (updates) => {
    const sess = getSession();
    if (!sess) return { ok: false, error: "No hay sesión activa." };

    const users   = getUsers();
    const emailKey = sess.correo;
    const user    = users[emailKey];
    if (!user) return { ok: false, error: "Usuario no encontrado." };

    let emailChanged = false;

    // Si cambia el correo
    if (updates.correo && updates.correo.trim().toLowerCase() !== emailKey) {
      const newEmail = updates.correo.trim().toLowerCase();
      if (!validateEmail(newEmail))
        return { ok: false, error: "El nuevo correo no tiene un formato válido." };
      if (users[newEmail])
        return { ok: false, error: "Ese correo ya está en uso por otra cuenta." };

      // Mover al nuevo key, eliminar el anterior
      users[newEmail] = { ...user, correo: newEmail, ultimaModificacion: new Date().toISOString() };
      delete users[emailKey];
      saveUsers(users);

      // Reiniciar test — eliminar progreso afiliado al correo anterior
      localStorage.removeItem("catf_quiz_" + emailKey);

      // Actualizar sesión
      const newSession = buildSession(users[newEmail]);
      saveSession(newSession);
      log("PROFILE_EMAIL_CHANGE", "Email cambiado, test reiniciado", { from: emailKey, to: newEmail });
      emailChanged = true;

      return { ok: true, user: sanitizeUser(users[newEmail]), emailChanged };
    }

    // Actualizar campos permitidos
    const allowed = ["nombre", "ciudad", "edad", "telefono"];
    allowed.forEach(field => {
      if (updates[field] !== undefined) user[field] = updates[field];
    });
    user.ultimaModificacion = new Date().toISOString();
    users[emailKey] = user;
    saveUsers(users);
    log("PROFILE_UPDATE", "Perfil actualizado", { correo: emailKey });

    return { ok: true, user: sanitizeUser(user), emailChanged };
  };

  // ============================================================
  // CAMBIAR CONTRASEÑA
  // ============================================================
  const changePassword = ({ correo, actual, nueva }) => {
    if (!validatePassword(nueva))
      return { ok: false, error: "La nueva contraseña debe tener más de 8 caracteres." };

    const users   = getUsers();
    const emailKey = correo.trim().toLowerCase();
    const user    = users[emailKey];
    if (!user) return { ok: false, error: "Usuario no encontrado." };

    if (user.contrasenaHash !== simpleHash(actual))
      return { ok: false, error: "La contraseña actual es incorrecta." };

    user.contrasenaHash = simpleHash(nueva);
    user.ultimaModificacion = new Date().toISOString();
    users[emailKey] = user;
    saveUsers(users);
    log("PASSWORD_CHANGE", "Contraseña cambiada", { correo: emailKey });

    return { ok: true };
  };

  // ============================================================
  // HELPERS INTERNOS
  // ============================================================
  const buildSession = (user) => ({
    correo:    user.correo,
    nombre:    user.nombre,
    ciudad:    user.ciudad,
    createdAt: new Date().toISOString(),
  });

  const sanitizeUser = (user) => ({
    id:       user.id,
    nombre:   user.nombre,
    correo:   user.correo,
    ciudad:   user.ciudad,
    edad:     user.edad,
    telefono: user.telefono,
    fechaRegistro: user.fechaRegistro,
    ultimaModificacion: user.ultimaModificacion,
  });

  // ============================================================
  // VERIFICAR SESIÓN (para proteger rutas)
  // ============================================================
  const requireAuth = (redirectTo = "index.html") => {
    const user = getCurrentUser();
    if (!user) {
      window.location.href = redirectTo;
      return null;
    }
    return user;
  };

  return {
    register,
    login,
    logout,
    getCurrentUser,
    updateProfile,
    changePassword,
    requireAuth,
    validateEmail,
    validatePassword,
  };
})();

window.Auth = Auth;
