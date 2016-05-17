var bmailer = require("../development/js/b-mailer");

var mailOptions = {
    from: 'test 2', // sender address
    to: 'boxtade@gmail.com', // list of receivers
    subject: 'Notification', // plaintext body
    text: "Le test 2 passe." // html body
};

bmailer.sendOptionSync("./mail.json",mailOptions,function(){console.log("Pass 2");});

// var mailOptions = {
//     from: 'test 2', // sender address
//     to: 'boxtade@gmail.com', // list of receivers
//     subject: 'Notification', // plaintext body
//     text: "Le test 2 passe." // html body
// };
//
// bunix.sendOption("./mail.json",mailOptions);
//
// bunix.sendTo("./mail.json","kvin.salles@gmail.com");
console.log("Pass 1");

