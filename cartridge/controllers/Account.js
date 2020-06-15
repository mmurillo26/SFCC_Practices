'use strict';

var page = require('app_storefront_base/cartridge/controllers/Account');
var server = require('server');

server.extend(page);

server.replace('Show', server.middleware.get, function(req, res, next){
    var viewData = res.getViewData();
    viewData = [{
        text: 'Lorem ipsum dolor sit amet, cibo utroque ne vis, has no sumo graece.' +
          ' Dicta persius his id. Ea maluisset scripserit contentiones quo, est ne movet dicam.' +
          ' Equidem scriptorem vis no. Civibus tacimates interpretaris has et,' +
          ' ei offendit ocurreret vis, eos purto pertinax eleifend ea.'
    }];

    res.setViewData(viewData);
    res.render('myNewTemplate');
    next();
});

module.exports = server.exports();