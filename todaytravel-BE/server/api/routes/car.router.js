const express = require('express');
const routerCar = express.Router();
const controller = require('../controller/car.controller');

routerCar.get('/', controller.get);
routerCar.get('/count', controller.countCar);
routerCar.get('/:id', controller.getById);
routerCar.post('/', controller.post)
routerCar.put('/:id', controller.put);
routerCar.delete('/:id', controller.deleteById);

module.exports = routerCar;