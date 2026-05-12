import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useTrip } from '../hooks/useTrip'
import DayCard from '../components/DayCard'
import { MapPin, Calendar, Hotel, Pencil, Trash2, Plus } from 'lucide-react'
import type { Activity } from '../types/index'

export default function TripDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { trips, updateTrip, deleteTrip } = useTrip()
  const trip = trips.find((t) => t.id === id) ?? null
  const [newDate, setNewDate] = useState('')

  const handleDelete = async () => {
    if (!id) return
    await deleteTrip(id)
    navigate('/')
  }

  const handleAddDay = async () => {
    if (!newDate || !trip || !id) return
    const newDay = {
      id: Date.now().toString(),
      date: newDate,
      activities: []
    }
    await updateTrip(id, { days: [...trip.days, newDay] })
    setNewDate('')
  }

  const handleAddActivity = async (dayId: string, activity: Omit<Activity, 'id'>) => {
    if (!trip || !id) return
    const newActivity = { ...activity, id: Date.now().toString() }
    const updatedDays = trip.days.map((d) =>
      d.id === dayId ? { ...d, activities: [...d.activities, newActivity] } : d
    )
    await updateTrip(id, { days: updatedDays })
  }

  const handleDeleteActivity = async (dayId: string, activityId: string) => {
    if (!trip || !id) return
    const updatedDays = trip.days.map((d) =>
      d.id === dayId ? { ...d, activities: d.activities.filter((a) => a.id !== activityId) } : d
    )
    await updateTrip(id, { days: updatedDays })
  }

  const handleDeleteDay = async (dayId: string) => {
    if (!trip || !id) return
    await updateTrip(id, { days: trip.days.filter((d) => d.id !== dayId) })
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
            <Pencil size={16} /> Editar
          </button>
          <button
            onClick={handleDelete}
            className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition text-sm"
          >
            <Trash2 size={16} /> Eliminar
          </button>
        </div>
      </div>

      {trip.imageUrl && (
        <img src={trip.imageUrl} alt={trip.destination} className="w-full h-56 object-cover rounded-xl mb-6" />
      )}

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

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200">Itinerario</h2>
      </div>

      <div className="flex gap-2 mb-6">
        <input
          type="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
          className="border dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-300"
        />
        <button
          onClick={handleAddDay}
          className="flex items-center gap-2 bg-primary-400 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition text-sm"
        >
          <Plus size={16} /> Añadir día
        </button>
      </div>

      {trip.days.length === 0 ? (
        <p className="text-gray-400">No hay días planificados todavía</p>
      ) : (
        <div className="space-y-4">
          {trip.days.map((day) => (
            <DayCard
              key={day.id}
              day={day}
              onAddActivity={handleAddActivity}
              onDeleteActivity={handleDeleteActivity}
              onDeleteDay={handleDeleteDay}
            />
          ))}
        </div>
      )}
    </div>
  )
}