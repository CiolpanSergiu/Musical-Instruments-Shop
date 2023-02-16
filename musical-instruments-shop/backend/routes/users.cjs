const express = require("express");
const router = express.Router();

const {
  createUser,
  getUsers,
  editUser,
  deleteUser,
} = require("../controllers/users.cjs");

router.route("/").get(getUsers).post(createUser);
router.route("/:id").patch(editUser).delete(deleteUser);

module.exports = router;
