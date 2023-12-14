import express from 'express'
import { getGroupByArtist, getGroupsByMember, addCommentToGroup, getGroupByGid, deleteCommentFromGroup, removeMemberFromGroup } from '../model/group/group.js';

const groupRouter = express.Router();

groupRouter.get('/artist/:artistId', async (req, res) => {
    try {
        const group = await getGroupByArtist(req.params.artistId);
        res.json(group);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

groupRouter.get('/member/:uid', async (req, res) => {
    try {
        const uid = req.params.uid;
        const groups = await getGroupsByMember(uid);
        res.json(groups);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

groupRouter.put('/comment/:gid', async (req, res) => {
    try {
        const gid = req.params.gid;
        const uid = req.body.uid;
        const comment = req.body.comment;
        const group = await addCommentToGroup(gid, uid, comment);
        res.json(group);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

groupRouter.get('/:gid', async (req, res) => {
    try {
        const group = await getGroupByGid(req.params.gid);
        res.json(group);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

groupRouter.delete('/comment/:gid/:cid', async (req, res) => {
    try {
        const gid = req.params.gid;
        const cid = req.params.cid;
        const group = await deleteCommentFromGroup(gid, cid);
        res.json(group);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

groupRouter.put('/member/remove/:gid/:uid', async (req, res) => {
    try {
        const gid = req.params.gid;
        const uid = req.params.uid;
        const group = await removeMemberFromGroup(gid, uid);
        res.json(group);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

export default groupRouter;