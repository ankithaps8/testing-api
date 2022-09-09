const express = require("express");
const router = express.Router();

const _validateowner= require("../controllers/validate_owner");

router.post('/validateOwner', _validateowner.find);
module.exports = router;
