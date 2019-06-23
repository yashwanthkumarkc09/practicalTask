const express=require('express');
const app=express();
var mongojs=require('mongojs');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var db=mongojs('collections',[])
var bodyParser = require('body-parser')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/fetchUserDetailsGetCall',function(req,res){
    db.userDetailsTask.find(function(err,doc){
      if (err){throw new Error}
      res.json(doc)
    })
})//fetchUserDetailsGetCall


app.get('/fetchUserDetailsOnName:userName',function(req,res){
    db.userDetailsTask.find({name: req.params.userName},function(err,doc){
      if (err){throw new Error}
      console.log(doc)
      res.json(doc)
    })
})//fetchUserDetailsOnName


app.post('/nodetaskUserSave',function(req,res){
  db.userDetailsTask.insert(req.body,function(err,doc){
      if (err){throw new Error}
      res.json(doc)
  })
})//nodetaskUserSave

function createDefaultCollections () {

    db.userDetailsTask.find(function(err,assert){
    if (assert.length == 0) {
    var userDetailsObj =   [
    {
     
    "name" : "Admin",
    "email" : "admin@gmail.com",
    "mobileNumber" : 9999588885,
    "city" : "Bengaluru",
    "state" : "Karnataka"
    }
    
    ]
    userDetailsObj.forEach(element => {
    db.userDetailsTask.insert(element)
    });

    }else{
    console.log("No Need To Add")
    }

    })
}
createDefaultCollections();


//exception catching//
process.on('uncaughtException', function(e) {
  console.log('An error has occured. error is: %s and stack trace is: %s', e, e.stack);
  console.log("Process will restart now.");
  process.exit(1);
})

const port=8099;
app.listen(port,function() {
console.log("server running on port"+ port);
});
