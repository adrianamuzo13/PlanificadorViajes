# Arquitectura de la Aplicación

## Componentes principales
- **Navbar**: navegación entre páginas
- **TripCard**: tarjeta de resumen de un viaje en la lista principal
- **TripForm**: formulario para crear o editar un viaje
- **DayCard**: tarjeta que representa un día del itinerario
- **ActivityForm**: formulario para añadir una actividad a un día

## Componentes reutilizables
- TripCard y DayCard se reutilizan en varias páginas
- TripForm se usa tanto para crear como para editar

## Gestión del estado
- **Context API**: para compartir la lista de viajes entre componentes
- **useState**: para manejar formularios y estados locales
- **useEffect**: para cargar datos de la API al montar componentes

## Rutas de la aplicación
- `/` → página principal con lista de viajes
- `/trips/new` → crear nuevo viaje
- `/trips/:id` → detalle de un viaje
- `/trips/:id/edit` → editar un viaje
- `*` → página 404

## Endpoints del backend
| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/v1/trips` | Obtener todos los viajes |
| GET | `/api/v1/trips/:id` | Obtener un viaje por ID |
| POST | `/api/v1/trips` | Crear un nuevo viaje |
| PUT | `/api/v1/trips/:id` | Editar un viaje existente |
| DELETE | `/api/v1/trips/:id` | Eliminar un viaje |

## Flujo de datos
Usuario → Componente React → src/api/client.ts → Express Backend → Datos en memoria

