const s3_config = require("../models/s3_config");
const https = require('https')
const axios = require('axios');
const { response } = require('express');
exports.find = async (req, res) => {
    try {
       const app=req.body.app_name;
       
        let query = await s3_config.find({ app : app});       
        const url=query[0].bucket_name;
        const region=query[0].region;
        const key=req.body.file_path;
            param={
                headers:{
                    method:"post",
                    "Content-Type":"multipart/form-data",
                    "Content-Length": 7437
                },
            }
                data={
                key:key,
                acl:"public-read",
                AWSAccessKeyId:query[0].access_key,
                policy:query[0].policy_document,
                signature:query[0].signature,
                "Content-Type":"",
                file:req.body.file_content
        
            }
            const _res=axios.post("https://s3-"+region+".amazonaws.com/"+url+"/",data,param)
            .then((response) => {
            if (response.data=="")
            {
                const val="http://s3-"+region+".amazonaws.com/"+url+"/"+key
                res.json(val);
            }
            else{
                res.json("0");
            }                 
            }).catch((error)=>{
                console.log(error);
            })
          
        
    } catch (error) {
        res.status(500).json(error);
        console.log("error: ", error);
  
      }
   
  }