var nodemailer=require("nodemailer"),fs=require("fs");exports.send=function(e){var o=nodemailer.createTransport(e.options());o.verify(function(n,r){if(n)console.log(n);else{var t=fs.createReadStream(e.template()),a={from:e.from(),to:e.to(),subject:e.subject(),html:t};o.sendMail(a,function(e,o){e&&fs.appendFile("bmailer.log",e)})}})},exports.send_option=function(e,o){var n=nodemailer.createTransport(e.options());n.verify(function(e,r){e?console.log(e):n.sendMail(o,function(e,o){e&&fs.appendFile("bmailer.log",e)})})},exports.send_to=function(e,o){var n=nodemailer.createTransport(e.options());n.verify(function(r,t){if(r)console.log(r);else{var a=fs.createReadStream(e.template()),i={from:e.from(),to:o,subject:e.subject(),html:a};n.sendMail(i,function(e,o){e&&fs.appendFile("bmailer.log",e)})}})};