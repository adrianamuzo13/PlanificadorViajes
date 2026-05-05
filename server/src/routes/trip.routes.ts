import { Router } from 'express'
import * as TripController from '../controllers/trip.controller'

const router = Router()

router.get('/', TripController.getAll)
router.get('/:id', TripController.getOne)
router.post('/', TripController.create)
router.put('/:id', TripController.update)
router.delete('/:id', TripController.remove)

export default router