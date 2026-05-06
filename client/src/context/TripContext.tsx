import { createContext, useState, useEffect } from 'react'
import type { Trip } from '../types'
import * as api from '../api/client'

interface TripContextType {
  trips: Trip[]
  loading: boolean
  error: string | null
  addTrip: (trip: Omit<Trip, 'id'>) => Promise<void>
  updateTrip: (id: string, trip: Partial<Trip>) => Promise<void>
  deleteTrip: (id: string) => Promise<void>
}

export const TripContext = createContext<TripContextType | null>(null)

export function TripProvider({ children }: { children: React.ReactNode }) {
  const [trips, setTrips] = useState<Trip[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadTrips = async () => {
      setLoading(true)
      try {
        const data = await api.getTrips()
        setTrips(data)
      } catch {
        setError('Error al cargar los viajes')
      } finally {
        setLoading(false)
      }
    }
    loadTrips()
  }, [])

  const addTrip = async (trip: Omit<Trip, 'id'>) => {
    const newTrip = await api.createTrip(trip)
    setTrips((prev) => [...prev, newTrip])
  }

  const updateTrip = async (id: string, trip: Partial<Trip>) => {
    const updated = await api.updateTrip(id, trip)
    setTrips((prev) => prev.map((t) => (t.id === id ? updated : t)))
  }

  const deleteTrip = async (id: string) => {
    await api.deleteTrip(id)
    setTrips((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <TripContext.Provider value={{ trips, loading, error, addTrip, updateTrip, deleteTrip }}>
      {children}
    </TripContext.Provider>
  )
}