const exp=require('express');
const authorApp=exp.Router();
const expressAsyncHandler=require('express-async-handler')
//get authorsCollection from server.js
authorApp.use((req,res,next)=>{
    authorsCollection=req.app.get('authorsCollection');
    articlesCollection=req.app.get('articlesCollection');
    next();
})
//import bcrypts
const bcryptjs=require('bcryptjs');
//import jsonwebtoken
const jwt=require('jsonwebtoken');

//request handler for author Registration
authorApp.post('/author',expressAsyncHandler(async(req,res)=>{
    const newUser=req.body;
    //comparing it with username
    const dbUser=await authorsCollection.findOne({username:newUser.username});
    if(dbUser!=null){
     res.send({message:"Author already registered"});
    }
    else{
     //hash the password
     const hashedPassword=await bcryptjs.hash(newUser.password,6);
     newUser.password=hashedPassword;
     //add it to the collection
     await authorsCollection.insertOne(newUser);
     res.send({message:"author registered"});
 
    }
 }))
require('dotenv').config();
//request handler for author Login
authorApp.post('/login',expressAsyncHandler(async(req,res)=>{
    //Get the user credentials
    const userCred=req.body;
    //compare or find user with the username
    const dbUser=await authorsCollection.findOne({username:userCred.username});
   
    //if dbuser is null
    if(dbUser===null){
        res.send({message:"user does not exist"})
    }
    else{
        //compare the hashed password
        const status=await bcryptjs.compare(userCred.password,dbUser.password);
        if(status===false){
            res.send({message:"Incorrect password"});
        }
        else{
            //create json web token
            const signedToken=jwt.sign({username:dbUser.username},process.env.SECRET_KEY,{expiresIn:20});
            //send the response
            res.send({message:"login success",token:signedToken,user:dbUser});

        }
    }
}))

//adding new article by author
authorApp.post('/article',expressAsyncHandler(async(req,res)=>{
    //get new article
    
    const newArticle=req.body;
    //posting to articles collection
    await articlesCollection.insertOne(newArticle);
    //send response
    res.send({message:"New article created"});

    
}))

//request handler for updating an article by author
authorApp.put('/article',expressAsyncHandler(async(req,res)=>{
    //get body from request 
    const modifiedArticle=req.body;
    //update article by articleid
    await articlesCollection.updateOne({articleId:modifiedArticle.articleId},{$set:modifiedArticle});
    res.send({message:"Article is modified"});
}))


//soft deleting an article by author
authorApp.put('/article/:articleId',expressAsyncHandler(async(req,res)=>{
    //get article id
    const articleFromUrl=req.params.articleId;
    //get article body
    const articleToDelete=req.body;
    //updating article by changing its status to false
    await articlesCollection.updateOne({articleId:articleFromUrl},{$set:{...articleToDelete,status:false}})
    res.send({message:"Article is removed"})
}))


module.exports=authorApp;