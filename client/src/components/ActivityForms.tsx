import { useState } from 'react'
import type { Activity } from '../types/index'
import { Plus } from 'lucide-react'

interface Props {
  onAdd: (activity: Omit<Activity, 'id'>) => void
}

export default function ActivityForm({ onAdd }: Props) {
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('')
  const [description, setDescription] = useState('')
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title) return
    onAdd({ title, time, description })
    setTitle('')
    setTime('')
    setDescription('')
    setOpen(false)
  }

  if (!open) return (
    <button
      onClick={() => setOpen(true)}
      className="flex items-center gap-2 text-sm text-primary-400 hover:text-primary-600 font-semibold mt-2"
    >
      <Plus size={16} /> Añadir actividad
    </button>
  )

  return (
    <form onSubmit={handleSubmit} className="mt-3 space-y-2 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nombre de la actividad *"
        className="w-full border dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-300"
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full border dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-300"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripción (opcional)"
        className="w-full border dark:border-gray-600 rounded-lg px-3 py-2 text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-300"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-primary-400 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-primary-600 transition"
        >
          Añadir
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-white px-3 py-1.5 rounded-lg text-sm hover:bg-gray-300 transition"
        >
          Cancelar
        </button>
      </div>
    </form>
  )
}