# Plan de Migración a Backend — Flask + MySQL

## Cuando migrar

Cuando se necesite:
- Múltiples usuarios simultáneos en servidor compartido
- Seguridad real de contraseñas (bcrypt en servidor)
- Historial de resultados por usuario (no depender de localStorage)
- Actualizaciones de datos sin tocar código frontend

## Estructura de proyecto Flask (monolito modular)

```
catf_backend/
├── app/
│   ├── __init__.py           # App factory (create_app)
│   ├── config.py             # Configuraciones por entorno
│   ├── models/
│   │   ├── usuario.py        # Modelo ORM Usuario
│   │   ├── test.py           # IntentoTest, ResultadoArea
│   │   └── datos.py          # AreaVocacional, Carrera, Universidad, etc.
│   ├── controllers/
│   │   ├── auth.py           # Register, Login, Logout, Profile
│   │   └── quiz.py           # Start, SaveGeneral, Process, SaveFinal, Results
│   ├── services/
│   │   ├── quiz_engine.py    # Algoritmo de puntaje y selección
│   │   ├── pdf_service.py    # Generación de PDF con ReportLab
│   │   └── filter_service.py # Filtrado de ubicaciones por ciudad
│   ├── static/               # Frontend (los HTML/CSS/JS de este proyecto)
│   └── templates/            # Solo si se usa Jinja2 para alguna vista
├── migrations/               # Flask-Migrate (Alembic)
├── tests/
│   ├── test_auth.py
│   ├── test_quiz_engine.py
│   └── test_filters.py
├── logs/
├── .env
├── requirements.txt
├── run.py                    # Punto de entrada: flask run
└── wsgi.py                   # Para Gunicorn en producción
```

## requirements.txt (producción)

```
Flask==3.0.3
Flask-SQLAlchemy==3.1.1
Flask-Migrate==4.0.7
Flask-Login==0.6.3
Flask-WTF==1.2.1
PyMySQL==1.1.1
bcrypt==4.1.3
python-dotenv==1.0.1
reportlab==4.2.0        # PDF generation
gunicorn==22.0.0
pytest==8.2.2
pytest-flask==1.3.0
```

## Endpoints REST a implementar

| Método | Ruta | Descripción |
|--------|------|-------------|
| POST | `/api/auth/register` | Crear cuenta nueva |
| POST | `/api/auth/login` | Iniciar sesión |
| POST | `/api/auth/logout` | Cerrar sesión |
| GET  | `/api/auth/me` | Obtener usuario actual |
| PATCH| `/api/auth/profile` | Actualizar perfil |
| POST | `/api/quiz/start` | Iniciar nuevo test |
| POST | `/api/quiz/general/save` | Guardar respuestas generales |
| POST | `/api/quiz/general/process` | Procesar generales → área → cuestionario final |
| POST | `/api/quiz/final/save` | Guardar respuestas finales |
| POST | `/api/quiz/results` | Calcular y guardar resultados |
| GET  | `/api/results/pdf` | Descargar PDF de resultados |

## Comando de arranque

```bash
# Desarrollo
flask --app run:app run --debug

# Producción
gunicorn -w 4 -b 0.0.0.0:5000 wsgi:app
```

## Variables de entorno necesarias

Ver `.env.example` en la raíz del proyecto.
