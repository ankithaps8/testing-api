const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mrkt_config = new Schema(
  {
   
    app_id: {
      type: Schema.Types.ObjectId,
      ref:"mrkt_items",
      required:true,
      trim: true,
    },
    config: {
      email:{type: String,trim: true,},
      password:{type: String,trim: true,}
    },
    status: {
      type: String,
      trim: true,
    },
    createdby: {
      type: Schema.Types.ObjectId,
      ref:"staff",
      trim: true,
    },
    createdon: {
      type: Date,
      trim: true,
      timestamps: true
    },
    modifiedby: {
      type: Schema.Types.ObjectId,
      ref:"staff",
      trim: true,
    },
    modifiedon: {
      type: Date,
      trim: true,
      timestamps: true
    },

  },
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("mrkt_config", mrkt_config);
