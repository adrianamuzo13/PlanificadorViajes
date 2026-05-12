# Retrospectiva

## ¿Qué he aprendido?
En este proyecto he conectado por primera vez un frontend con React y TypeScript
con un backend real en Express.
También he aprendido a organizar el código en capas en el backend (routes,
controllers, services) y a usar Context API para compartir estado global
en el frontend sin pasar props manualmente.

## Problemas encontrados
El mayor problema fue el error de CORS al desplegar en producción. En local
funcionaba perfectamente pero al desplegar el frontend en Vercel y el backend
en Render, el backend rechazaba las peticiones porque solo permitía
peticiones desde localhost.

También tuve problemas al principio con la estructura de carpetas, ya que
creé los archivos del backend dentro de la carpeta del frontend por error.

## Cómo usé la IA
Usé IA para guiarme paso a paso durante el desarrollo, resolver errores
de TypeScript y entender conceptos como el Context API o los custom hooks.
También me ayudó a depurar errores de CORS y de configuración del despliegue.

## Reflexión final
Realizar este proyecto me ha ayudado a entender cómo funciona una aplicación fullstack
real, desde el diseño de la arquitectura hasta el despliegue en producción.
