import { findUserByUsername } from "../user/dao.js";
// import bcrypt from "bcrypt";

export const login = async (username, password) => {
    const user = await findUserByUsername(username);
    if (user) {
        // const match = await bcrypt.compare(password, user.password);
        const match = password === user.password;
        if (match) {
            return user;
        }
    }
    return null;
}