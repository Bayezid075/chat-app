const express = require("express");

// internal import
const { getUser } = require("../controller/userController");
const avatarUpload = require("../middleware/users/avatar");
const router = express.Router();

router.get("/users", getUser);
//avatar upload
router.post("/avatar", avatarUpload);
module.exports = router;
