import * as dao from "./dao.js";

export const getGroupByArtist = async (artist) => {
    const group = await dao.findGroupByArtistIdDb(artist);
    return group;
}

export const createGroup = async (group) => {
    const newGroup = await dao.createGroupDb(group);
    return newGroup;
}

export const deleteGroup = async (gid) => {
    const deletedGroup = await dao.deleteGroupDb(gid);
    return deletedGroup;
}

export const getGroupsByMember = async (uid) => {
    const groups = await dao.getGroupsByMemberDb(uid);
    return groups;
}

export const addMemberToGroup = async (gid, uid) => {
    const updatedGroup = await dao.addMemberToGroupDb(gid, uid);
    return updatedGroup;
}

export const addCommentToGroup = async (gid, uid, comment) => {
    const createdAt = new Date();
    const updatedGroup = await dao.addCommentToGroupDb(gid, uid, comment, createdAt);
    return updatedGroup;
}

export const getGroupByGid = async (gid) => {
    const group = await dao.getGroupByGidDb(gid);
    return group;
}

export const deleteCommentFromGroup = async (gid, cid) => {
    const updatedGroup = await dao.deleteCommentFromGroupDb(gid, cid);
    return updatedGroup;
}

export const removeMemberFromGroup = async (gid, uid) => {
    const updatedGroup = await dao.removeMemberFromGroupDb(gid, uid);

    // remove all comments from removed member
    const comments = updatedGroup.comments;
    const newComments = comments.filter(comment => comment.uid !== uid);
    const result = await dao.updatedGroupDb(gid, { comments: newComments });

    return updatedGroup;
}