const { Customer } = require('../db/sequelize');
var logger = require('../util/logging/winston-logger');

exports.getAll = function getAll() {
    return new Promise((resolve, reject) => {
        Customer.findAll({
            order: [[
                'custnumber', 'ASC'
            ]]
        })
        .then((customers) => {
            resolve(customers);
        })
        .catch((error) => {
            logger.error(error);
            reject(error);
        })
    })
}

exports.getById = function getById(id) {
    return new Promise((resolve, reject) => {
        Customer.findByPk(id)
        .then((customer) => {
            resolve(customer);
        })
        .catch((error) => {
            logger.error(error);
            reject(error);
        })
    })
}

exports.update = function update(id, data) {
    return new Promise((resolve, reject) => {
        Customer.update(data, {
            where: { custnumber: data.custnumber },
            returning: true,
            plain: true
        })
        .then(result => {
            logger.info('result updated: ');
            logger.info(result);
            resolve(null, data);
        })
        .catch((error) => {
            logger.error(error);
            reject(error);
        })
    })
}

exports.del = function del(id) {
    return new Promise((resolve, reject) => {
        Customer.destroy({
            where: { custnumber: id }
        })
        .then(result => {
            resolve(result);
        })
        .catch((error) => {
            logger.error(error);
            reject(error);
        })
    })
}