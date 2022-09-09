/*
const https = require('https')

const axios = require('axios')
// use a timeout value of 10 seconds
//_url = 'https://test.petlink.net/us/api/api.spring?action=validateOwner'; // input your url here


params={
    
    headers:{
    'Content-Type':  'text/plain',
    Authorization: 'Basic c2FsZXNAdmV0cG9ydC5jb206dGVzdGluZw==',
    
    },
    
}
const callExternalApi=(callback) =>{
const _res=axios.get("https://test.petlink.net/us/api/api.spring?action=validateOwner&email=test@test.com",params)
.then((response) => {

response.on('data',(chunk) => {
        data=chunk;
    });
    response.on('end',() =>{
        return callback(data);
    });
    response.on('error',(err)=>{
   console.log("Error:"+err.message); 
});

});
}
    module.exports.callApi=callExternalApi;
   
//const { response } = require("express");
//const express=require("express");

//const http=require('http');
const express=require("express");
const router=express();
var fs = require('fs');
function test(){
var post_options = {
    host: 'http://test.petlink.net',
    port: '8088',
    path: '/us/api/api.spring',
    action:"validateOwner",
    email:"mtest@test.com",
    method: 'POST',
    headers: {
        'Content-Type': 'text/html',
    }
};
var post_data=router.request(post_options, function(res) {
   
});
res.end('thanks')
// post the data
post_req.write(post_data);
post_req.end();
}

router.get('/us/api/api.spring',(req,res) =>{
    console.log("hi",res.params)
   

    try{
        res
        .status(200)
        console.log(res.body)

    }catch(error){
        console.log(error);
    res.status(400).send(error.message);
    }

}
*/
