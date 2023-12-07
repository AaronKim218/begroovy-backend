import express from 'express'
import { getPostByPid } from '../model/post/post.js';

const postRouter = express.Router();

postRouter.get('/:pid', async (req, res) => {
    try {
        const post = await getPostByPid(req.params.pid);
        res.json(post);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

export default postRouter;