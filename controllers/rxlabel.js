const labelinfo = require("../models/labelinfo");
const encounter = require("../models/encounter");
const objectId = require("mongoose").Types.ObjectId;
const { response } = require('express');
exports.find = async (req, res) => {
    try {
       const pet=req.body.patientid;
       const status=req.body.status;
        const doc=await  labelinfo.aggregate([
            {"$match": {patientid: objectId(pet),status:objectId(status)}},
      
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
                    performedon:1,

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
   
  }