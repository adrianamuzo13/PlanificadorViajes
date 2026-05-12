import { Link } from 'react-router-dom'
import { useDarkMode } from '../hooks/useDarkMode'
import { Plane, Plus, Moon, Sun } from 'lucide-react'

export default function Navbar() {
  const { isDark, toggle } = useDarkMode()

  return (
    <nav className="bg-primary-400 dark:bg-gray-900 text-white px-6 py-4 flex items-center justify-between shadow-md">
      <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-wide">
        <Plane size={24} />
        Planificador de Viajes
      </Link>
      <div className="flex items-center gap-4">
        <button
          onClick={toggle}
          className={`relative inline-flex items-center w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none ${
            isDark ? 'bg-primary-300' : 'bg-gray-400'
          }`}
        >
          <span
            className={`inline-block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 ${
              isDark ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
        {isDark ? <Moon size={18} /> : <Sun size={18} />}
        <Link
          to="/trips/new"
          className="flex items-center gap-2 bg-white text-primary-400 font-semibold px-4 py-2 rounded-lg hover:bg-primary-50 transition"
        >
          <Plus size={18} />
          Nuevo Viaje
        </Link>
      </div>
    </nav>
  )
}
