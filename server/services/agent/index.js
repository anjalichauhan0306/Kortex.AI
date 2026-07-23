import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import router from './routes/chat.route.js';
dotenv.config();

const port = process.env.PORT;
const app = express()

app.use(express.json())

app.use(express.json())

app.get("/",(req,res)=>{
    res.json("hello from Agent");
})

app.listen(port,()=>{
    console.log(`Agent started at ${port}`);
    connectDb()
})


