import app from "./app.js";
import mongoose from "mongoose";

const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/begroovy"
console.log(DB_CONNECTION_STRING)
mongoose.connect(DB_CONNECTION_STRING);

app.listen(process.env.PORT || 4000);