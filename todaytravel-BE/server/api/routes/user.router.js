const express = require('express');
const routerUser = express.Router();
const controller = require('../controller/user.controller');

routerUser.get('/', controller.get);
routerUser.get('/count', controller.countUser);
routerUser.get('/:id', controller.getById);
routerUser.post('/', controller.post)
routerUser.put('/:id', controller.put);
routerUser.delete('/:id', controller.deleteById);

module.exports = routerUser;