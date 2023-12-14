import { groupModel } from "../schema.js";

export const createGroupDb = (group) => groupModel.create(group);
export const findGroupByArtistIdDb = (artistId) => groupModel.findOne({ artistId: artistId });
export const deleteGroupDb = (gid) => groupModel.deleteOne({ _id: gid });
export const getGroupsByMemberDb = (uid) => groupModel.find({ members: uid });
export const addMemberToGroupDb = (gid, uid) => {
    return groupModel.findOneAndUpdate(
        { _id: gid },
        { $addToSet: { members: uid } },
        { new: true }
    );
};
export const addCommentToGroupDb = (gid, uid, comment, createdAt) => {
    return groupModel.findOneAndUpdate(
        { _id: gid },
        { $addToSet: { comments: { uid: uid, comment: comment, createdAt: createdAt } } },
        { new: true }
    );
}
export const getGroupByGidDb = (gid) => groupModel.findById(gid);
export const deleteCommentFromGroupDb = (gid, cid) => {
    return groupModel.findOneAndUpdate(
        { _id: gid },
        { $pull: { comments: { _id: cid } } },
        { new: true }
    );
};
export const removeMemberFromGroupDb = (gid, uid) => {
    return groupModel.findOneAndUpdate(
        { _id: gid },
        { $pull: { members: uid } },
        { new: true }
    );
}
export const updatedGroupDb = (gid, group) => groupModel.updateOne({ _id: gid }, group);
