import express from 'express'
import { isAdmin, requireSignIn } from '../middlewers/authMiddleware.js';
import { brainTreePaymentController, braintreeTokenController, createProductController, deleteProductController,
     getProductController, getSingleProductController,
      productCategoryController,
      productCountController, productFiltersController,
       productListController, productPhotoController, 
       realtedProductController, searchProductController, updateProductController } from '../controller/productController.js';
import formidable from 'express-formidable';
import braintree from 'braintree';

const router=express.Router();

//routes
router.post('/create-product',requireSignIn
    ,isAdmin,formidable()
    ,createProductController);

    //update routes
router.put('/update-product/:pid',requireSignIn
    ,isAdmin,formidable()
    ,updateProductController);


// get product
router.get('/get-product',getProductController)

//sigle  product
router.get('/get-product/:slug',getSingleProductController)
// get photo
router.get('/product-photo/:pid',productPhotoController)

// delete product
router.delete('/delete-product/:pid',deleteProductController)

// filter product
router.post('/product-filters',productFiltersController);

//product count
router.get('/product-count',productCountController);

// product per page
router.get('/product-list/:page',productListController);

// serach product
router.get('/search/:keyword', searchProductController);

// similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//categeroy wise product 
router.get('/product-category/:slug',productCategoryController)

// payment route token
router.get('/braintree/token',braintreeTokenController);

// payment
 router.post('/braintree/payment',requireSignIn,brainTreePaymentController)

export default router