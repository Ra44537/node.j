// Sychronous or blocking
// - line by line execution

//Asychronous or non-blocking 
// - line by line execution not guaranted
// - callbacks will fire
const fs = require("fs");
 fs.readFile("dele.txt", "utf-8", (err, data) =>{
    console.log( data );
});
console.log("THis is a messege");