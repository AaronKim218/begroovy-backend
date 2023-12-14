import * as dao from "./dao.js";
import { getPostsByCreator, getPostsByArtistId } from "../post/post.js";

export const getUserByUid = async (uid) => {
    const user = await dao.findUserByUidDb(uid);
    return user;
}

export const createUser = async (user) => {
    const newUser = await dao.createUserDb(user);
    return newUser;
}

export const deleteUser = async (uid) => {
    const deletedUser = await dao.deleteUserDb(uid);
    return deletedUser;
}

export const updateUser = async (uid, user) => {
    const updatedUser = await dao.updateUserDb(uid, user);
    return updatedUser;
}

export const getListenerStatsByUid = async (uid) => {
    const creatorPosts = await getPostsByCreator(uid);
    const stats = {
        totalLikes: 0,
        totalDislikes: 0,
        totalPosts: creatorPosts.length
    };
    creatorPosts.forEach(post => {
        stats.totalLikes += post.likes.length;
        stats.totalDislikes += post.dislikes.length;
    });
    return stats;
}

export const getArtistStatsByUid = async (uid, artistId) => {
    const creatorPosts = await getPostsByCreator(uid);
    const artistPosts = await getPostsByArtistId(artistId);
    const stats = {
        totalLikes: 0,
        totalDislikes: 0,
        totalPosts: creatorPosts.length,
        totalArtistLikes: 0,
        totalArtistDislikes: 0,
        totalArtistPosts: artistPosts.length
    };
    creatorPosts.forEach(post => {
        stats.totalLikes += post.likes.length;
        stats.totalDislikes += post.dislikes.length;
    });
    artistPosts.forEach(post => {
        stats.totalArtistLikes += post.likes.length;
        stats.totalArtistDislikes += post.dislikes.length;
    });
    return stats;
}