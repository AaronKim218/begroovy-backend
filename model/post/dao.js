import { postModel } from "../schema.js";

export const createPostDb = (post) => postModel.create(post);
export const findPostByPidDb = (pid) => postModel.findById(pid);
export const deletePostDb = (pid) => postModel.deleteOne({ _id: pid });
export const getPostsByCreatorDb = (creator) => postModel.find({ creator: creator });
export const getAllPostsDb = () => postModel.find().sort({ createdAt: -1 });
export const addLikeToPostDb = (pid, uid) => {
    return postModel.findOneAndUpdate(
        { _id: pid },
        { $addToSet: { likes: uid } },
        { new: true }
    );
};
export const removeLikeFromPostDb = (pid, uid) => {
    return postModel.findOneAndUpdate(
        { _id: pid },
        { $pull: { likes: uid } },
        { new: true }
    );
};
export const addDislikeToPostDb = (pid, uid) => {
    return postModel.findOneAndUpdate(
        { _id: pid },
        { $addToSet: { dislikes: uid } },
        { new: true }
    );
};
export const removeDislikeFromPostDb = (pid, uid) => {
    return postModel.findOneAndUpdate(
        { _id: pid },
        { $pull: { dislikes: uid } },
        { new: true }
    );
};

// get all posts where artist id is in the array of artist ids
export const getPostsByArtistIdDb = (artistId) => {
    return postModel.find({ spotifyArtistIds: artistId });
};