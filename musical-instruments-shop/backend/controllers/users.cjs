const User = require("../models/users.cjs");
const bcrypt = require("bcryptjs");

const createUser = async (req, res) => {
  try {
    // if there already is someone with the email we receive
    // dont create another one
    const existentUser = await User.findOne({ email: req.body.email });
    if (!existentUser) {
      const user = await User.create(req.body);
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const editUser = async (req, res) => {
  try {
    const { id: userId } = req.params;

    if (req.body.toEdit === "password") {
      const password = req.body.user.password;
      const salt = await bcrypt.genSalt(10);
      req.body.user.password = await bcrypt.hash(password, salt);
    }

    const user = await User.findOneAndUpdate({ _id: userId }, req.body.user, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).json({ msg: `No user with ${userId} found` });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id: userId } = req.params;

    const user = await User.findOneAndDelete({ _id: userId });

    if (!user) {
      return res.status(404).json({ msg: `No user with ${userId} found` });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPasswords(password))) {
    res.status(200).json({ msg: "User recognised.", user });
  } else {
    res.status(401).json({ msg: "User not recognised. Invalid credentials" });
  }
};

module.exports = { createUser, getUsers, editUser, deleteUser, loginUser };
