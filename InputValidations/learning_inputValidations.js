const express = require('express')
const app = express()
app.use(express.json())
app.post('health-checkup',(req,res)=>{
    //kidney [ 1,2,2]
    const kidneys = req.body.kidneys
    const kidneyLength  = kidneyLength
    res.send(`kidney length is ${kidneyLength}`)

})
app.listen(3030,()=>console.log("running on the port 3030"))