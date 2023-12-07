import * as dao from "./dao.js";

const SAMPLE_USERS = [
    {
        uid: '1',
        name: 'John',
        username: 'john123',
        password: '123456',
    },
    {
        uid: '2',
        name: 'Jane',
        username: 'jane456',
        password: '123456',
    },
]

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