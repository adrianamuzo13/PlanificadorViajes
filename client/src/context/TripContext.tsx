import { createContext, useState, useEffect } from 'react'
import type { Trip } from '../types/index'

interface TripContextType {
  trips: Trip[]
  addTrip: (trip: Trip) => void
  updateTrip: (trip: Trip) => void
  deleteTrip: (id: string) => void
}

export const TripContext = createContext<TripContextType>({
  trips: [],
  addTrip: () => {},
  updateTrip: () => {},
  deleteTrip: () => {},
})

export function TripProvider({ children }: { children: React.ReactNode }) {
  const [trips, setTrips] = useState<Trip[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/trips')
      .then((res) => res.json())
      .then((data) => setTrips(data))
      .catch((err) => console.error('Error cargando viajes:', err))
  }, [])

  const addTrip = (trip: Trip) => {
    setTrips((prev) => [...prev, trip])
  }

  const updateTrip = (trip: Trip) => {
    setTrips((prev) => prev.map((t) => (t.id === trip.id ? trip : t)))
  }

  const deleteTrip = (id: string) => {
    setTrips((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <TripContext.Provider value={{ trips, addTrip, updateTrip, deleteTrip }}>
      {children}
    </TripContext.Provider>
  )
}