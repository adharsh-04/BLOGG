const exp=require('express')
const app=exp();
require('dotenv').config();
const port=process.env.PORT;
//import the APIs into server.js
const userApp=require('../backend/APIs/userApi.js');
const authorApp=require('../backend/APIs/authorApi.js');
//to parse the body of JSON files or requests
app.use(exp.json());
//if the Request starts with userapi then direct to userApp
app.use('/userapi',userApp);
//if the Request starts with authorapi then direct to authorApp
app.use('/authorapi',authorApp);
//to handle errors
app.use((req,res,next,err)=>{
    res.send({message:"error" ,payload:err});
})
//assigning port number
app.listen(port,()=>console.log(`server is running on port ${port}`));

