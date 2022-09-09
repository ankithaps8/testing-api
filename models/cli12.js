const { json } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const client = new Schema(
  {
    firstname: {
      type: String,
      trim: true,
    },
    lastname: {
      type: String,
      trim: true,
    },
    clinicid: {
      type: Schema.Types.ObjectId,
      ref:"clinic",
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    country: {
      type: String,
      trim: true,
    },
    state: {
      type: String,
      trim: true,
    },
    city: {
      type: String,
      trim: true,
    },
    zipcode: {
      type: String,
      trim: true,
      
    },
    address1: {
        type: String,
        trim: true,
        
    },
    address2: {
      type: String,
      trim: true,
      
  },
    status: {
        type: String,
        trim: true,
        
    },
    phone: {
        type: String,
        trim: true,
        
    },
    phonetype: {
        type: String,
        trim: true,
        
    },
    smsdecline: {
        type: String,
        trim: true,
        
    },
    isreminders: {
        type: String,
        trim: true,
        
    },
    isstatements: {
        type: String,
        trim: true,
        
    },
    ismarketing: {
        type: String,
        trim: true,
        
    },
    dob: {
        type: Date,
        timestamps: true,
        trim: true,
        
    },
    allow_interest: {
        type: String,
        trim: true,
        
    },
    is_discount: {
        type: String,
        trim: true,
        
    },
    refferedby: {
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

module.exports = mongoose.model("client", client);
