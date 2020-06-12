'use strict';

var server = require('server');
var PageMgr = require('dw/experience/PageMgr');

server.get('Show', function(req, res, next){
        var page = PageMgr.getPage('test-PD');
        if (page != null && page.isVisible())  
        {
            res.page(page.ID, {});
        }
        next();
    });

module.exports = server.exports();