'use strict';

var server = require('server');

server.get('Show', server.middleware.get, function(req, res, next){
        var Logger = require('dw/system/Logger'); 
        var testLogger = Logger.getLogger("MyCustomLog", "logTest"); 
        testLogger.info("This is a log test from my controller!");
        var testLogger2 = Logger.getLogger("logMario", "logChido");
        testLogger2.info("this is another log test");
        var formTest = server.forms.getForm('formTest');
        res.render('/helloWorld', {form: formTest});
        next();
    });

module.exports = server.exports();