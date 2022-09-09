const express = require("express");
const router = express.Router();

const _validatevet= require("../controllers/validate_vet");

router.post('/validateVet', _validatevet.validateVet);
router.post('/update', _validatevet.update);
module.exports = router;
