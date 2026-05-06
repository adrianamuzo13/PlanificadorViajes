# API REST

## Base URL
http://localhost:3000/api/v1

### GET /trips
Devuelve todos los viajes.

**Response 200:**
```json
[
  {
    "id": "1",
    "destination": "París, Francia",
    "startDate": "2025-06-01",
    "endDate": "2025-06-07",
    "description": "Viaje romántico a París",
    "days": []
  }
]
```

### GET /trips/:id
Devuelve un viaje por su ID.

**Response 200:**
```json
{
  "id": "1",
  "destination": "París, Francia",
  "startDate": "2025-06-01",
  "endDate": "2025-06-07",
  "description": "Viaje romántico a París",
  "days": []
}
```

**Response 404:**
```json
{ "message": "Viaje no encontrado" }
```

### POST /trips
Crea un nuevo viaje.

**Request body:**
```json
{
  "destination": "Roma, Italia",
  "startDate": "2025-07-01",
  "endDate": "2025-07-07",
  "description": "Viaje cultural a Roma"
}
```

**Response 201:**
```json
{
  "id": "1234567890",
  "destination": "Roma, Italia",
  "startDate": "2025-07-01",
  "endDate": "2025-07-07",
  "description": "Viaje cultural a Roma",
  "days": []
}
```

**Response 400:**
```json
{ "message": "Faltan campos obligatorios" }
```

### PUT /trips/:id
Actualiza un viaje existente.

**Request body:**
```json
{
  "destination": "Roma, Italia",
  "startDate": "2025-07-01",
  "endDate": "2025-07-10"
}
```

**Response 200:**
```json
{
  "id": "1234567890",
  "destination": "Roma, Italia",
  "startDate": "2025-07-01",
  "endDate": "2025-07-10",
  "days": []
}
```

### DELETE /trips/:id
Elimina un viaje por su ID.

**Response 200:**
```json
{ "message": "Viaje eliminado" }
```

**Response 404:**
```json
{ "message": "Viaje no encontrado" }
```