import { useParams, useNavigate } from 'react-router-dom'
import { useTrip } from '../hooks/useTrip'
import DayCard from '../components/DayCard'
import { MapPin, Calendar, Hotel, Pencil, Trash2 } from 'lucide-react'

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
        <div className="flex items-center gap-2">
          <MapPin size={28} className="text-primary-400" />
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{trip.destination}</h1>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => navigate(`/trips/${id}/edit`)}
            className="flex items-center gap-2 bg-primary-400 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition text-sm"
          >
            <Pencil size={16} />
            Editar
          </button>
          <button
            onClick={handleDelete}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition text-sm"
          >
            <Trash2 size={16} />
            Eliminar
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4">
        <Calendar size={16} />
        <span>{trip.startDate} → {trip.endDate}</span>
      </div>
      {trip.description && (
        <p className="text-gray-600 dark:text-gray-300 mb-6">{trip.description}</p>
      )}
      {trip.accommodation && (
        <div className="bg-primary-50 dark:bg-gray-800 rounded-xl p-4 mb-6 flex items-start gap-3">
          <Hotel size={20} className="text-primary-400 mt-1" />
          <div>
            <h2 className="font-bold text-primary-400 dark:text-primary-200 mb-1">Alojamiento</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">{trip.accommodation.name}</p>
            {trip.accommodation.address && (
              <p className="text-sm text-gray-500 dark:text-gray-400">{trip.accommodation.address}</p>
            )}
          </div>
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