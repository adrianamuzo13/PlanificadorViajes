# Context API

## ¿Qué es?
Es una forma de compartir estado global entre componentes sin necesidad
de pasar props manualmente por cada nivel del árbol de componentes.

## ¿Cuándo es útil?
Es útil cuando varios componentes necesitan acceder a los mismos datos,
como la lista de viajes en esta aplicación. Sin Context, tendríamos que
pasar los viajes como props desde App hasta cada componente que los necesite.

## Implementación en este proyecto
### TripContext
Contiene el estado global de la aplicación:
- **trips**: lista de todos los viajes
- **loading**: indica si se están cargando los datos
- **error**: mensaje de error si falla la carga
- **addTrip**: función para crear un viaje
- **updateTrip**: función para editar un viaje
- **deleteTrip**: función para eliminar un viaje

### TripProvider
Envuelve toda la aplicación en App.tsx para que cualquier componente
pueda acceder al contexto.

### useTrip (custom hook)
Encapsula el uso del contexto y lanza un error si se usa fuera del Provider.

## Ejemplo 
```typescript
const { trips, addTrip } = useTrip()
```