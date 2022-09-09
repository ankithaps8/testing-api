const express = require("express");
const router = express.Router();

const s3_config= require("../controllers/s3");

//router.post("/find",_microchip.update);
router.post('/s3', s3_config.find);

module.exports = router;
