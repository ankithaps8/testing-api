const express = require("express");
const router = express.Router();

const rxlabel= require("../controllers/rxlabel");

//router.post("/find",_microchip.update);
router.get('/rxlabel', rxlabel.find);

module.exports = router;
