const exp=require('express');
const authorApp=exp.Router();
authorApp.get('/test-author',(req,res)=>{
    res.send({message:"This message is from author api"});
})
module.exports=authorApp;