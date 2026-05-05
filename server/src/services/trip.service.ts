import { trips } from '../config/data'
import type { Trip } from '../types/trip'

export const getAllTrips = (): Trip[] => {
  return trips
}

export const getTripById = (id: string): Trip | undefined => {
  return trips.find((t) => t.id === id)
}

export const createTrip = (trip: Omit<Trip, 'id'>): Trip => {
  const newTrip: Trip = {
    ...trip,
    id: Date.now().toString(),
    days: trip.days || []
  }
  trips.push(newTrip)
  return newTrip
}

export const updateTrip = (id: string, data: Partial<Trip>): Trip | undefined => {
  const index = trips.findIndex((t) => t.id === id)
  if (index === -1) return undefined
  trips[index] = { ...trips[index], ...data }
  return trips[index]
}

export const deleteTrip = (id: string): boolean => {
  const index = trips.findIndex((t) => t.id === id)
  if (index === -1) return false
  trips.splice(index, 1)
  return true
}