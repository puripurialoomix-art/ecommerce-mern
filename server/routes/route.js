import express from 'express';
import { getProductById, getProducts } from '../controller/product-controller.js';
import { userSignUp, userLogIn } from '../controller/user-controller.js';

const router = express.Router();

// ✅ Login & Signup Routes
router.post('/signup', userSignUp);
router.post('/login', userLogIn);

// ✅ Product Routes
router.get('/products', getProducts);
router.get('/product/:id', getProductById);

export default router;
