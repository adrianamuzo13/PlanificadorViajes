# Testing

## Pruebas  realizadas
### Lista de viajes
- Se muestra el viaje de ejemplo al cargar la app
- Se muestra mensaje "No tienes viajes todavía" cuando no hay viajes
- Los viajes creados aparecen en la lista

### Crear viaje
- El formulario no se envía si faltan campos obligatorios
- Al guardar el viaje aparece en la lista principal
- Se redirige a la página principal tras crear el viaje

### Ver detalle
- Se muestra la información completa del viaje
- Se muestran los botones de editar y eliminar

### Editar viaje
- El formulario se rellena con los datos actuales del viaje
- Al guardar los cambios se actualizan correctamente
- Se redirige al detalle del viaje tras editar

### Eliminar viaje
- Al eliminar el viaje desaparece de la lista
- Se redirige a la página principal tras eliminar

### Navegación
- El botón + Nuevo Viaje lleva al formulario
- El enlace Ver detalle lleva a la página de detalle
- Una ruta incorrecta muestra la página 404

### Responsive
- La app se ve correctamente en pantalla completa
- Las tarjetas se adaptan en móvil a una columna

## Errores corregidos
- Error de CORS al crear viajes: solucionado configurando cors() con origin específico
- Error de conexión al backend: solucionado arrancando el servidor antes del frontend
- Warning de Fast Refresh: aviso de Vite, no afecta al funcionamiento