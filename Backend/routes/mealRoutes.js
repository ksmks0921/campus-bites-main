import express from 'express'
const router = express.Router()
import {
  getMeals,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  getProductByRestaurantId,
  getMealsByUniversityName,
  updateMealModification,
  updateMealDishes,
  updateMealDrinks
} from '../controllers/mealController.js'
import { protectRestaurant } from '../middleware/authMiddleware.js'

router.route('/').get(getMeals).post(protectRestaurant, createProduct)
router.route('/:id/restaurant').get(getProductByRestaurantId)
router.route('/university').get(getMealsByUniversityName)
router
  .route('/:id')
  .get(getProductById)
  .delete(protectRestaurant, deleteProduct)
  .put(protectRestaurant, updateProduct)
  router.route('/:id/modifications').put(protectRestaurant,updateMealModification)
  router.route('/:id/dishes').put(protectRestaurant,updateMealDishes)
  router.route('/:id/drinks').put(protectRestaurant,updateMealDrinks)

export default router
