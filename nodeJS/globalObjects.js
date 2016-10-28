//Displays filename with complete path
console.log(__filename);

//Displays directory where file is present
console.log( __dirname );


function printHello(){
   console.log( "Hello, World!");
}

//printHello function will execute after 2sec
setTimeout(printHello, 2000);

var t = setTimeout(printHello, 5000);

// clear the timer and printHello function will not be called
clearTimeout(t);


function printHi(){
   console.log( "Hi, World!");
}

setInterval(printHi, 2000);