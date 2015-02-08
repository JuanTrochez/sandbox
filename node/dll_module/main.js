#!/usr/bin/env node
var addon = require('./hello/build/Release/hellomod.node');

var str = addon.hello();
console.log("\nstr = " + str);

