const express = require('express')
const app = express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("working fine")
}
)
app.post('/',(req,res)=>{
    //kidney [ 1,2,2]
    const kidneys = req.body.kidneys
    const kidneyLength  = kidneys.length
    res.send(`kidney length is ${kidneyLength}`)

})
// global middleware
// it will also have four arguments
app.use(function(err,req,res,next){
res.json({msg:"sorry something is up with our server"})
})
// if there will be any exception there this function will get called at the end 
app.listen(4004,()=>console.log("running on the port 4004"))