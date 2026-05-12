# Despliegue

## Frontend - Vercel
El frontend está desplegado en Vercel conectado al repositorio de GitHub.
Cada push a main actualiza automáticamente el despliegue.

### Configuración
- **Root Directory**: client
- **Build Command**: npm run build
- **Output Directory**: dist
- **Variable de entorno**: VITE_API_URL = https://planificador-viajes-api.onrender.com/api/v1

### URL
https://planificador-viajes-mocha.vercel.app

## Backend - Render
El backend está desplegado en Render conectado al repositorio de GitHub.
Cada push a main actualiza automáticamente el despliegue.

### Configuración
- **Root Directory**: server
- **Build Command**: npm install && npm run build
- **Start Command**: npm start
- **Puerto**: 3000

### URL
https://planificador-viajes-api.onrender.com

## Problemas encontrados
- Error de CORS en producción: solucionado añadiendo la URL de Vercel
  a la lista de orígenes permitidos en el backend.
- El backend en Render tarda unos minutos en arrancar.