const exp=require('express');
//importing miniExpress
const userApp=exp.Router();
//testing the route
userApp.get('/test-user',(req,res)=>{
    res.send({message:"This message is from user api"});
})
//import bcryptjs
const bcryptjs=require('bcryptjs');

//get usersCollection from server.js to add the data
userApp.use((req,res,next)=>{
    usersCollection=req.app.get('usersCollection');
    next();
})

//request handler for userRegistration route
userApp.post('/user',async(req,res)=>{
    //Get the body 
    const newUser=req.body;
    //check for duplicate user with same username
    const dbUser=await usersCollection.findOne({username:newUser.username});
    //if their is a user with same username
    if(dbUser!=null){
        res.send({message:"user already existed"});
    }
    else{
        //hash the password
        const hashedPassword=await bcryptjs.hash(newUser.password,7);
        //change the password to hashed password
        newUser.password=hashedPassword;
        //Insert the data to usersCollection
        await usersCollection.insertOne(newUser);
        //send the response
        res.send({message:"user created"});
    }
})

//exporting the userApp
module.exports=userApp;