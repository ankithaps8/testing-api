const { json } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mrkt_item = new Schema(
  {
    id: {
      type: String,
      trim: true,
    },
    name: {
      type: String,
      trim: true,
    },
    logo: {
        type: String,
        trim: true,
    },
    short_desc: {
      type: String,
      trim: true,
    },
    version: {
      type: String,
      trim: true,
    },
    price_type: {
      type: String,
      trim: true,
    },
    price: {
      type: String,
      trim: true,
    },
    weblink: {
      type: String,
      trim: true,
      
    },
    author: {
        type: String,
        trim: true,
        
    },
    status: {
        type: String,
        trim: true,
        
    },
    description: {
        type: String,
        trim: true,
        
    },
    installation: {
        type: String,
        trim: true,
        
    },
    createdby: {
        type: String,
        trim: true,
    },
    createdon: {
        type: Date,
        trim: true,
        timestamps: true
    },
    modifiedby: {
        type: String,
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

module.exports = mongoose.model("mrkt_items", mrkt_item);
