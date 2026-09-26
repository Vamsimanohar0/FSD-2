const express = require('express');
const app = express();

app.get("/student",(req,res)=>{
    res.json({
        id:1,
        name:"vamsi",
        age:"18"
    });
})

app.get("/college",(req,res)=>{
    res.json({
        name:"VVITU",
        place:"nambur"
    });
})

app.listen(5002,()=>{
    console.log("Server running");
})