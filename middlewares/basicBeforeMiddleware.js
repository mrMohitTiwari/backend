const express = require('express');
const app = express();
const port = 3030;
app.get('/health', (req, res) => {
    // validation 
    const KidneyId = req.query.KidneyId;
        const userName = req.headers.username;
    const password = req.headers.password;
    console.log(userName)

    if (userName != 'mohit' || password != "feel") {
       return res.status(403).json({ msg: "Not a Valid user" });
       
    }
    if (KidneyId != 1 && KidneyId != 2) {
        res.status(411).json({
            msg: "wrong kidney inputs"
        });
        res.send('yes')

        return;
    }
    res.json({ msg: "your kidney are good" })
})

app.listen(port, () => {
    console.log("running on the port ")
})