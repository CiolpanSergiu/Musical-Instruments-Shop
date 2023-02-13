const express = require("express");
const router = express.Router();

const { createUserMsg, getAllUserMsgs } = require("../controllers/userMsg.cjs");

router.route("/").get(getAllUserMsgs).post(createUserMsg);

module.exports = router;
