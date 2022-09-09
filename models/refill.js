const { Double } = require("mongodb");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const refill = new Schema(
  {
    encounterid: {
        type: Schema.Types.ObjectId,
        ref:"encounter",
        required:true,
        trim: true,
    },
    patientid: {
        type: Schema.Types.ObjectId,
        ref:"patient",
        trim: true,
    },
    modifiedby: {
        type: Schema.Types.ObjectId,
        ref:"staff",
        trim: true,
    },
   
    planitemid: {
        type: Schema.Types.ObjectId,
        ref:"planitem",
        trim: true,
    },

    refill: {
      type: Number,
      trim: true,
    },

    modifiedon:{
        type: Date,
        trim: true,
        timestamps: true,
    }
},

  { timestamps: true, strict: false }
);

module.exports = mongoose.model("refill", refill);
