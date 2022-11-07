const express = require("express");
// internal import
const { getInbox } = require("../controller/inboxController");
const router = express.Router();

router.get("/inbox", getInbox);

module.exports = router;
