const { json } = require("express");
const encounter = require("./encounter");
const patient = require("./patient");
const plan = require("./planitem");
const status = require("./status");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vaccine = new Schema(
  {
    encounterid: {
        type: Schema.Types.ObjectId,
        ref: encounter.modelName,
        required:true,
        trim: true,
    },
    planitemid: {
        type: Schema.Types.ObjectId,
        ref: plan.modelName,
        trim: true,
    },
    status: {
        type: Schema.Types.ObjectId,
        ref: status.modelName,
        trim: true,
    },
    clinicid: {
        type: Schema.Types.ObjectId,
        ref:"clinic",
        trim: true,
    },
    note: {
        type: Object,
        trim: true,
      },
    vaccine_type: {
        type: String,
        trim: true,
      },
    age_vaccine: {
        type: String,
        trim: true,
      },
    usdalicense: {
        type: String,
        trim: true,
      },
    microchipid: {
        type: String,
        trim: true,
      },
    manufacturer: {
        type: String,
        trim: true,
      },
    
    salesid: {
        type: Schema.Types.ObjectId,
        ref:"sales",
        trim: true,
        
    },
    identification:{
        type:String,
        trim:true,
    },
    rabiesid:{
        type:String,
        trim:true,
    },
    provider_id: {
        type: Schema.Types.ObjectId,
        ref:"staff",
        trim: true,
    },
    performeddate: {
        type: Date,
        trim: true,
        timestamps: true
    },
    expirydate: {
        type: Date,
        trim: true,
        timestamps: true
    },
    reminddate: {
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

module.exports = mongoose.model("vaccine", vaccine);
