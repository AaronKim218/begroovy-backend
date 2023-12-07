import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: {
        type: String,
        enum: ["LISTENER", "ARTIST"],
        required: true,
    },
},
{ collection: "users" });

export const userModel = mongoose.model("users", userSchema);

const postSchema = new mongoose.Schema({
    creator: { type: String, required: true },
    songId: { type: String, required: true },
    // likes is an array of user ids
    likes: { type: [String], required: true },
    // dislikes is an array of user ids
    dislikes: { type: [String], required: true },
    // comments is an array of objects that contain the user id and the comment
    comments: { type: [Object], required: true },
    createdAt: { type: Date, required: true },
},
{ collection: "posts" });

export const postModel = mongoose.model("posts", postSchema);    

