import express from 'express'
import {registercontroller, loginController,
  testController, forgotPasswordController,
   updateProfileController,
   getOrderController,
   getAllOrderController,
   orderStatusController} from "../controller/authController.js"
import { isAdmin, requireSignIn } from '../middlewers/authMiddleware.js'

//router object
const router=express.Router()


//routing
//register || Metrhod post
router.post('/register', registercontroller)

//LOGIN || post 
router.post('/login', loginController);

// forget password
router.post('/forgot-password', forgotPasswordController);

//test routes
router.get('/test',requireSignIn,isAdmin, testController)

//protected user routes

router.get('/user-auth', requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
// protected admin routes
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get('/orders',requireSignIn,getOrderController);

// All Orders
router.get('/all-orders',requireSignIn,isAdmin,getAllOrderController);

//order status update
router.get('/order-status/:orderId',requireSignIn,isAdmin,orderStatusController);

export default router;