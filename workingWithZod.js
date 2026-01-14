const express = require('express')
const zod = require('zod')
const app = express()
app.use(express.json())
const schema = zod.array(zod.number())
app.get('/fine',(req,res)=>{
    res.send("running");
})
app.post('/',(req,res)=>{
    const kidneys= req.body.kidneys;
    const response = schema.safeParse(kidneys)
    // res.send({response})
    if(!(response.success)){
            res.status(411).json({msg:"not a valid input"})
    }
    res.json({msg:"good work"});

});
app.listen(3000,()=>{
    console.log("working fine")
})