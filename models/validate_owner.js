const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mrkt_config = new Schema(
  {
    app_id: {
      type: String,
      trim: true,
    },

  },
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("mrkt_config", mrkt_config);
