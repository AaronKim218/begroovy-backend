import { userModel } from "../schema.js";

export const createUserDb = (user) => userModel.create(user);
export const findUserByUidDb = (uid) => userModel.findById(uid);
export const deleteUserDb = (uid) => userModel.deleteOne({ _id: uid });
export const updateUserDb = (uid, user) => userModel.updateOne({ _id: uid }, user);
export const findUserByUsername = (username) => userModel.findOne({ username: username });