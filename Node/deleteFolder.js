const fs = require('node:fs');
fs.rmdir('data',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("folder removed .......");
})


//reccursive removing of folder
// const fs = require('node:fs');
// fs.rmdir('data',{reccursive:true},(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("folder removed .......");
// })