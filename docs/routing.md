# Rutas y Navegación

## Configuración
Se usa React Router v6 para gestionar la navegación entre páginas.
El componente BrowserRouter envuelve toda la aplicación en App.tsx.

## Estructura de rutas

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | HomePage | Lista de todos los viajes |
| `/trips/new` | NewTripPage | Formulario para crear un viaje |
| `/trips/:id` | TripDetailPage | Detalle de un viaje concreto |
| `/trips/:id/edit` | EditTripPage | Formulario para editar un viaje |
| `*` | NotFoundPage | Página 404 para rutas no encontradas |

## Navegación
- El componente **Navbar** tiene un enlace a `/` y otro a `/trips/new`
- Desde **TripCard** se navega a `/trips/:id` con el enlace "Ver detalle"
- Desde **TripDetailPage** se navega a `/trips/:id/edit` con el botón "Editar"
- Tras crear, editar o eliminar un viaje se redirige a `/` con useNavigate

## Página 404
Cualquier ruta no definida muestra la página NotFoundPage con un
enlace para volver al inicio.