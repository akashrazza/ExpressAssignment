var express = require('express');

var app = express();

app.use(express.json());

//Total salary Body Contains hrs,basic,da,it and pf
app.post('/total_salary',(req,res)=>{
    var hra = req.body.hra;
    var basic = req.body.basic;
    var da = req.body.da;
    var it = req.body.it;
    var pf = req.body.pf;

    res.send({'tota;_salary':basic + hra + da - (it + pf)})
})

//Server Running at 8000 port
app.listen(8000,()=>{
    console.log("Server started")
})
