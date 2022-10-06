import express from 'express'
const router = express.Router()
import {
  getDishes,
  getDishById,
  deleteDish,
  createDish,
  updateDish,
  getDishesByRestaurantId,
  getDishesByUniversityName
} from '../controllers/dishController.js'
import { protect, admin, protectRestaurant } from '../middleware/authMiddleware.js'

router.route('/').get(getDishes).post(protectRestaurant, createDish)
router.route('/:id/restaurant').get(getDishesByRestaurantId)
router.route('/university').get(getDishesByUniversityName)
router
  .route('/:id')
  .get(getDishById)
  .delete(protectRestaurant, deleteDish)
  .put(protectRestaurant, updateDish)

export default router
