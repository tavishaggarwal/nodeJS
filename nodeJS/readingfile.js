var fs = require("fs");

fs.readFile('inputfile.txt',function(error,data){
    if(error){
        return console.log(error);
    }
    console.log(data.toString());
})

console.log("executing asynchronous calls");