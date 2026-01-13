const express = require("express")
const app = express()
app.use(express.json()) //I forgot to use paranthesis at the end 
// now it will parse every data into json format so that we do not have to worry about what is the type of data is client sending via POST request body
// Also using app.use it will pass as a middleware to every route we do not need to mention it 
//If we do not use this middleware body will not extracted from the middleware
app.get('/',(req,res)=>{
res.json({msg:"working Fine "});
});
app.listen(3030,console.log("running on the desired port"))