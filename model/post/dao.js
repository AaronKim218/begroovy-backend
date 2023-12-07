import { postModel } from "../schema.js";

export const createPostDb = (post) => postModel.create(post);
export const findPostByPidDb = (pid) => postModel.findById(pid);
export const deletePostDb = (pid) => postModel.deleteOne({ _id: pid });
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