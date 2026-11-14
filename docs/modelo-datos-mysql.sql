-- ============================================================
-- CAMINA HACIA EL FUTURO — Script SQL de Base de Datos
-- MySQL 8.0 | Modelo Relacional Completo
-- Ejecutar en MySQL Workbench o CLI: mysql -u root -p < modelo-datos-mysql.sql
-- ============================================================

CREATE DATABASE IF NOT EXISTS catf_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE catf_db;

-- ============================================================
-- TABLA: Usuario
-- ============================================================
CREATE TABLE IF NOT EXISTS Usuario (
  id_usuario        INT           NOT NULL AUTO_INCREMENT,
  nombre_completo   VARCHAR(150)  NOT NULL,
  correo            VARCHAR(255)  NOT NULL UNIQUE,
  contrasena_hash   VARCHAR(255)  NOT NULL COMMENT 'Bcrypt hash, nunca texto plano',
  ciudad            VARCHAR(100)  NOT NULL,
  edad              TINYINT       NOT NULL CHECK (edad BETWEEN 14 AND 35),
  telefono          VARCHAR(25)   NULL,
  fecha_registro    DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ultima_modificacion DATETIME    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id_usuario),
  INDEX idx_correo (correo)
) ENGINE=InnoDB;

-- ============================================================
-- TABLA: AreaVocacional
-- ============================================================
CREATE TABLE IF NOT EXISTS AreaVocacional (
  id_area     TINYINT       NOT NULL AUTO_INCREMENT,
  nombre_area VARCHAR(100)  NOT NULL,
  descripcion TEXT          NULL,
  icon        VARCHAR(10)   NULL COMMENT 'Emoji representativo',
  PRIMARY KEY (id_area)
) ENGINE=InnoDB;

-- Datos semilla de áreas
INSERT INTO AreaVocacional (nombre_area, descripcion, icon) VALUES
  ('Tecnología e Informática',    'Desarrollo de software, sistemas y ciencias de la computación.', '💻'),
  ('Salud y Ciencias Médicas',    'Medicina, enfermería, odontología y salud pública.',            '🩺'),
  ('Arte y Diseño',               'Diseño gráfico, animación, artes visuales e industriales.',     '🎨'),
  ('Negocios y Administración',   'Administración, contabilidad, economía y marketing.',           '📊'),
  ('Educación y Humanidades',     'Docencia, psicología, filosofía e historia.',                   '📚'),
  ('Ingeniería y Construcción',   'Ingeniería civil, mecánica, eléctrica y arquitectura.',        '🔧'),
  ('Gastronomía y Hotelería',     'Cocina, pastelería, restauración y turismo hotelero.',          '🍳'),
  ('Derecho y Ciencias Sociales', 'Derecho, trabajo social y sociología.',                        '⚖️'),
  ('Comunicación y Medios',       'Periodismo, publicidad, producción audiovisual.',               '📡'),
  ('Ciencias Naturales',          'Biología, química, física e investigación científica.',         '🔬');

-- ============================================================
-- TABLA: IntentoTest
-- ============================================================
CREATE TABLE IF NOT EXISTS IntentoTest (
  id_test           INT       NOT NULL AUTO_INCREMENT,
  id_usuario        INT       NOT NULL,
  tipo_flujo_elegido ENUM('Estudio','Trabajo') NOT NULL,
  fecha_realizacion DATETIME  NOT NULL DEFAULT CURRENT_TIMESTAMP,
  puntaje_final     TINYINT   NULL COMMENT 'Porcentaje 0-100',
  califica          BOOLEAN   NULL,
  PRIMARY KEY (id_test),
  FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- ============================================================
-- TABLA: Pregunta
-- ============================================================
CREATE TABLE IF NOT EXISTS Pregunta (
  id_pregunta      INT           NOT NULL AUTO_INCREMENT,
  id_area          TINYINT       NOT NULL,
  texto_pregunta   TEXT          NOT NULL,
  categoria_flujo  ENUM('Estudio','Trabajo','General') NOT NULL DEFAULT 'General',
  tipo_pregunta    ENUM('opcion_multiple','texto_libre') NOT NULL DEFAULT 'opcion_multiple',
  min_palabras     TINYINT       NULL COMMENT 'Mínimo de palabras para preguntas de texto',
  orden            SMALLINT      NOT NULL DEFAULT 0,
  PRIMARY KEY (id_pregunta),
  FOREIGN KEY (id_area) REFERENCES AreaVocacional(id_area)
    ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

-- ============================================================
-- TABLA: OpcionRespuesta
-- ============================================================
CREATE TABLE IF NOT EXISTS OpcionRespuesta (
  id_opcion        INT           NOT NULL AUTO_INCREMENT,
  id_pregunta      INT           NOT NULL,
  texto_opcion     VARCHAR(500)  NOT NULL,
  valor_puntaje    TINYINT       NOT NULL DEFAULT 0 COMMENT 'Peso matemático (0-5)',
  es_correcta      BOOLEAN       NOT NULL DEFAULT FALSE,
  areas_afectadas  VARCHAR(50)   NULL COMMENT 'IDs de áreas separados por coma: "1,3,6"',
  PRIMARY KEY (id_opcion),
  FOREIGN KEY (id_pregunta) REFERENCES Pregunta(id_pregunta)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- ============================================================
-- TABLA: ResultadoArea
-- ============================================================
CREATE TABLE IF NOT EXISTS ResultadoArea (
  id_resultado      INT     NOT NULL AUTO_INCREMENT,
  id_test           INT     NOT NULL,
  id_area           TINYINT NOT NULL,
  puntaje_obtenido  INT     NOT NULL DEFAULT 0,
  PRIMARY KEY (id_resultado),
  FOREIGN KEY (id_test)  REFERENCES IntentoTest(id_test)
    ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (id_area)  REFERENCES AreaVocacional(id_area)
    ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

-- ============================================================
-- TABLA: Carrera
-- ============================================================
CREATE TABLE IF NOT EXISTS Carrera (
  id_carrera    INT           NOT NULL AUTO_INCREMENT,
  id_area       TINYINT       NOT NULL,
  nombre_carrera VARCHAR(200) NOT NULL,
  descripcion   TEXT          NULL,
  PRIMARY KEY (id_carrera),
  FOREIGN KEY (id_area) REFERENCES AreaVocacional(id_area)
    ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

-- ============================================================
-- TABLA: Universidad
-- ============================================================
CREATE TABLE IF NOT EXISTS Universidad (
  id_universidad  INT           NOT NULL AUTO_INCREMENT,
  nombre          VARCHAR(200)  NOT NULL,
  tipo            ENUM('Pública','Privada') NOT NULL,
  ciudad          VARCHAR(100)  NOT NULL,
  direccion       VARCHAR(300)  NOT NULL,
  ofrece_becas    BOOLEAN       NOT NULL DEFAULT FALSE,
  sitio_web       VARCHAR(300)  NULL,
  PRIMARY KEY (id_universidad),
  INDEX idx_ciudad (ciudad)
) ENGINE=InnoDB;

-- ============================================================
-- TABLA: Universidad_Carrera (tabla puente Muchos a Muchos)
-- ============================================================
CREATE TABLE IF NOT EXISTS Universidad_Carrera (
  id_uc           INT     NOT NULL AUTO_INCREMENT,
  id_universidad  INT     NOT NULL,
  id_carrera      INT     NOT NULL,
  PRIMARY KEY (id_uc),
  UNIQUE KEY uq_uni_car (id_universidad, id_carrera),
  FOREIGN KEY (id_universidad) REFERENCES Universidad(id_universidad)
    ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (id_carrera)     REFERENCES Carrera(id_carrera)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB;

-- ============================================================
-- TABLA: Empresa
-- ============================================================
CREATE TABLE IF NOT EXISTS Empresa (
  id_empresa      INT           NOT NULL AUTO_INCREMENT,
  nombre_empresa  VARCHAR(200)  NOT NULL,
  ciudad          VARCHAR(100)  NOT NULL,
  ubicacion       VARCHAR(300)  NOT NULL COMMENT 'Dirección física',
  sitio_web       VARCHAR(300)  NULL,
  PRIMARY KEY (id_empresa),
  INDEX idx_ciudad (ciudad)
) ENGINE=InnoDB;

-- ============================================================
-- TABLA: OfertaLaboral
-- ============================================================
CREATE TABLE IF NOT EXISTS OfertaLaboral (
  id_oferta       INT           NOT NULL AUTO_INCREMENT,
  id_empresa      INT           NOT NULL,
  id_area         TINYINT       NOT NULL,
  titulo_puesto   VARCHAR(200)  NOT NULL,
  descripcion     TEXT          NULL,
  activa          BOOLEAN       NOT NULL DEFAULT TRUE,
  fecha_creacion  DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id_oferta),
  FOREIGN KEY (id_empresa) REFERENCES Empresa(id_empresa)
    ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (id_area)    REFERENCES AreaVocacional(id_area)
    ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB;

-- ============================================================
-- TABLA: LogSistema (Observabilidad)
-- ============================================================
CREATE TABLE IF NOT EXISTS LogSistema (
  id_log      BIGINT        NOT NULL AUTO_INCREMENT,
  timestamp   DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  tipo        VARCHAR(50)   NOT NULL COMMENT 'LOGIN, REGISTER, QUIZ_START, etc.',
  id_usuario  INT           NULL,
  mensaje     VARCHAR(500)  NOT NULL,
  detalle     JSON          NULL,
  PRIMARY KEY (id_log),
  INDEX idx_timestamp (timestamp),
  INDEX idx_tipo (tipo)
) ENGINE=InnoDB;

-- ============================================================
-- VISTAS ÚTILES
-- ============================================================

-- Vista: Resultados del último test por usuario
CREATE OR REPLACE VIEW v_ultimo_resultado AS
SELECT
  u.nombre_completo,
  u.correo,
  u.ciudad,
  it.tipo_flujo_elegido,
  it.puntaje_final,
  it.califica,
  it.fecha_realizacion,
  av.nombre_area
FROM Usuario u
JOIN IntentoTest it ON it.id_usuario = u.id_usuario
JOIN ResultadoArea ra ON ra.id_test = it.id_test
JOIN AreaVocacional av ON av.id_area = ra.id_area
WHERE it.id_test = (
  SELECT MAX(id_test) FROM IntentoTest WHERE id_usuario = u.id_usuario
)
ORDER BY ra.puntaje_obtenido DESC;

-- Vista: Universidades por carrera y ciudad
CREATE OR REPLACE VIEW v_universidad_carrera_ciudad AS
SELECT
  c.nombre_carrera,
  av.nombre_area,
  u.nombre AS nombre_universidad,
  u.tipo,
  u.ciudad,
  u.direccion,
  u.ofrece_becas
FROM Universidad_Carrera uc
JOIN Carrera c      ON c.id_carrera      = uc.id_carrera
JOIN Universidad u  ON u.id_universidad  = uc.id_universidad
JOIN AreaVocacional av ON av.id_area     = c.id_area
ORDER BY u.ciudad, c.nombre_carrera;

-- ============================================================
-- USUARIO DE BD (para aplicación Flask — NO usar root)
-- ============================================================
-- Ejecutar como root en MySQL:
-- CREATE USER 'catf_user'@'localhost' IDENTIFIED BY 'contraseña_segura';
-- GRANT SELECT, INSERT, UPDATE, DELETE ON catf_db.* TO 'catf_user'@'localhost';
-- FLUSH PRIVILEGES;

-- ============================================================
-- NOTAS DE MIGRACIÓN
-- ============================================================
-- 1. Ejecutar este script completo crea el esquema limpio
-- 2. Para datos semilla completos, ejecutar: data_seed.sql (a generar)
-- 3. Para actualizaciones de esquema, usar migraciones con Flask-Migrate (Alembic)
-- 4. Backup recomendado: mysqldump -u root -p catf_db > backup_$(date +%Y%m%d).sql
