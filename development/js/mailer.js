var nodemailer = require('nodemailer');
var fs = require("fs");


exports.send = function(setup) {

    var transporter = nodemailer.createTransport(setup.options());

    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            var htmlstream = fs.createReadStream(setup.template());
            var mailOptions = {
                from: setup.from(), // sender address
                to: setup.to(), // list of receivers
                subject: setup.subject(), // plaintext body
                html: htmlstream // html body
            };
            transporter.sendMail(mailOptions, function (err, info) {
                if (err) {
                    fs.appendFile('bmailer.log',err);
                }
            });
        }
    });
};

exports.send_option = function(setup,option) {

    var transporter = nodemailer.createTransport(setup.options());

    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            transporter.sendMail(option, function (err, info) {
                if (err) {
                    fs.appendFile('bmailer.log',err);
                }
            });
        }
    });
};

exports.send_to = function(setup,to) {

    var transporter = nodemailer.createTransport(setup.options());

    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            var htmlstream = fs.createReadStream(setup.template());
            var mailOptions = {
                from: setup.from(), // sender address
                to: to, // list of receivers
                subject: setup.subject(), // plaintext body
                html: htmlstream // html body
            };
            transporter.sendMail(mailOptions, function (err, info) {
                if (err) {
                    fs.appendFile('bmailer.log',err);
                }
            });
        }
    });
};
 
 