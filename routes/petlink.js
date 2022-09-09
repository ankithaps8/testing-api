const express = require("express");
const router = express.Router();

const _microchip= require("../controllers/petlink");

//router.post("/find",_microchip.update);
router.post('/petlink', _microchip.validateChip);

module.exports = router;
