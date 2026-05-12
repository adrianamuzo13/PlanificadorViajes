import { Trash2, Clock } from 'lucide-react'
import type { Day, Activity } from '../types/index'
import ActivityForm from './ActivityForms'

interface Props {
  day: Day
  onAddActivity: (dayId: string, activity: Omit<Activity, 'id'>) => void
  onDeleteActivity: (dayId: string, activityId: string) => void
  onDeleteDay: (dayId: string) => void
}

export default function DayCard({ day, onAddActivity, onDeleteActivity, onDeleteDay }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200">📅 {day.date}</h3>
        <button
          onClick={() => onDeleteDay(day.id)}
          className="text-red-400 hover:text-red-600 transition"
        >
          <Trash2 size={16} />
        </button>
      </div>
      {day.activities.length === 0 ? (
        <p className="text-gray-400 text-sm">No hay actividades para este día</p>
      ) : (
        <ul className="space-y-2 mb-2">
          {day.activities.map((activity) => (
            <li key={activity.id} className="border-l-4 border-primary-300 pl-3 flex justify-between items-start">
              <div>
                <p className="font-semibold text-gray-700 dark:text-gray-200">{activity.title}</p>
                {activity.time && (
                  <p className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock size={12} /> {activity.time}
                  </p>
                )}
                {activity.description && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">{activity.description}</p>
                )}
              </div>
              <button
                onClick={() => onDeleteActivity(day.id, activity.id)}
                className="text-red-400 hover:text-red-600 transition ml-2 shrink-0"
              >
                <Trash2 size={14} />
              </button>
            </li>
          ))}
        </ul>
      )}
    <ActivityForm onAdd={(activity: Omit<Activity, 'id'>) => onAddActivity(day.id, activity)} />    </div>
  )
}