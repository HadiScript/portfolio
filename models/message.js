const mongoose = require("mongoose");

const messagesSchema = new mongoose.Schema(

    {
        name: { type: String, required: true },
        email: { type: String, required: true, },
        subject: { type: String, required: true },
        msg: { type: String },
    },


    { timestamps: true }
);

module.exports = mongoose.model("message", messagesSchema);
