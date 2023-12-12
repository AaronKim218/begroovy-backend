import express from "express";
import { login } from "../model/auth/auth.js";

const authRouter = express.Router();

authRouter.post("/login", async (req, res) => {
    try {
        const user = await login(req.body.username, req.body.password);
        if (user) {
            req.session.user = user;
            res.json(user);
        } else {
            res.status(401).json({message: "Invalid credentials"});
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

authRouter.post("/logout", async (req, res) => {
    try {
        req.session.destroy();
        res.status(204).end();
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

export default authRouter;