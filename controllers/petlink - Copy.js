const microchip = require("../models/petlink");
const mrkt_cnfg=require("../models/validate_vet");
const client=require("../models/client");
const patient=require("../models/patient");
const petlink_state=require("../models/petlink_state");
const https = require('https')
const axios = require('axios');
const { response } = require('express');
const { ObjectId } = require("mongodb");

   
exports.validateChip = async (req, res) => {

    try {
        //let micro = await microchip.find({ _id: req.body.id});
        const micro = await microchip.findOne({ _id:req.body.id });
        if (micro) {  
         
            client.aggregate([
              {"$match": { "_id": micro.clientid }},
              { "$addFields": { "userId": { "$toString": "$_id" }}},
              { 
                $lookup: {
                "from": "microchip_log",
                "localField": "userId",
                "foreignField": "clientid",
                "as": "output"
              }},

            ])
            .then((response)=>{
              
            let pet_state =petlink_state.find({ state_name:response[0].state},(err,count)=>{
           if(!count.length)
            {
              res.json("statenf");
            
            }else{             
              mrkt_cnfg.find({app_id:req.body.app_id},(err,count)=>{
                
              if (count.length>0){
                 
                var chip= micro.microchipno 
                var username = count[0].config.email;
                var password = count[0].config.password;
                var basicAuth = 'Basic ' + btoa(username + ':' + password);
              
                params={ 
                    headers:{
                    'Content-Type':"application/json" ,
                    Authorization: basicAuth,
               
                    },
                    
                 }
                const _res=axios.get("https://test.petlink.net/us/api/api.spring?action=validateMicrochip&code="+chip,params)
                .then((response) => {
                  const val=response.data.split(/\r?\n/)
                //var buffer = new Buffer(val, 'binary')
                //var jsondata = buffer.toJSON(); 
                res.setHeader('Content-Type', 'application/json');

                //res.send(JSON.stringify({val}));
                var success_msg="negative"
                    
                for (let i=0; i < val.length; i++) 
                {
                  const msg=val[i].split("=");                        
                  if (msg[0]=="status"&&msg[1]=="ok"){
                      success_msg="positive"
                  }
                  else if(msg[0]=="errorMessage"&&msg[1]=="Transponder already registered."){                          
                            
                    const filter={microchipno:count[0].microchipno};
                    let doc = microchip.findOneAndUpdate(filter, {status:45}).exec();
                    success_msg="Microchip already registered."   
                    res.json(success_msg)                         
                            
                  }
                  if (msg[0]=="vendor")
                  {
                    let doc = microchip.findOneAndUpdate(filter, {vendor_name:msg[1]}).exec();  
                  }
                        
                }
                if(success_msg=="positive")
                {
                  client.aggregate([
                    {"$match": { "_id": micro.clientid }},
                    { "$addFields": { "userId": { "$toString": "$_id" }}},
                    { 
                        $lookup: {
                          "from": "microchip_log",
                          "localField": "userId",
                          "foreignField": "clientid",
                          "as": "output"
                        }
                    },
                  ])
                  .then((response) => {
                 
                    data={
                          
                          "owner.email":response[0].email,
                          'owner.password':response[0].password,
                          'owner.firstName':response[0].firstname,
                          'owner.name':response[0].lastname,
                          'owner.address.phonePrimary':response[0].phone,
                          'owner.address.phonePrimaryIsMobile':'true',
                          'owner.address.phoneOffice':response[0].phone,
                          'owner.address.line1':response[0].address1,
                          'owner.address.line2':response[0].address2,
                          'owner.address.postcode':response[0].zipcode,
                          'owner.address.city':response[0].city,
                          'owner.address.state':response[0].state,
                          'owner.address.country':response[0].country,
                          'owner.acceptTerms':'true',
                          'pet.transponder':count[0].microchipno,
                          'pet.name':response[0].name,
                          'pet.gender':response[0].gender,
                          'pet.breedId':response[0].breedid,
                          'pet.primaryColourName':'other',
                          'pet.secondaryColourName':'other'

                    }
                       
                    const _res=axios.post("https://test.petlink.net/us/api/api.spring?action=submit&code="+chip,data,params)
                    .then((resp) => {
                      res.json(resp.data)
                    })
                    .catch((e) =>{
                      console.log("searchChannels ERROR:", e);
                    });
                  })
                  .catch((error) => {
                    console.log(error);
                  });
                    
              }                 
              })
              .catch((e) =>{
                console.log("searchChannels ERROR:", e);
              });
                
              }else{
                res.json("Not Mapped to Petlink")
              }
            }); 
              
          } 
          
        });
         
      })  
      .catch((error)=>{
        console.log(error);
      })
    }
             
  } catch (error) {
    res.status(500).json(error);
    console.log("error: ", error);
        
  }
    
}

