const fs = require('node:fs');
fs.mkdir('data',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("folder created .......");
})