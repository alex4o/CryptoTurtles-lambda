var R = require("r-script");

var submitter = '0x456';

var out = R("script.r")
  .data(submitter)
  .callSync();
  
console.log(out);