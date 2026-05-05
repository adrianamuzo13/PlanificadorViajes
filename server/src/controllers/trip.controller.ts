import { Request, Response } from 'express'
import * as TripService from '../services/trip.service'

export const getAll = (req: Request, res: Response) => {
  const trips = TripService.getAllTrips()
  res.json(trips)
}

export const getOne = (req: Request, res: Response) => {
  const trip = TripService.getTripById(req.params.id)
  if (!trip) return res.status(404).json({ message: 'Viaje no encontrado' })
  res.json(trip)
}

export const create = (req: Request, res: Response) => {
  if (!req.body.destination || !req.body.startDate || !req.body.endDate) {
    return res.status(400).json({ message: 'Faltan campos obligatorios' })
  }
  const trip = TripService.createTrip(req.body)
  res.status(201).json(trip)
}

export const update = (req: Request, res: Response) => {
  const trip = TripService.updateTrip(req.params.id, req.body)
  if (!trip) return res.status(404).json({ message: 'Viaje no encontrado' })
  res.json(trip)
}

export const remove = (req: Request, res: Response) => {
  const deleted = TripService.deleteTrip(req.params.id)
  if (!deleted) return res.status(404).json({ message: 'Viaje no encontrado' })
  res.status(200).json({ message: 'Viaje eliminado' })
}