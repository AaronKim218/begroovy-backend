import "dotenv/config";
import express from 'express'
import cors from 'cors'
import userRouter from "./controller/user.js";
import postRouter from "./controller/post.js";
import authRouter from "./controller/auth.js";
import songRouter from "./controller/song.js";
import session from "express-session";

const app = express()
app.use(
    cors({
            credentials: true,
            origin: process.env.FRONTEND_URL,
        })
);
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
sessionOptions.proxy = true;
sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
};
}  
app.use(
    session(sessionOptions)
);
app.use(session(sessionOptions));
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);
app.use('/api/post', postRouter);
app.use('/api/song', songRouter);

export default app;