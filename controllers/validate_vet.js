const validate_vet = require("../models/validate_vet");
const update_config = require("../models/mrkt_item");
const https = require('https')
const axios = require('axios');
const { response } = require('express');

   
exports.validateVet = async (req, res) => {
    try {
      
        let query = await validate_vet.find({ app_id:req.body.id});
        console.log("hey=>",query)
        if (query.length) {
            validate_vet.find({app_id : req.body.id})
              
            var username = req.body.email;
            var password = req.body.password;
            var basicAuth = 'Basic ' + btoa(username + ':' + password);
   
            params={
              headers:{
                  'Content-Type':"Application/json",
                  Authorization: basicAuth,               
              },                                    
            }
            const _res=axios.get("https://test.petlink.net/us/api/api.spring?action=validateVet&vetEmail="+username,params)
            .then((response) => {
                  
              const val=response.data.replaceAll("=",":").split(/\r?\n/)
              res.json(val);
              console.log(val)
            })
            .catch((e) =>{
              res.json("Validation failed");
              console.log("searchChannels ERROR:", e);
            });

          }        
    } catch (error) {
        res.status(500).json(error);
        console.log("error: ", error);
      }   
}


exports.update = async (req, res) => {
  try {
      let query = await validate_vet.find({ app_id : req.body.id});
      console.log("query: ", query);
      if (!query.length) {
        const Doc = new validate_vet( {
          app_id:req.body.id,
          status:1,
          config:{email:req.body.email,password:req.body.password},
          createdon:Date.now(),
          createdby:req.body.staff,
        });
        const doc = await Doc.save();
        res.json("New Record Created ");
        console.log("New Record Created ");
      } else {
          const data={config:{email:req.body.email,password:req.body.password},
        
            modifiedon:Date.now(),
            modifiedby:req.body.staff
          }
          let doc = await validate_vet.findOneAndUpdate({app_id : req.body.id}, data);
          res.status(200).json("updated");
        }  
  } catch (error) {
      res.status(500).json(error);
      console.log("error: ", error);

    }
 
}