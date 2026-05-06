import { useNavigate } from 'react-router-dom'
import { useTrip } from '../hooks/useTrip'
import TripForm from '../components/TripForm'
import type { Trip } from '../types'

export default function NewTripPage() {
  const { addTrip } = useTrip()
  const navigate = useNavigate()

  const handleSubmit = async (data: Partial<Trip>) => {
    if (!data.destination || !data.startDate || !data.endDate) return
    await addTrip({
      destination: data.destination,
      startDate: data.startDate,
      endDate: data.endDate,
      description: data.description,
      days: []
    })
    navigate('/')
  }

  return (
    <div className="max-w-xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Nuevo Viaje ✈️</h1>
      <TripForm onSubmit={handleSubmit} />
    </div>
  )
}