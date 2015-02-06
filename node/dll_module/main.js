#!/usr/bin/env node
var addon = require('./hello/build/Release/hello.node');

console.log(addon.hello());
