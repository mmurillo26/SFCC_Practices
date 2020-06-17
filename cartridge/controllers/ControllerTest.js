'use strict';

var server = require('server');
var csrfProtection = require('*/cartridge/scripts/middleware/csrf');

server.get('Show', server.middleware.get, csrfProtection.generateToken, function(req, res, next){
        var Logger = require('dw/system/Logger');

        var testLogger = Logger.getLogger("logInfo", "logInfoTest"),
        testLogger2 = Logger.getLogger("logWarn", "logWarnTest"),
        testLogger3 = Logger.getLogger("logError", "logErrorTest"),
        testLogger4 = Logger.getLogger("logDebug", "logDebugTest");

        testLogger.info("This is a log test from my controller!");
        testLogger2.warn("this is another log test");
        testLogger3.error("this is another log test");
        testLogger4.debug("this is another log test");

        var formTest = server.forms.getForm('formTest');

        res.render('/helloWorld', {form: formTest});

        next();
    });

module.exports = server.exports();