
import { Router } from 'express';
import { getUsers, getUserById, deleteUser, searchUsers, updateUser } from '../controllers/userController.js';

const router = Router();

router.get('/:id',getUserById);

router.delete('/:id',deleteUser);

router.get('/search', searchUsers);

router.get('/users', getUsers);

router.post('/update/:id', updateUser);

export default router;