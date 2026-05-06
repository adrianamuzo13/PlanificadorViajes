# Componentes

## Navbar
Barra de navegación superior presente en todas las páginas.
Contiene el título de la app y el botón para crear un nuevo viaje.

### Props
No tiene props, usa React Router para la navegación.

## TripCard
Tarjeta que muestra el resumen de un viaje en la lista principal.
Es reutilizable y se usa en HomePage.

### Props
- **trip**: objeto de tipo Trip con los datos del viaje

### Muestra
- Destino
- Fechas de inicio y fin
- Descripción (si existe)
- Enlace a la página de detalle

## TripForm
Formulario controlado para crear o editar un viaje.
Se reutiliza en NewTripPage y EditTripPage.

### Props
- **initialData**: datos iniciales opcionales para editar
- **onSubmit**: función callback que recibe los datos del formulario

## DayCard
Tarjeta que muestra un día del itinerario con sus actividades.
Se reutiliza en TripDetailPage.

### Props
- **day**: objeto de tipo Day con la fecha y lista de actividades

### Muestra
- Fecha del día
- Lista de actividades con título, hora y descripción
- Mensaje si no hay actividades

## Composición
TripForm se compone dentro de NewTripPage y EditTripPage.
DayCard se compone dentro de TripDetailPage iterando sobre trip.days.
