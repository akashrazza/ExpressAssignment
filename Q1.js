var express = require('express');

var app = express();
app.use(express.json());

//For Login Using username and password in body
app.post('/login',(req,res)=>{
    var uid = req.body.username;
    var pass = req.body.password;
    strResponse = "Invalid User";
    if(uid=='raja' && pass=='admin'){
        strResponse = "Valid User";
    }
    res.send(strResponse);
});

//Server Running at 8000 port
app.listen(8000,()=>{
    console.log("Server Started on http://localhost:8000");
});
