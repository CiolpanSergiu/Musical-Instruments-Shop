const User = require("../models/users.cjs");
const { use } = require("../routes/userMsg.cjs");

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { createUser };
