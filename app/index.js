var express = require('express');
var module = require('darknet-dispatches-internal');

var app = express();

app.get('/', function(req, res){
    res.send("Hello world");
})

app.get('/package.json', function(req, res){
    const packageJson = require('./package.json');
    res.json({package: packageJson});
})

app.listen(3000, function(){
    console.log("Example app listenting on port 3000");
    
})
