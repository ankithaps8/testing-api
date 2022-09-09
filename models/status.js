const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const status = new Schema(
  {
    status: {
        type: String,
        trim: true,
    },
},
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("status", status);
