const express = require('express');
const routerCustomer = express.Router();
const controller = require('../controller/customer.controller');

routerCustomer.get('/', controller.get);
routerCustomer.get('/count', controller.countUser);
routerCustomer.get('/:id', controller.getById);
routerCustomer.post('/', controller.post)
routerCustomer.put('/:id', controller.put);
routerCustomer.delete('/:id', controller.deleteById);

module.exports = routerCustomer;