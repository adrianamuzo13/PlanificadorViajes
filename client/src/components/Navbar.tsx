import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold tracking-wide">
        ✈️ Planificador de Viajes
      </Link>
      <Link
        to="/trips/new"
        className="bg-white text-blue-600 font-semibold px-4 py-2 rounded hover:bg-blue-50 transition"
      >
        + Nuevo Viaje
      </Link>
    </nav>
  )
}