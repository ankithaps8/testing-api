const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const s3_config = new Schema(
  {
    bucket_name: {
      type: String,
      trim: true,
    },
    access_key: {
      type: String,
      trim: true,
    },
    secret_key: {
        type: String,
        trim: true,
    },
    policy_document: {
      type: String,
      trim: true,
    },
    signature: {
      type: String,
      trim: true,
    },
    app: {
      type: String,
      trim: true,
    },
    region: {
      type: String,
      trim: true,
    },
},
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("s3_config", s3_config);
