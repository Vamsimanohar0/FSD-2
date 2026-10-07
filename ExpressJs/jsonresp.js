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

const user = [
    {
        id:1,
        name:"vamsi"
    },
    {
        id:2,
        name:"siva"
    }
];

app.get("/userInfo",(req,res)=>{
    res.json(user);
})

app.get("/userInfo/:id",(req,res)=>{
    const id = parseInt(req.params.id, 10);
    const foundUser = user.find(u => u.id === id); 
    
    
    if (foundUser) {
        res.json(foundUser); 
    } else {
        res.status(404).json({ error: "User not found" });
    }

})

app.post("/addUser",(req,res)=>{
    const s = req.body;
    user.push(s);
    res.status(201).send("Student added");
    console.log("Student addded");
})

app.listen(5002,()=>{
    console.log("Server running");
})