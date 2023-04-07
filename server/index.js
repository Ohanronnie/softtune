import express from 'express';
import cookieparser from 'cookie-parser';
import bodyparser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import home from './routes/home.js';
import register from './routes/register.js';
const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors(/*{
  origin: ["http://localhost:3000/"],
  credentials: true
}*/));
app.use((req,res,next) => {
  console.log(new Date());
  console.log(req.body)
  next()
})
app.use(bodyparser.urlencoded({extended: false}));
app.use(express.json());
app.use('/',home);
app.use('/register',register);
app.listen(PORT,() => {
  console.log(`App is running on port ${PORT}`)
})
