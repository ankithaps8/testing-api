const express = require("express");
const router = express.Router();

const refill= require("../controllers/refill");

//router.post("/find",_microchip.update);
router.get('/ref', refill.find);
router.post('/removeref', refill.remove);
module.exports = router;