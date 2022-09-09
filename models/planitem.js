const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const planitem = new Schema(
  {
    // pricingStrategy: {
    //   type: Schema.Types.ObjectId,
    //   ref: Status.modelName,
    // },
    planItemName: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "plancategory",
    },
    subCategory: {
      type: Schema.Types.ObjectId,
      ref: "plansubcategory",
    },
    weightRange: {
      type: Object,
      required: true,
    },
    clinic: [
      {
        _id: false,
        clinicid: { type: Schema.Types.ObjectId, ref: "clinic" },
        active: { type: Boolean, default: true },
      },
    ],
    species: {
      type: Schema.Types.ObjectId,
      ref: "species",
    },
    breed: {
      type: Schema.Types.ObjectId,
      ref: "breed",
    },
    status: {
      type: Schema.Types.ObjectId,
      ref: "status",
    },
  },
  { timestamps: true, strict: false }
);

const PlanitemModel = mongoose.model("planitem", planitem);
module.exports = PlanitemModel;
