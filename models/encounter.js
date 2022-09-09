const mongoose = require("mongoose");
const patient = require("./patient");
const status = require("./status");
const Schema = mongoose.Schema;

const encounter = new Schema(
  {
    encounterName: {
      type: String,
      required: true,
      trim: true,
    },
    patientid:{
        type: Schema.Types.ObjectId,
        ref: patient.modelName,
        trim: true
    },
    des: {
      type: String,
      required: true,
      trim: true,
    },

    provider: {
      type: Schema.Types.ObjectId,
      ref:"staff",
    },
    status: {
      type: Schema.Types.ObjectId,
      ref: status.modelName,
    },
  },
  {
    timestamps: true,
  }
);

const EncounterModel = mongoose.model("encounter", encounter);
module.exports = EncounterModel;
