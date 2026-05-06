import express from 'express'
import cors from 'cors'
import tripRoutes from './routes/trip.routes'

const app = express()
const PORT = 3000

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}))
app.use(express.json())

app.use('/api/v1/trips', tripRoutes)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})