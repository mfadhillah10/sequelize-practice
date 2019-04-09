var response = require('../response/res');
var customerDao = require('../dao/customer-dao-sequelize');
var logger = require('../util/logging/winston-logger');

exports.customers = function(req, res) {
    customerDao.getAll().then(customers => {
        response.ok(customers, res);
    })
    .catch(error => {
        response.err(error, res);
    })
}

exports.customerId = function(req, res) {
    customerDao.getById(req.params['id']).then(customer => {
        if(!customer) {
            logger.info('error call by id: ' + err);
            response.err(error, res);
        }
        response.ok(customer, res);
    })
    .catch(error => {
        response.err(error, res);
    })
}

exports.updateCustomer = function(req, res) {
    customerDao.getById(req.body.custnumber).then(customer => {
        if(err) {
            logger.log('Error call by ID: ' + err);
            response.err(err, res);
        } else if(customer === null) {
            response.dataNotFound('Customer not found', res);
        } else {
            customerDao.update(req.body.custnumber, req.body).then(updCustomer => {
                if(err) {
                    logger.log('Error update customer: ' + err);
                    response.err(error, res);
                }
                response.ok('Updated customer: ' + updCustomer, res);
            })
        }
    })
    .catch(error => {
        response.err(error, res);
    })
}

exports.delete = function(req, res) {
    customerDao.getById(req.params['id']).then(customer => {
        if(err) {
            response.err(err, res);
        } else if(customer === null) {
            response.dataNotFound('Not Found', res);
        } else {
            customerDao.del(req.params['id']).then(delCust => {
                if(err) {
                    logger.log(`Error deleting data ${err}`);
                    response.err(delCust, res);                    
                }
                response.ok('Deleted ' + delCust, res);
            })
        }
    })
}