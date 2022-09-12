const { json } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patient = new Schema(
  {
    name: {
        type: String,
        trim: true,
    },
    
    clinicid: {
        type: Schema.Types.ObjectId,
        ref:"clinic",
        trim: true,
    },
    clientid: {
        type: Schema.Types.ObjectId,
        ref:"client",
        trim: true,
      },
    dob: {
        type: Date,
        timestamps: true,
        trim: true,
    },
    dayofyear: {
        type: String,
        trim: true,
    },
    speciesid: {
        type: Schema.Types.ObjectId,
        ref:"consult_species",
        trim: true,
    },
    breedid: {
        type: Schema.Types.ObjectId,
        ref:"breed",
        trim: true,
      
    },
    colorid: {
        type: Schema.Types.ObjectId,
        ref:"color",
        trim: true,
        
    },
    sexid: {
        type: Schema.Types.ObjectId,
        ref:"sex",
        trim: true,
      
  },
    status: {
        type: String,
        trim: true,
        
    },
    currentweight: {
        type: Schema.Types.ObjectId,
        ref:"weight",
        trim: true,
        
    },
    defaultprovider: {
        type: Schema.Types.ObjectId,
        ref:"staff",
        trim: true,
        
    },
    headimage: {
        type: String,
        trim: true,
        
    },
    rightimage: {
        type: String,
        trim: true,
        
    },
    kg: {
        type: String,
        trim: true,
        
    },
    p_taxable: {
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

module.exports = mongoose.model("patient", patient);
