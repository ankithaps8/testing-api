const refil = require("../models/refill");
const objectId = require("mongoose").Types.ObjectId;
const { response } = require('express');
const prettyJs = require('pretty-js');
exports.find = async (req, res) => {
    try {
       const pet=req.body.patientid;
       const doc = await refil.aggregate([
        {"$match": {patientid:objectId(pet),refill:{$gt:0}}},
        { 
            $lookup: {
                from: "encounters",
                localField: "encounterid",
                foreignField:"_id",
                as: "encounter",
            }
        },
        {
            $lookup: {
                from: "planitems",
                localField:"planitemid",
                foreignField:"_id",
                as: "plan",
            }
        },
        {
            $project: {
                _id:1,
                modifiedon:1,
                refill:1,
                encounterName:"$encounter.encounterName",
                planitem:"$plan.title"
            }
        }

    ])
       res.json(doc)
    } catch (error) {
        res.status(500).json(error);
        console.log("error: ", error);
  
      }
   
  };
  
// remove refill data
exports.remove = async (req, res) => {
    try {
      const body = req.body;
      const data = await refil.remove(body);
      res.json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  };