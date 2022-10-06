import express from 'express'
const router = express.Router()
import {
  getModifications,
  getModificationById,
  deleteModification,
  createModification,
  updateModification,
  getModificationsByRestaurantId,
  getModificationsByUniversityName,
} from '../controllers/modificationController.js'
import { protectRestaurant } from '../middleware/authMiddleware.js'

router.route('/').get(getModifications).post(protectRestaurant, createModification)
router.route('/:id/restaurant').get(getModificationsByRestaurantId)
router.route('/university').get(getModificationsByUniversityName)
router
.route('/:id')
.get(getModificationById)
.delete(protectRestaurant, deleteModification)
.put(protectRestaurant, updateModification)

export default router
