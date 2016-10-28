//Import event module
var events = require("events");

//Create event emitter object
var eventEmitter = new events.EventEmitter();

//Create event handler
var handler = function connected(){
    console.log("Calling event");
}

// bind event with handler
eventEmitter.on("connection",handler);


//Firing event
eventEmitter.emit("connection");