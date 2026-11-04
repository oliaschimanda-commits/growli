import { Router } from 'express';
import { authenticate } from '../middleware/authMiddleware.js';
import {createProduct, getProductById, getAllProducts, getUserProducts, getProducts, updateProduct, searchProducts, deleteProduct} from '../controllers/productController.js'

const router = Router();

router.get('/', getProducts);
router.get('/search', searchProducts);
router.get('/user',authenticate,getUserProducts);
router.get('/:id',getProductById);
router.delete('/delete',authenticate,deleteProduct);
router.post('/update',authenticate,updateProduct);
router.post('/create',authenticate,createProduct);

export default router;