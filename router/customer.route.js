const express = require("express");
const jsonObj = require("../controller/customer-controller");
const router = express.Router();

router.get("/jsonfile", jsonObj.objData);

module.exports = router;
