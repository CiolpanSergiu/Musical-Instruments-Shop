const User = require("../models/users.cjs");

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
    const user = await User.findOneAndUpdate({ _id: userId }, req.body, {
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

module.exports = { createUser, getUsers, editUser, deleteUser };
