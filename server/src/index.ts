import express from 'express'
import cors from 'cors'
import tripRoutes from './routes/trip.routes'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.use('/api/v1/trips', tripRoutes)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
