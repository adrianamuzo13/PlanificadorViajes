import { Link } from 'react-router-dom'
import type { Trip } from '../types/index'

interface Props {
  trip: Trip
}

export default function TripCard({ trip }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-5 hover:shadow-md transition">
      <h2 className="text-xl font-bold text-blue-700">{trip.destination}</h2>
      <p className="text-gray-500 text-sm mt-1">
        {trip.startDate} → {trip.endDate}
      </p>
      {trip.description && (
        <p className="text-gray-600 mt-2 text-sm">{trip.description}</p>
      )}
      <Link
        to={`/trips/${trip.id}`}
        className="inline-block mt-4 text-blue-600 font-semibold hover:underline text-sm"
      >
        Ver detalle →
      </Link>
    </div>
  )
}