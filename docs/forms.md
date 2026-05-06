# Formularios e Interacción

## Formularios controlados
En React, un formulario controlado es aquel donde el estado de los inputs se gestiona con useState. Cada cambio en el input actualiza el estado y el valor del input siempre refleja el estado actual.

## TripForm
Es el formulario principal de la aplicación. Se usa tanto para crear
como para editar viajes.

### Campos
- **Destino**: texto obligatorio
- **Fecha de inicio**: fecha obligatoria
- **Fecha de fin**: fecha obligatoria
- **Descripción**: texto opcional

### Validación
Antes de enviar el formulario se comprueba que los campos obligatorios
no estén vacíos. Si faltan campos, el formulario no se envía.

### Props
- **initialData**: datos iniciales para rellenar el formulario al editar
- **onSubmit**: función que recibe los datos del formulario al enviarlo

## Ejemplo de uso
```typescript
// Crear un viaje
<TripForm onSubmit={handleSubmit} />

// Editar un viaje
<TripForm initialData={trip} onSubmit={handleSubmit} />
```

## Mensajes de error
Si los campos obligatorios están vacíos el formulario no se envía.
En futuras versiones se mostrarán mensajes de error bajo cada campo.