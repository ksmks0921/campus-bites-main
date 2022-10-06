import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser,
  getUsers,
  deleteUser,
  getUserById,
  getUsersByUniversity
} from '../controllers/restaurantController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser).get( getUsers)
router.post('/login', authUser)
router.get('/university', getUsersByUniversity)
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
 

export default router
