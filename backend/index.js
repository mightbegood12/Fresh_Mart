import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectdatabase from './config/mongodbconfig.js';

const app = express();
const port = process.env.PORT;

connectdatabase();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Working');
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});