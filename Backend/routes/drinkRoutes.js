import express from 'express'
const router = express.Router()
import {
  getDrinks,
  getDrinkById,
  deleteDrink,
  createDrink,
  updateDrink,
  getDrinksByRestaurantId,
  getDrinksByUniversityName
} from '../controllers/drinkController.js'
import { protect, admin, protectRestaurant } from '../middleware/authMiddleware.js'

router.route('/').get(getDrinks).post(protectRestaurant, createDrink)
router.route('/:id/restaurant').get(getDrinksByRestaurantId)
router.route('/university').get(getDrinksByUniversityName)
router
  .route('/:id')
  .get(getDrinkById)
  .delete(protectRestaurant, deleteDrink)
  .put(protectRestaurant, updateDrink)

export default router
