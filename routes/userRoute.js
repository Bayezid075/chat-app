const express = require("express");
// internal import
const { getUser } = require("../controller/userController");
const router = express.Router();

router.get("/users", getUser);

module.exports = router;
