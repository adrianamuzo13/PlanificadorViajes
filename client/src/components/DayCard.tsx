import type { Day } from '../types/index'

interface Props {
  day: Day
}

export default function DayCard({ day }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h3 className="text-lg font-bold text-gray-700 mb-3">📅 {day.date}</h3>
      {day.activities.length === 0 ? (
        <p className="text-gray-400 text-sm">No hay actividades para este día</p>
      ) : (
        <ul className="space-y-2">
          {day.activities.map((activity) => (
            <li key={activity.id} className="border-l-4 border-blue-400 pl-3">
              <p className="font-semibold text-gray-700">{activity.title}</p>
              {activity.time && (
                <p className="text-xs text-gray-400">🕐 {activity.time}</p>
              )}
              {activity.description && (
                <p className="text-sm text-gray-500">{activity.description}</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}