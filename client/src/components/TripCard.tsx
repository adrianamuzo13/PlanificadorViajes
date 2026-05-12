import { Link } from 'react-router-dom'
import { MapPin, Calendar, ArrowRight } from 'lucide-react'
import type { Trip } from '../types/index'

interface Props {
  trip: Trip
}

export default function TripCard({ trip }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition border border-gray-100 dark:border-gray-700 overflow-hidden">
      {trip.imageUrl ? (
        <img
          src={trip.imageUrl}
          alt={trip.destination}
          className="w-full h-40 object-cover"
        />
      ) : (
        <div className="w-full h-40 bg-primary-100 dark:bg-gray-700 flex items-center justify-center">
          <MapPin size={40} className="text-primary-300 opacity-50" />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-start gap-2 mb-2">
          <MapPin size={20} className="text-primary-400 mt-1 shrink-0" />
          <h2 className="text-xl font-bold text-primary-400 dark:text-primary-200">{trip.destination}</h2>
        </div>
        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-2">
          <Calendar size={14} />
          <span>{trip.startDate} → {trip.endDate}</span>
        </div>
        {trip.description && (
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{trip.description}</p>
        )}
        <Link
          to={`/trips/${trip.id}`}
          className="flex items-center gap-1 text-primary-400 dark:text-primary-200 font-semibold hover:underline text-sm"
        >
          Ver detalle <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  )
}