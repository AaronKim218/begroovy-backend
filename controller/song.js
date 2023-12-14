import express from 'express'
import { getSongDataBySid, searchSongs } from '../model/song/song.js';

const songRouter = express.Router();

songRouter.get('/data/:sid', async (req, res) => {
    try {
        const song = await getSongDataBySid(req.params.sid);
        res.json(song);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

songRouter.get('/search', async (req, res) => {
    try {
        const song = req.query.song;
        const artist = req.query.artist;
        const limit = req.query.limit;
        const offset = req.query.offset;
        const results = await searchSongs(song, artist, limit, offset);
        res.json(results);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

export default songRouter;