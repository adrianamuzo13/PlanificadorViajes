# Capa de Red y Cliente de API

El archivo `src/api/client.ts` es el cliente de API tipado del frontend.
Contiene todas las funciones que se comunican con el backend Express.


## Funciones
### getTrips
Obtiene todos los viajes del backend.
Devuelve una Promise con un array de Trip.

### getTripById
Obtiene un viaje por su ID.
Devuelve una Promise con un objeto Trip.

### createTrip
Crea un nuevo viaje enviando los datos al backend.
Recibe un objeto Trip sin ID y devuelve el viaje creado con su ID.

### updateTrip
Actualiza un viaje existente por su ID.
Recibe el ID y los campos a actualizar.

### deleteTrip
Elimina un viaje por su ID.
No devuelve datos, solo lanza error si falla.

## Gestión de estados de red
Todos los estados de red se gestionan en TripContext:
- **Loading**: `loading: true` mientras se cargan los datos
- **Success**: `trips` se actualiza con los datos recibidos
- **Error**: `error` se actualiza con el mensaje de error

## Tipos
Todas las funciones usan los tipos definidos en `src/types/index.ts`
para garantizar que los datos del frontend y backend están alineados.

## Ejemplo
```typescript
// Obtener viajes
const trips = await getTrips() // Trip[]

// Crear viaje
const newTrip = await createTrip({
  destination: 'Roma',
  startDate: '2025-07-01',
  endDate: '2025-07-07',
  days: []
}) // Trip
```