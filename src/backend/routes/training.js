import { Router } from 'express'
import { createTrainingEvent, getTrainingEventById, getAllTrainingEvents, 
    getTrainingEvents, updateTrainingEvent, searchTrainingEvents, 
    deleteTrainingEvent } from '../controllers/trainingEventController.js';

const router = Router();

router.get('/:id',getTrainingEventById);

router.delete('/:id',deleteTrainingEvent);

router.get('/search', searchTrainingEvents);

router.get('/events', getTrainingEvents);

router.post('/update/:id', updateTrainingEvent);

router.post('create',createTrainingEvent);

export default router;