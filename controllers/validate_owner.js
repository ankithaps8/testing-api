const validate_owner = require("../models/validate_vet");
const https = require('https')
const axios = require('axios');
const { response } = require('express');

   
exports.find = async (req, res) => {
    try {

        let query = await validate_owner.find({ app_id: req.body.id });
        console.log("query: ", query);
        if (query.length) {
            const { id } = req.body;
            validate_owner.find({app_id: req.body.id }, 'config -_id',(err,config) => {
              
                var chip= config[0].microchipno 
                var username = config[0].config.email;
                var password = config[0].config.password;
                var basicAuth = 'Basic ' + btoa(username + ':' + password);
                //var email='test@test.com'
        
                params={
                    headers:{
                    "Content-Type":"Application/json",
                    Authorization: basicAuth,               
                    },
                    
                
                }

                const _res= axios.get("https://test.petlink.net/us/api/api.spring?action=validateOwner&email="+username,params)
                .then((response) => {
                const val=response.data.replaceAll("=",":").split(/\r?\n/)
                console.log(val)
                res.json((val));
                })
                .catch((e) =>{
                console.log("searchChannels ERROR:", e);
                });

            });
        }
    
      
    } catch (error) {
        res.status(500).json(error);
        console.log("error: ", error);

      }
   
}