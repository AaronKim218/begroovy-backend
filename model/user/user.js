import * as dao from "./dao.js";

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