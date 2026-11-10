
import { Router } from 'express';
import { authenticate } from '../middleware/authMiddleware.js';
import { getUsers, getUserById, deleteUser, searchUsers, updateUser } from '../controllers/userController.js';

const router = Router();

router.get('/:id',getUserById);

router.delete('/:id',authenticate,deleteUser);

router.get('/search', searchUsers);

router.get('/users', getUsers);

router.post('/update/:id',authenticate, updateUser);

export default router;