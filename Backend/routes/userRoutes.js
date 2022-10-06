import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser,
  getUsers,
  deleteUser,
  getUserById,
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  

export default router
