'use strict'

var express = require('express');
var initController = require('../controllers/init');
var api =  express.Router();


api.post('/setUsers' , initController.setUsers);
api.post('/setLogins' , initController.setLogins);



//solo admin para poner balances//
api.post('/setAmountToken' , initController.setAmountToken);
api.post('/setAmountTransport' , initController.setAmountTransport);
api.post('/setAmountPoints' , initController.setAmountPoints);
//solo admin para poner balances//



api.post('/setTransactionsTransport' , initController.setTransactionsTransport);
api.post('/setTransactionsPoints' , initController.setTransactionsPoints);
api.post('/setTransactionsToken' , initController.setTransactionsToken);




api.post('/getTransactionsToken' , initController.getTransactionsToken);
api.post('/getTransactionsPoints' , initController.getTransactionsPoints);
api.post('/getTransactionsTransport' , initController.getTransactionsTransport);
api.post('/getBalances' , initController.getBalances);
api.post('/getUsers' , initController.getUsers);


api.post('/checkLogin' , initController.checkLogin);
























module.exports = api;