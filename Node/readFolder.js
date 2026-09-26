const fs = require('node:fs');
fs.readdir('.',(err,files)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(files);
})