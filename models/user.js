const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userScehma = new Schema(
    {
        name: { type: String },
        email: { type: String },
        phone: { type: Number },
        password: { type: String },
        role: { type: String, enum: ["Patient", "Doctor"], default: "Patient" }
    },
    { timestamps: true }
);

const User = mongoose.model("User", userScehma);
module.exports = User;