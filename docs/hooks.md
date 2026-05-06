# Hooks

## useState
Se usa para gestionar estado local en los componentes. Por ejemplo en TripForm se usa para guardar los valores de los inputs del formulario.

## useEffect
Se usa para ejecutar efectos secundarios. En TripContext se usa para cargar los viajes del backend cuando el componente se monta por primera vez.

## useMemo
Se podría usar para optimizar cálculos costosos, como filtrar o ordenar
la lista de viajes sin recalcular en cada render.

## useCallback
Se podría usar para evitar que funciones como addTrip o deleteTrip se
recreen en cada render innecesariamente.

## useContext
Se usa para consumir el TripContext y acceder al estado global de viajes desde cualquier componente sin pasar props manualmente.

## Custom Hook: useTrip
Encapsula el uso de useContext(TripContext) en un hook reutilizable.
Lanza un error si se usa fuera del TripProvider.
Se usa en HomePage, NewTripPage, EditTripPage y TripDetailPage.

### Ejemplo 
```typescript
const { trips, addTrip, deleteTrip } = useTrip()
```