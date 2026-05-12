import { useParams, useNavigate } from 'react-router-dom'
import { useTrip } from '../hooks/useTrip'
import DayCard from '../components/DayCard'

export default function TripDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { trips, deleteTrip } = useTrip()
  const trip = trips.find((t) => t.id === id) ?? null

  const handleDelete = async () => {
    if (!id) return
    await deleteTrip(id)
    navigate('/')
  }

  if (!trip) return (
    <div className="text-center mt-20 text-gray-400">Cargando viaje...</div>
  )

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{trip.destination}</h1>
        <div className="flex gap-3">
          <button
            onClick={() => navigate(`/trips/${id}/edit`)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm"
          >
            Editar
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition text-sm"
          >
            Eliminar
          </button>
        </div>
      </div>
      <p className="text-gray-500 dark:text-gray-400 mb-2">📅 {trip.startDate} → {trip.endDate}</p>
      {trip.description && (
        <p className="text-gray-600 dark:text-gray-300 mb-6">{trip.description}</p>
      )}
      {trip.accommodation && (
        <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-4 mb-6">
          <h2 className="font-bold text-blue-700 dark:text-blue-400 mb-1">🏨 Alojamiento</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">{trip.accommodation.name}</p>
          {trip.accommodation.address && (
            <p className="text-sm text-gray-500 dark:text-gray-400">{trip.accommodation.address}</p>
          )}
        </div>
      )}
      <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-4">Itinerario</h2>
      {trip.days.length === 0 ? (
        <p className="text-gray-400">No hay días planificados todavía</p>
      ) : (
        <div className="space-y-4">
          {trip.days.map((day) => (
            <DayCard key={day.id} day={day} />
          ))}
        </div>
      )}
    </div>
  )
}