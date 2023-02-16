const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  fullName: {
    type: String,
    require: [true, "Must provide a full name"],
  },
  email: {
    type: String,
    require: [true, "Must provide an email address"],
  },
  password: {
    type: String,
    require: [true, "Must provide a password"],
  },
  passwordConfirmation: {
    type: String,
    require: [true, "Must provide a the same password"],
  },
  phoneNumber: {
    type: String,
    default: "",
  },
  country: {
    type: String,
    default: "unknown",
  },
});

module.exports = mongoose.model("UsersSchema", UsersSchema);
