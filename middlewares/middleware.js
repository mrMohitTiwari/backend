const express = require('express')
const app = express()
const port =4040;
let reqCount =0;
function countRequestMiddleware(req,res,next){
            reqCount++;
            console.log(reqCount)
            
            next();
}
app.get("/",countRequestMiddleware,(req,res)=>{
        res.json({
            mes:"asss",
        });
});
app.listen(port,()=>{
    console.log("running")
})