const UserMsg = require("../models/userMsg.cjs");

const createUserMsg = async (req, res) => {
  try {
    const userMsg = await UserMsg.create(req.body);
    res.status(200).json(userMsg);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getAllUserMsgs = async (req, res) => {
  try {
    const userMsgs = await UserMsg.find({});
    res.status(200).json(userMsgs);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { createUserMsg, getAllUserMsgs };
