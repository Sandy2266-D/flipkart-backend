import express from  'express';
import { getProductById, getProducts } from '../controller/productController.js';
import { userSignup, userLogin } from '../controller/userController.js';
import { addPaymentGateway,paymentResponse } from '../controller/paymentController.js';

const router = express.Router();

//login & signup
router.post('/signup', userSignup);
router.post('/login', userLogin);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

// router.post('/cart/add', addItemInCart);

router.post('/payment', addPaymentGateway);
router.post('/callback', paymentResponse);

export default router;