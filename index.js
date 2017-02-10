var tools = require('sfdc-verify-tools');

var express = require('express');
var bodyParser = require('body-parser');
var db = tools.db;
var expr = express();
expr.use(bodyParser.json());

expr.use(express.static('public', {extensions: ['html'], index: "index.html"}));

var envPort = process.env.PORT ? process.env.PORT : 4000;

var ports = [envPort];
for(var i in ports){
  expr.listen(ports[i], function(){
    console.log('port ' + ports[i] + ' open.');
  });
}
