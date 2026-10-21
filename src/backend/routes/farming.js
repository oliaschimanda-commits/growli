import {Router } from 'express';
import { getFarmingInfoById, deleteFarmingInfo, searchFarmingInfo, getFarmingInfos, updateFarmingInfo, createFarmingInfo} from '../controllers/farmingInfoController.js';

const router = Router();

router.get('/:id',getFarmingInfoById);

router.delete('/:id',deleteFarmingInfo);

router.get('/search', searchFarmingInfo);

router.get('/farminginfo', getFarmingInfos);

router.post('/update/:id', updateFarmingInfo);

router.post('/create',createFarmingInfo);

export default router;