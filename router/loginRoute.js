const express = require("express");
const verifyToken = require("../middleware/verifyToken")
const router = express.Router();
const loginControllerCall = require("../controller/loginController");

router.get("/login/:password", loginControllerCall.login);

module.exports = router;
