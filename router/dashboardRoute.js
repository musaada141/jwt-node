const express = require("express");
const verifyToken = require("../middleware/verifyToken")
const dashboardController = require("../controller/dashboard");

const router = express.Router();

router.get("/", verifyToken, dashboardController);

module.exports = router;
