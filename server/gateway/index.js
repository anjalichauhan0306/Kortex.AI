import express from 'express';
import dotenv from 'dotenv';
import proxy from 'express-http-proxy';
import cors from 'cors';
import cookieParser from 'cookie-parser'
dotenv.config();


const port = process.env.PORT;
const app = express()


app.get("/",(req,res)=>{
    res.json("hello from gateway");
})

app.use(cors(
    {
        origin:process.env.CLIENT_URL,
        credentials:true,
    }
))

app.use(cookieParser())
app.use("/auth",proxy(process.env.AUTH_SERVICE))

app.listen(port,()=>{
    console.log(`gateway started at ${port}`);
})


