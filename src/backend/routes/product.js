import { Router } from 'express'
import {createProduct, getProductById, getAllProducts, getProducts, updateProduct, searchProducts, deleteProduct} from '../controllers/productController.js'

const router = Router();

router.get('/', getProducts);
router.get('/search', searchProducts);
router.get('/:id',getProductById);

router.delete('/:id',deleteProduct);



router.post('update/:id', updateProduct);


router.post('/create',createProduct);

export default router;