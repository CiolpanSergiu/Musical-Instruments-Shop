const express = require("express");
const router = express.Router();

const { loginUser } = require("../controllers/users.cjs");

router.route("/").post(loginUser);

module.exports = router;
