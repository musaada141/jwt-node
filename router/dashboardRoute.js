const express = require("express");

const dashboardController = require("../controller/dashboard");

const router = express.Router();

router.route("/").get(dashboardController);
