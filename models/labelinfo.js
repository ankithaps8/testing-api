const { Double } = require("mongodb");
const mongoose = require("mongoose");
const encounter = require("./encounter");
const patient = require("./patient");
const plan = require("./planitem");
const status = require("./status");
const Schema = mongoose.Schema;

const rxlabel = new Schema(
  {
    encounterid: {
        type: Schema.Types.ObjectId,
        ref: encounter.modelName,
        required:true,
        trim: true,
    },
    patientid: {
        type: Schema.Types.ObjectId,
        ref: patient.modelName,
        trim: true,
    },
    providerid: {
        type: Schema.Types.ObjectId,
        ref:"staff",
        trim: true,
    },
    clinicid: {
        type: Schema.Types.ObjectId,
        ref:"clinic",
        trim: true,
    },
    planitemid: {
        type: Schema.Types.ObjectId,
        ref: plan.modelName,
        trim: true,
    },
    refill: {
      type: Number,
      trim: true,
    },
    prescription: {
      type: String,
      trim: true,
    },
    status: {
        type: Schema.Types.ObjectId,
        ref: status.modelName,
        trim: true,
    },
    salesid: {
        type: Schema.Types.ObjectId,
        ref:"sales",
        trim: true,
    },
    performedon:{
        type: Date,
        trim: true,
        timestamps: true,
    }

},
  { timestamps: true, strict: false }
);

module.exports = mongoose.model("labelinfo", rxlabel);
