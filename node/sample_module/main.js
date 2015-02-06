#!/usr/bin/env node

console.log("hello world!");

var Circle = require('circle');
var Circle2 = require('circle');
console.log( 'The area of a circle of radius 4 is ' + Circle.area(4));

var Square = require('./square.js');
var mySquare = new Square(2);
console.log('The area of my square is ' + mySquare.area());
