const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  emailNumber: {
    type: String,
    required: [true, "Please provide an Email or a number"],
    unique: [true, "Email and or number exist"],
  },
  fullName: {
    type: String,
    required: [true, "Please provide a full name"],
    unique: false,
  },
  userName: {
    type: String,
    required: [true, "Please provide a username"],
    unique: false,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    unique: false,
  },
});

module.exports = mongoose.model("User", UserSchema);
