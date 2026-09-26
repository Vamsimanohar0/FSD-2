const express = require('express');
const app = express();

app.get("/about",(req,res)=>{
    res.send("This is about page");
})

app.get("/contact",(req,res)=>{
    res.send("This is contact page");
})

app.get("/",(req,res)=>{
    res.send("Home Page");
})

app.listen(5001,()=>{
    console.log("Server running");
})