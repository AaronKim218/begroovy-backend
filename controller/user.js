import express from 'express'
import { getUserByUid } from '../model/user/user.js';

const userRouter = express.Router();

userRouter.get('/:uid', async (req, res) => {
    try {
        const user = await getUserByUid(req.params.uid);
        res.json(user);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

export default userRouter;