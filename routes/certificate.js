const express = require("express");
const router = express.Router();

const certificate= require("../controllers/certificate");

//router.post("/find",_microchip.update);
router.post('/vacCertificate', certificate.find);

module.exports = router;
