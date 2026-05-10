import type { Trip } from '../types'

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1'
export const getTrips = async (): Promise<Trip[]> => {
  const res = await fetch(`${BASE_URL}/trips`)
  if (!res.ok) throw new Error('Error al obtener los viajes')
  return res.json()
}

export const getTripById = async (id: string): Promise<Trip> => {
  const res = await fetch(`${BASE_URL}/trips/${id}`)
  if (!res.ok) throw new Error('Viaje no encontrado')
  return res.json()
}

export const createTrip = async (trip: Omit<Trip, 'id'>): Promise<Trip> => {
  const res = await fetch(`${BASE_URL}/trips`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(trip)
  })
  if (!res.ok) throw new Error('Error al crear el viaje')
  return res.json()
}

export const updateTrip = async (id: string, trip: Partial<Trip>): Promise<Trip> => {
  const res = await fetch(`${BASE_URL}/trips/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(trip)
  })
  if (!res.ok) throw new Error('Error al actualizar el viaje')
  return res.json()
}

export const deleteTrip = async (id: string): Promise<void> => {
  const res = await fetch(`${BASE_URL}/trips/${id}`, {
    method: 'DELETE'
  })
  if (!res.ok) throw new Error('Error al eliminar el viaje')
}