const express = require("express");

const dashboardController = require("../controller/dashboard");

const router = express.Router();

router.get("/login/:password", dashboardController);

module.exports = router;
