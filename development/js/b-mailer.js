/**
 * Created by kvins on 26/04/2016.
 */
var setup = require('./setup');
var stmp = require('./mailer')

exports.send = function(setupFile) {
    setup.init(setupFile, function(){stmp.send(setup,undefined);});
};

exports.sendOption = function(setupFile,option){
    setup.init(setupFile, function(){stmp.send_option(setup,option,undefined);});
};

exports.sendTo = function(setupFile,to){
    setup.init(setupFile, function(){stmp.send_to(setup,to,undefined);});
};

exports.sendSync = function(setupFile, callback) {
    setup.init(setupFile, function(){stmp.send(setup,callback);});
};

exports.sendOptionSync = function(setupFile,option, callback){
    setup.init(setupFile, function(){stmp.send_option(setup,option,callback);});
};

exports.sendToSync = function(setupFile,to, callback){
    setup.init(setupFile, function(){stmp.send_to(setup,to,callback);});
};