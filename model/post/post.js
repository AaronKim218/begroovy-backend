import * as dao from "./dao.js";
import { createGroup, getGroupByArtist, addMemberToGroup } from "../group/group.js";

export const getPostByPid = async (pid) => {
    const post = await dao.findPostByPidDb(pid);
    return post;
}

export const createPost = async (post) => {
    post.createdAt = new Date();
    const newPost = await dao.createPostDb(post);

    for (const artistId of post.spotifyArtistIds) {
        const group = await getGroupByArtist(artistId);
        if (group) {
            const updatedGroup = await addMemberToGroup(group._id, post.creator);
        } else {
            const newGroup = await createGroup({ artistId: artistId, members: [post.creator] });
        }
    }

    return newPost;
}

export const deletePost = async (pid) => {
    const deletedPost = await dao.deletePostDb(pid);
    return deletedPost;
}

export const addLikeToPost = async (pid, uid) => {
    const updatedPost = await dao.addLikeToPostDb(pid, uid);
    return updatedPost;
}

export const removeLikeFromPost = async (pid, uid) => {
    const updatedPost = await dao.removeLikeFromPostDb(pid, uid);
    return updatedPost;
}

export const addDislikeToPost = async (pid, uid) => {
    const updatedPost = await dao.addDislikeToPostDb(pid, uid);
    return updatedPost;
}

export const removeDislikeFromPost = async (pid, uid) => {
    const updatedPost = await dao.removeDislikeFromPostDb(pid, uid);
    return updatedPost;
}

export const getPostsByCreator = async (creator) => {
    const posts = await dao.getPostsByCreatorDb(creator);
    return posts;
}

export const getAllPosts = async () => {
    const posts = await dao.getAllPostsDb();
    return posts;
}

export const getPostsByArtistId = async (artistId) => {
    const posts = await dao.getPostsByArtistIdDb(artistId);
    return posts;
}