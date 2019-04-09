'use strict'

module.exports = function(app) {
    var todolist = require('../controller/customer-controller');

    app.route('/customers').get(todolist.customers);
    app.route('/customer/:id').get(todolist.customerId);
    app.route('/customer').put(todolist.updateCustomer);
    app.route('/customer/:id').delete(todolist.delete);
}