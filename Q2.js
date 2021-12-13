//Employee Array
var employee_data = [
    {
        Id:1,
        name:'Raja', 
        dept:"Full Stack", 
        designation:"Trainee"
    },
    {
        Id:2,
        name:'Gyan', 
        dept:"Full Stack", 
        designation:"Trainee"
    },
    {
        Id:3,
        name:'Prakash', 
        dept:"Full Stack", 
        designation:"Trainee"
    },
    {
        Id:4,
        name:'Tarun', 
        dept:"Full Stack", 
        designation:"Trainee"
    },
]

var express = require('express');

var app  = express();

app.use(express.json());

//Get All Employee GET Method
app.get('/getAllEmployeeData',(req,res)=>{
    res.send(employee_data);
});

//Server running at 8000 port
app.listen(8000,()=>{
    console.log("Server Started on http://localhost:8000");
});
