import { useState } from 'react'
import type { Trip } from '../types/index'

interface Props {
  initialData?: Partial<Trip>
  onSubmit: (data: Partial<Trip>) => void
}

export default function TripForm({ initialData, onSubmit }: Props) {
  const [destination, setDestination] = useState(initialData?.destination || '')
  const [startDate, setStartDate] = useState(initialData?.startDate || '')
  const [endDate, setEndDate] = useState(initialData?.endDate || '')
  const [description, setDescription] = useState(initialData?.description || '')
  const [imageUrl, setImageUrl] = useState(initialData?.imageUrl || '')
  const [accommodationName, setAccommodationName] = useState(initialData?.accommodation?.name || '')
  const [accommodationAddress, setAccommodationAddress] = useState(initialData?.accommodation?.address || '')
  const [checkIn, setCheckIn] = useState(initialData?.accommodation?.checkIn || '')
  const [checkOut, setCheckOut] = useState(initialData?.accommodation?.checkOut || '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!destination || !startDate || !endDate) return
    const accommodation = accommodationName ? {
      name: accommodationName,
      address: accommodationAddress,
      checkIn,
      checkOut
    } : undefined
    onSubmit({ destination, startDate, endDate, description, imageUrl, accommodation })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
          Destino *
        </label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Ej: París, Francia"
          className="w-full border dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-300"
        />
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Fecha de inicio *
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full border dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-300"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Fecha de fin *
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full border dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-300"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
          Descripción
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe tu viaje..."
          rows={3}
          className="w-full border dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-300"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
          Imagen de portada (URL)
        </label>
        <input
          type="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="https://ejemplo.com/imagen.jpg"
          className="w-full border dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-300"
        />
      </div>
      <div className="border-t dark:border-gray-600 pt-4">
        <h3 className="text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">🏨 Alojamiento (opcional)</h3>
        <div className="space-y-3">
          <input
            type="text"
            value={accommodationName}
            onChange={(e) => setAccommodationName(e.target.value)}
            placeholder="Nombre del alojamiento"
            className="w-full border dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-300"
          />
          <input
            type="text"
            value={accommodationAddress}
            onChange={(e) => setAccommodationAddress(e.target.value)}
            placeholder="Dirección"
            className="w-full border dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-300"
          />
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Check-in</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full border dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-300"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Check-out</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full border dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-300"
              />
            </div>
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-primary-400 text-white font-semibold py-2 rounded-lg hover:bg-primary-600 transition"
      >
        Guardar viaje
      </button>
    </form>
  )
}