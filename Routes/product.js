import express from 'express'
import { addProduct, getAllProducts, getProductById, updateProductById} from '../Controllers/product.js';

const router = express.Router();

//add Product
router.post('/add',addProduct)

//get all Product
router.get('/all',getAllProducts)

//get product by id
router.get('/:id',getProductById)

//update product by id 
router.put('/:id',updateProductById)

export default router