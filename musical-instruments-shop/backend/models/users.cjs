const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
  phoneNumber: {
    type: String,
    default: "",
  },
  country: {
    type: String,
    default: "unknown",
  },
  shoppingCart: {
    type: Array,
    default: [],
  },
  ordersHistory: {
    type: Array,
    default: [],
  },
});

UsersSchema.methods.matchPasswords = async function (loginPass) {
  return await bcrypt.compare(loginPass, this.password);
};

UsersSchema.pre("save", async function (next) {
  try {
    if (!this.isModified) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    console.log(error);
  }
});

module.exports = mongoose.model("users-schema", UsersSchema);
