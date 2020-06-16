'use strict';

var page = require('app_storefront_base/cartridge/controllers/Account');
var server = require('server');

server.extend(page);

server.replace('Show', server.middleware.get, function(req, res, next){
    res.render('myNewTemplate');
    next();
});

module.exports = server.exports();