'use strict';

var server = require('server');

server.get('Show', server.middleware.get, function(req, res, next){
        res.render('/helloWorld');
        var Logger = require('dw/system/Logger'); 
        var testLogger = Logger.getLogger("MyCustomLog", "logTest"); 
        testLogger.info("This is a log test from my controller!");
        next();
    });

module.exports = server.exports();