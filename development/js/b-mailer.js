/**
 * Created by kvins on 26/04/2016.
 */
var setup = require('./setup');
var stmp = require('./mailer')

exports.send = function(setupFile) {
    setup.init(setupFile, function(){stmp.send(setup);});
};

exports.sendOption = function(setupFile,option){
    setup.init(setupFile, function(){stmp.send_option(setup,option);});
};

exports.sendTo = function(setupFile,to){
    setup.init(setupFile, function(){stmp.send_to(setup,to);});
};

