import { Router } from 'express';
import { authenticate } from '../middleware/authMiddleware.js';
import { createTrainingEvent, getTrainingEventById, getAllTrainingEvents, 
    getTrainingEvents, updateTrainingEvent, searchTrainingEvents, 
    deleteTrainingEvent } from '../controllers/trainingEventController.js';

const router = Router();

router.get('/', getTrainingEvents);
router.get('/search', searchTrainingEvents);
router.get('/:id',getTrainingEventById);

router.delete('/:id',authenticate,deleteTrainingEvent);

router.post('/update/:id',authenticate, updateTrainingEvent);

router.post('create',authenticate,createTrainingEvent);

export default router;