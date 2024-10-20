import express from 'express'
import {addProducts,listProducts,removeProducts,singleProducts} from  '../controllers/productController.js'
import upload from '../middleware/multer.js'
import adminAuth from '../middleware/adminAuth.js'

const productRouter = express.Router()

productRouter.post(
  '/add',
  adminAuth,
  upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },
  ]),
  addProducts
)
productRouter.get('/list',adminAuth,listProducts)
productRouter.post('/remove',removeProducts)
productRouter.post('/single',singleProducts)

export  default productRouter


