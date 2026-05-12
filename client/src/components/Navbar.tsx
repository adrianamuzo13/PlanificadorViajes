import { Link } from 'react-router-dom'
import { useDarkMode } from '../hooks/useDarkMode'

export default function Navbar() {
  const { isDark, toggle } = useDarkMode()

  return (
    <nav className="bg-blue-600 dark:bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold tracking-wide">
        ✈️ Planificador de Viajes
      </Link>
      <div className="flex items-center gap-4">
        <button
          onClick={toggle}
          className={`relative inline-flex items-center w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none ${
            isDark ? 'bg-blue-400' : 'bg-gray-300'
          }`}
        >
          <span
            className={`inline-block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 ${
              isDark ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
        <span className="text-sm">{isDark ? '🌙' : '☀️'}</span>
        <Link
          to="/trips/new"
          className="bg-white text-blue-600 dark:text-gray-900 font-semibold px-4 py-2 rounded hover:bg-blue-50 transition"
        >
          + Nuevo Viaje
        </Link>
      </div>
    </nav>
  )
}