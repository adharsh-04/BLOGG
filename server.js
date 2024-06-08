const exp=require('express')
const app=exp();
require('dotenv').config();
const port=process.env.PORT;
//assigning port number
app.listen(port,()=>console.log(`server is running on port ${port}`));

