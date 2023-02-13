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
});

module.exports = mongoose.model("Schema", UserMsgSchema);
