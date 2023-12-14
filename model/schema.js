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
    spotifyId: { type: String },
},
{ collection: "users" });

export const userModel = mongoose.model("users", userSchema);

const postSchema = new mongoose.Schema({
    creator: { type: String, required: true },
    spotifySongId: { type: String, required: true },
    // likes is an array of user ids
    likes: { type: [String], required: true },
    // dislikes is an array of user ids
    dislikes: { type: [String], required: true },
    createdAt: { type: Date, required: true },
    spotifyArtistIds: { type: [String], required: true },
},
{ collection: "posts" });

export const postModel = mongoose.model("posts", postSchema);

const groupSchema = new mongoose.Schema({
    artistId: { type: String, required: true, unique: true },
    members: { type: [String], required: true },
    comments: { type: [Object], required: true },
},
{ collection: "groups" });

export const groupModel = mongoose.model("groups", groupSchema);

