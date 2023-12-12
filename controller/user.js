import express from 'express'
import { getUserByUid, createUser, deleteUser, updateUser } from '../model/user/user.js';

const userRouter = express.Router();

userRouter.get('/:uid', async (req, res) => {
    try {
        const user = await getUserByUid(req.params.uid);
        res.json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

userRouter.post('/', async (req, res) => {
    try {
        const newUser = await createUser(req.body);
        res.json(newUser);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

userRouter.delete('/:uid', async (req, res) => {
    try {
        const deletedUser = await deleteUser(req.params.uid);
        res.json(deletedUser);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

userRouter.put('/:uid', async (req, res) => {
    try {
        const updatedUser = await updateUser(req.params.uid, req.body);
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

export default userRouter;