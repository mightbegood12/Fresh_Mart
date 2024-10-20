import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectdatabase from './config/mongodbconfig.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import connectCloudinary from './config/cloudinaryconfig.js';

const app = express();
const port = process.env.PORT;

connectdatabase();
connectCloudinary()

app.use(express.json());
app.use(cors());
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)

app.get('/', (req, res) => {
    res.send('Working');
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});