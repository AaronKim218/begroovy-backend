import app from "./app.js";
import mongoose from "mongoose";

const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"
console.log(DB_CONNECTION_STRING)
mongoose.connect(DB_CONNECTION_STRING);

const PORT = 3000

app.listen(PORT, () => console.log(`Local server is listening on port ${PORT}`));