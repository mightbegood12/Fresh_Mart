import express from 'express'
import { loginUser,registerUser,adminLogin,getProfile} from '../controllers/userController.js'

const userRouter =  express.Router()

userRouter.post('/login',loginUser)
userRouter.post('/register',registerUser)
userRouter.post('/admin',adminLogin)
userRouter.get('/profile', getProfile);

export default userRouter;
