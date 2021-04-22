var express = require('express');
var routerr = express.Router();

var userController = require('../controllers/api/user.controllers')
var indexController = require('../controllers/home.controllers')



//users
routerr.post('/api/user', userController.create)
routerr.get('/api/user', userController.findAll)
routerr.get("/api/user/:id", userController.findOne);
routerr.put("/api/user/:id", userController.update);
routerr.delete("/api/user/:id", userController.delete);
routerr.delete("/api/user", userController.deleteAll);


//Home
routerr.get('/', indexController.getHome)
routerr.get('/about', indexController.getAbout)
routerr.get('/cart', indexController.getCart)
routerr.get('/checkout', indexController.getCheckOut)
routerr.get('/contact', indexController.getContact)
routerr.get('/store', indexController.getStore)
routerr.get('/thankyou', indexController.getThankyou)
routerr.get('/view', indexController.getView)


module.exports = routerr;