const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    eemailNumber: {
        type: String,
        require: [true, "Please provide an Email or a number"],
        unique: [true, "Email and or number Extist"]
    },
    fullName: {
        type: String,
        require: [true, "Please provide an full name"],
        unique: false,
    },
    userName: {
        type: String,
        require: [true, "Please provide a user name"],
        unique: false,
    },
    password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
    },
})

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);