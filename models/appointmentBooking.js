const mongoose = require("mongoose");
const User = require("./user");
const Schema = mongoose.Schema;

const appointmentBookingScehma = new Schema(
    {
        name: { String },
        date: { String },
        email: { String },
        age: { Number },
        time: { String },
        gender: { String },
        symptom: { String },
        user_id: {type: mongoose.Schema.Types.ObjectId,
            ref: User}
    },
    { timestamps: true }
);

const AppointmentBooking = mongoose.model("AppointmentBooking", appointmentBookingScehma);
module.exports = AppointmentBooking;