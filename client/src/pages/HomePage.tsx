import { useContext } from 'react'
import { TripContext } from '../context/TripContext'
import TripCard from '../components/TripCard'

export default function HomePage() {
  const { trips } = useContext(TripContext)

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Mis Viajes ✈️</h1>
      {trips.length === 0 ? (
        <div className="text-center text-gray-400 mt-20">
          <p className="text-xl">No tienes viajes todavía</p>
          <p className="text-sm mt-2">Crea tu primer viaje con el botón de arriba</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      )}
    </div>
  )
}