const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const microchip_log = new Schema(
  {
    salesid: {
      type: Schema.Types.ObjectId,
      ref:"sales",
      required:true,
      trim: true,
    },
    clientid: {
      type: Schema.Types.ObjectId,
      ref:"client",
      trim: true,
    },
    type: {
      type: String,
      trim: true,
    },
    vendor_name: {
      type: String,
      trim: true,
    },

    microchipno: {
      type: String,
      trim: true,
    },
    clinicid: {
      type: Schema.Types.ObjectId,
      ref:"clinic",
      trim: true,
    },
    status: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("microchip_log", microchip_log);
