import {Router } from 'express';
import { authenticate } from '../middleware/authMiddleware.js';
import { getFarmingInfoById, deleteFarmingInfo, searchFarmingInfo, getFarmingInfos, updateFarmingInfo, createFarmingInfo} from '../controllers/farmingInfoController.js';

const router = Router();

router.get('/', getFarmingInfos);
router.get('/search', searchFarmingInfo);
router.get('/:id',getFarmingInfoById);

router.delete('/:id',authenticate,deleteFarmingInfo);



router.post('/update/:id',authenticate, updateFarmingInfo);

router.post('/create',authenticate,createFarmingInfo);

export default router;