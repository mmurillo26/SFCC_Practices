'use strict';

var server = require('server');
var PageMgr = require('dw/experience/PageMgr');
var page = module.superModule;
server.extend(page);

server.append('Landing', function(req, res, next){
        var page = PageMgr.getPage('custom-pd');
        if (page != null && page.isVisible())  
        {
            res.page(page.ID, {});
        }
        next();
    });

module.exports = server.exports();