var express = require("express");
var app = express();

var mongojs = require("mongojs");
var body_parser = require("body-parser");
var config = require('config');

var collectionName = config.get('Myapp.dbConfig.collectionName');
var dbName = config.get('Myapp.dbConfig.dbName');
var dbURL = config.get('Myapp.dbConfig.dbURL');

var db = mongojs(dbURL + dbName,collectionName);

app.use(express.static(__dirname +"/public"));
app.use(body_parser.json());

app.get("/contactlist",function(req,res){
    console.log("Recieved get request");

    db.contactlist.find(function(err,docs){
       // console.log(docs);
        res.json(docs);
    });
});

app.post("/contactlist",function(req,res){
    //console.log(req.body);
   db.contactlist.insert(req.body,function(err,docs){
       //console.log(docs);
        res.json(docs);
    });
});

app.delete("/contactlist/:id",function(req,res){
    var id = req.params.id;
    //console.log(id);

    db.contactlist.remove({_id: mongojs.ObjectID(id)},function(err,docs){
       console.log(docs);
        res.json(docs);
    });
});

app.get("/contactlist/:id",function(req,res){
    var id = req.params.id;
    //console.log(id);

    db.contactlist.findOne({_id: mongojs.ObjectID(id)},function(err,docs){
       //console.log(docs);
        res.json(docs);
    });
});

app.put("/contactlist/:id",function(req,res){
    var id = req.params.id;
   // console.log(req.body.name);
    
    db.contactlist.findAndModify({query: {_id: mongojs.ObjectID(id)},
    update: {$set:{name:req.body.name,email:req.body.email,number:req.body.number}},new:true},function(err,docs){
            res.json(docs);
    });
 
});
app.listen(8000);
console.log("server running on port 8000");