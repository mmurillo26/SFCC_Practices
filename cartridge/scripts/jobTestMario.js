'use strict';

function modifyUser() {
    var Customer = require('dw/customer/CustomerMgr');
    var Transation = require('dw/system/Transation');
    var Logger = require('dw/system/Logger');

    Transation.wrap(function() {
        var userProfile = Customer.getCustomerByCustomerNumber('00000502').getProfile();
            userProfile.setFirstName('Mario');
            userProfile.setLastName('Tester');
    });
    Logger.info('The User has been modified');
}