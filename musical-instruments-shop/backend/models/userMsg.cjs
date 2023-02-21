const mongoose = require("mongoose");

const UserMsgSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Must provide first name"],
  },
  lastName: {
    type: String,
    required: [true, "Must provide last name"],
  },
  email: {
    type: String,
    required: [true, "Must provide an email address "],
  },
  message: {
    type: String,
    required: [true, "Must provide a message"],
  },
  additionalInfo: {
    type: String,
  },
  resolved: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user-msgs-schema", UserMsgSchema);
