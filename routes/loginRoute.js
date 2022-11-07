const express = require("express");
// internal import
const { getLogin } = require("../controller/loginController");
const router = express.Router();

router.get("/login", getLogin);

module.exports = router;
