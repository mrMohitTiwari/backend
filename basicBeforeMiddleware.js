const express  = require('express');
const app = express();
const port  = 3030;
app.get('/health',(req,res)=>{
    // validation 
    const KidneyId = req.params.KidneyId;
    const userName = req.headers.userName;
    const password = req.headers.password;
    console.log(KidneyId," ",userName)
    if(userName!='mohit'|| password!="1234"){
        res.status(403).json({"msg":"Not a Valid user"});
        return;
    }
    if(KidneyId!=1 || KidneyId !=2)
        {
            res.status(411).json({
                "msg":"wrong kidney inputs"
            });
            
        return;
    }
    res.json({"msg":"your kidney are good"})
})

app.listen(port,()=>{
    console.log("running on the port ")
})