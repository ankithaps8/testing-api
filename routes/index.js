const express = require("express");
const router = express.Router();

router.use("/vet",require("./validate_vet"));
router.use("/owner",require("./validate_owner"));
router.use("/microchip_log",require("./petlink"));
router.use("/s3_config",require("./s3_config"));
router.use("/rx",require("./rxlabel"));
router.use("/refill",require("./refill"));
router.use("/certificate",require("./certificate"));

router.get("/", async (req, res) => {

  try {
    res
      .status(200)
      .send(
        `Server running on environment ${environment} and api version is V1`
      );
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
    
  }
});

module.exports = router;
