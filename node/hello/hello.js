#!/usr/bin/env node
var fs = require('fs');


console.log("hello world!");
var content = fs.readFileSync("truc.txt");
var c = content.toString('utf8');
console.log(c);
