import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TripProvider } from './context/TripContext'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import NewTripPage from './pages/NewTripPage'
import TripDetailPage from './pages/TripDetailPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <TripProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trips/new" element={<NewTripPage />} />
          <Route path="/trips/:id" element={<TripDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </TripProvider>
  )
}

export default App