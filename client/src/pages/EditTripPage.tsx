import { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { TripContext } from '../context/TripContext'
import TripForm from '../components/TripForm'

export default function EditTripPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const context = useContext(TripContext)

  if (!context) return <div>Cargando...</div>

  const { trips, updateTrip } = context
  const trip = trips.find((t) => t.id === id)

  if (!trip) return <div className="text-center mt-20 text-gray-400">Viaje no encontrado</div>

  const handleSubmit = async (data: Partial<typeof trip>) => {
    if (!id) return
    await updateTrip(id, data)
    navigate(`/trips/${id}`)
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Editar Viaje ✏️</h1>
      <TripForm initialData={trip} onSubmit={handleSubmit} />
    </div>
  )
}