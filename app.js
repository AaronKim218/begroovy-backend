import "dotenv/config";
import express from 'express'
import cors from 'cors'
import userRouter from "./controller/user.js";
import postRouter from "./controller/post.js";

const app = express()
app.use(
    cors({
            credentials: true,
            origin: process.env.FRONTEND_URL,
        })
);   
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/post', postRouter);

export default app;