const { json } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petlink_state = new Schema(
  {
    state_name: {
      type: String,
      trim: true,
    },
    state_code: {
      type: String,
      trim: true,
    },
    state_id: {
      type: Schema.Types.ObjectId,
      ref:"state",
      trim: true,
    },
    
  },
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("petlink_state", petlink_state);
