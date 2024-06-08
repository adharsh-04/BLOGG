const exp=require('express');
//importing miniExpress
const userApp=exp.Router();
//testing the route
userApp.get('/test-user',(req,res)=>{
    res.send({message:"This message is from user api"});
})
//exporting the userApp
module.exports=userApp;