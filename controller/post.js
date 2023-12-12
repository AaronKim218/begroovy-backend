import express from 'express'
import { getPostByPid, createPost, deletePost, addLikeToPost, addDislikeToPost, removeLikeFromPost, removeDislikeFromPost, getPostsByCreator, getAllPosts } from '../model/post/post.js';

const postRouter = express.Router();

postRouter.get('/:pid', async (req, res) => {
    try {
        const post = await getPostByPid(req.params.pid);
        res.json(post);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

postRouter.post('/', async (req, res) => {
    try {
        const newPost = await createPost(req.body);
        res.json(newPost);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

postRouter.delete('/:pid', async (req, res) => {
    try {
        const deletedPost = await deletePost(req.params.pid);
        res.json(deletedPost);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

postRouter.put('/:pid/like/:uid', async (req, res) => {
    try {
        const updatedPost = await addLikeToPost(req.params.pid, req.params.uid);
        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

postRouter.put('/:pid/dislike/:uid', async (req, res) => {
    try {
        const updatedPost = await addDislikeToPost(req.params.pid, req.params.uid);
        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

postRouter.put('/:pid/unlike/:uid', async (req, res) => {
    try {
        const updatedPost = await removeLikeFromPost(req.params.pid, req.params.uid);
        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

postRouter.put('/:pid/undislike/:uid', async (req, res) => {
    try {
        const updatedPost = await removeDislikeFromPost(req.params.pid, req.params.uid);
        res.json(updatedPost);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

postRouter.get('/creator/:creator', async (req, res) => {
    try {
        const posts = await getPostsByCreator(req.params.creator);
        res.json(posts);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

postRouter.get('/', async (req, res) => {
    try {
        const posts = await getAllPosts();
        res.json(posts);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

postRouter.get('/artist/:artistId', async (req, res) => {
    try {
        const posts = await getPostsByArtistId(req.params.artistId);
        res.json(posts);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

export default postRouter;