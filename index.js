var express = require('express');    
var app = express(); 
var url = require('url'); 
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://db_usr:Pass123@ds023052.mlab.com:23052/shoes_db')
var conn = mongoose.connection;
var schema = require('./schema.js');

conn.on('error', function (err) {
    console.log('connection error' + err);
});

conn.once('open', function() {
    console.log('connected.');
})

app.get('/', function(req, res){
	res.sendFile(`${__dirname}/index.html`);
});

app.get('/getAllShoes', function(req, res){
	  schema.find({}, function(err, buf){
        if (err) throw err;
        res.json(buf);
    });
});


app.get('/getShoesBySize', function(req, res){
    var urlParse = url.parse(req.url , true); 
    var query = urlParse.query;
    schema.find({size: query.size}, function(err, buf){
        if (err) throw err;
        if (buf.length === 0) 
            res.json({"there is no data match for this size": query.size});
        else res.json(buf);
    });
});


app.get('/getShoesBySerial', function(req, res){
    var urlParse = url.parse(req.url , true); 
    var query = urlParse.query;
    schema.find({serial: query.serial}, function(err, buf){
        if (err) throw err;
        if (buf.length === 0) 
            res.json({"there is no data match for this serial" : query.serial});
        else res.json(buf);
    });
});


app.listen(port);
console.log('web service is running on port '+ port );