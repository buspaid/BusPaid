'use strict'
 
var f = require('../services/functions');

//https://ropsten.etherscan.io/address/0x833dc6507702cc5846feaa70cf313333bb6ad5d7#readContract


var Web3 = require('web3');
var EthTx = require('ethereumjs-tx');
var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io'));
var pK = '4C5F7BD8CC1907EDE59E0E77663F8F6C5503EFD091D696306B2057BD3CDEFB34';
var contrato = '0x833dC6507702cC5846FEAa70Cf313333Bb6ad5D7';
var API = '0x8AB9af40b0e5Ef87a8aB94149FF9cB06d5fCD599';
var abi = '[{"constant":false,"inputs":[{"name":"_uuid","type":"uint256"},{"name":"_amount","type":"uint256"},{"name":"_motivo","type":"string"}],"name":"setAmountTransport","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"Users","outputs":[{"name":"uuid","type":"uint256"},{"name":"firstname","type":"string"},{"name":"lastname","type":"string"},{"name":"email","type":"string"},{"name":"password","type":"string"},{"name":"telefono","type":"string"},{"name":"date","type":"uint256"},{"name":"status","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"Logins","outputs":[{"name":"uuid","type":"uint256"},{"name":"date","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_uuid","type":"uint256"},{"name":"_amount","type":"uint256"},{"name":"_motivo","type":"string"}],"name":"setAmountToken","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_uuid","type":"uint256"},{"name":"_amount","type":"uint256"},{"name":"_points","type":"uint256"},{"name":"_place","type":"string"}],"name":"setTransactionsPoints","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_uuid","type":"uint256"}],"name":"setLogins","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"TransactionsTransport","outputs":[{"name":"uuid","type":"uint256"},{"name":"amount","type":"uint256"},{"name":"bus","type":"string"},{"name":"date","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_uuid","type":"uint256"},{"name":"_amount","type":"uint256"},{"name":"_bus","type":"string"}],"name":"setTransactionsTransport","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"API","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_uuid","type":"uint256"},{"name":"_amount","type":"uint256"},{"name":"_receiver","type":"uint256"}],"name":"setTransactionsToken","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_uuid","type":"uint256"},{"name":"_firstname","type":"string"},{"name":"_lastname","type":"string"},{"name":"_email","type":"string"},{"name":"_password","type":"string"},{"name":"_telefono","type":"string"},{"name":"_status","type":"bool"}],"name":"setUsers","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"TransactionsToken","outputs":[{"name":"uuid","type":"uint256"},{"name":"amount","type":"uint256"},{"name":"receiver","type":"uint256"},{"name":"date","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"TransactionsPoints","outputs":[{"name":"uuid","type":"uint256"},{"name":"amount","type":"uint256"},{"name":"points","type":"uint256"},{"name":"place","type":"string"},{"name":"date","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_uuid","type":"uint256"},{"name":"_amount","type":"uint256"},{"name":"_motivo","type":"string"}],"name":"setAmountPoints","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_API","type":"address"}],"name":"setAPI","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"Balances","outputs":[{"name":"uuid","type":"uint256"},{"name":"transport","type":"uint256"},{"name":"point","type":"uint256"},{"name":"token","type":"uint256"},{"name":"date","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_uuid","type":"uint256"},{"indexed":true,"name":"_date","type":"uint256"},{"indexed":false,"name":"_email","type":"string"},{"indexed":false,"name":"_firstname","type":"string"},{"indexed":false,"name":"_lastname","type":"string"}],"name":"logSetUsers","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_uuid","type":"uint256"},{"indexed":true,"name":"_date","type":"uint256"}],"name":"logSetLogins","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_uuid","type":"uint256"},{"indexed":true,"name":"_date","type":"uint256"},{"indexed":false,"name":"_amount","type":"uint256"},{"indexed":false,"name":"_bus","type":"string"}],"name":"logSetTransactionsTransport","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_uuid","type":"uint256"},{"indexed":true,"name":"_date","type":"uint256"},{"indexed":false,"name":"_amount","type":"uint256"},{"indexed":false,"name":"_points","type":"uint256"},{"indexed":false,"name":"_place","type":"string"}],"name":"logSetTransactionsPoints","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_uuid","type":"uint256"},{"indexed":true,"name":"_date","type":"uint256"},{"indexed":false,"name":"_amount","type":"uint256"},{"indexed":false,"name":"_receiver","type":"uint256"}],"name":"logSetTransactionsToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_uuid","type":"uint256"},{"indexed":true,"name":"_date","type":"uint256"},{"indexed":false,"name":"_amount","type":"uint256"},{"indexed":false,"name":"_motivo","type":"string"}],"name":"logSetAmountToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_uuid","type":"uint256"},{"indexed":true,"name":"_date","type":"uint256"},{"indexed":false,"name":"_amount","type":"uint256"},{"indexed":false,"name":"_motivo","type":"string"}],"name":"logSetAmountTransport","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_uuid","type":"uint256"},{"indexed":true,"name":"_date","type":"uint256"},{"indexed":false,"name":"_amount","type":"uint256"},{"indexed":false,"name":"_motivo","type":"string"}],"name":"logSetAmountPoints","type":"event"}]';
abi = JSON.parse(abi);




async function setUsers(req , res){
	let p = req.body;
	if( f.vC(p , '_uuid') && f.vC(p , '_firstname') && f.vC(p , '_lastname') && f.vC(p , '_email') && f.vC(p , '_password') && f.vC(p , '_telefono') ){
		let _uuid = f.vS(p._uuid);
		let _firstname = f.vS(p._firstname);
		let _lastname = f.vS(p._lastname);
		let _email = f.vS(p._email);
		let _password = f.vS(p._password);
		let _telefono = f.vS(p._telefono);
		var pKey1x = new Buffer(pK , 'hex');
		var contract = web3.eth.contract(abi).at(contrato);
		var rawTx = {
			nonce: web3.toHex(web3.eth.getTransactionCount(API)),
			to: contrato,
			gasLimit: web3.toHex(f.randomIntFromInterval(1000000 , 2000000)),
			gasPrice: web3.toHex(5000000000),
			value: web3.toHex(0),
			data: contract.setUsers.getData(_uuid , _firstname , _lastname , _email , _password , _telefono , true , {from: API}),
		};
		var tx = new EthTx(rawTx);
		var rawTx = rawTx;
		tx.sign(pKey1x);
		var ttt = tx.serialize().toString('hex');
		var hash_firmado = '0x' + ttt;
		web3.eth.sendRawTransaction(hash_firmado , function(err , result){
			if(err){
				res.status(500).send({status:false , msg:'ERROR'});
			} else {
				res.status(200).send({status:true , msg:'OK' , hash: result});
			}
		});
	} else {
		res.status(500).send({status:false , msg:'enterFields'});
	}
}





async function setLogins(req , res){
	let p = req.body;
	if( f.vC(p , '_uuid') ){
		let _uuid = f.vS(p._uuid);
		var pKey1x = new Buffer(pK , 'hex');
		var contract = web3.eth.contract(abi).at(contrato);
		var rawTx = {
			nonce: web3.toHex(web3.eth.getTransactionCount(API)),
			to: contrato,
			gasLimit: web3.toHex(f.randomIntFromInterval(1000000 , 2000000)),
			gasPrice: web3.toHex(5000000000),
			value: web3.toHex(0),
			data: contract.setLogins.getData(_uuid , {from: API}),
		};
		var tx = new EthTx(rawTx);
		var rawTx = rawTx;
		tx.sign(pKey1x);
		var ttt = tx.serialize().toString('hex');
		var hash_firmado = '0x' + ttt;
		web3.eth.sendRawTransaction(hash_firmado , function(err , result){
			if(err){
				res.status(500).send({status:false , msg:'ERROR'});
			} else {
				res.status(200).send({status:true , msg:'OK' , hash: result});
			}
		});
	} else {
		res.status(500).send({status:false , msg:'enterFields'});
	}
}




async function setAmountToken(req , res){
	let p = req.body;
	if( f.vC(p , '_uuid') && f.vC(p , '_amount') && f.vC(p , '_motivo') ){
		let _uuid = f.vS(p._uuid);
		let _amount = f.vS(p._amount);
		let _motivo = f.vS(p._motivo);
		var pKey1x = new Buffer(pK , 'hex');
		var contract = web3.eth.contract(abi).at(contrato);
		var rawTx = {
			nonce: web3.toHex(web3.eth.getTransactionCount(API)),
			to: contrato,
			gasLimit: web3.toHex(f.randomIntFromInterval(1000000 , 2000000)),
			gasPrice: web3.toHex(5000000000),
			value: web3.toHex(0),
			data: contract.setAmountToken.getData(_uuid , _amount , _motivo , {from: API}),
		};
		var tx = new EthTx(rawTx);
		var rawTx = rawTx;
		tx.sign(pKey1x);
		var ttt = tx.serialize().toString('hex');
		var hash_firmado = '0x' + ttt;
		web3.eth.sendRawTransaction(hash_firmado , function(err , result){
			if(err){
				res.status(500).send({status:false , msg:'ERROR'});
			} else {
				res.status(200).send({status:true , msg:'OK' , hash: result});
			}
		});
	} else {
		res.status(500).send({status:false , msg:'enterFields'});
	}
}



async function setAmountTransport(req , res){
	let p = req.body;
	if( f.vC(p , '_uuid') && f.vC(p , '_amount') && f.vC(p , '_motivo') ){
		let _uuid = f.vS(p._uuid);
		let _amount = f.vS(p._amount);
		let _motivo = f.vS(p._motivo);
		var pKey1x = new Buffer(pK , 'hex');
		var contract = web3.eth.contract(abi).at(contrato);
		var rawTx = {
			nonce: web3.toHex(web3.eth.getTransactionCount(API)),
			to: contrato,
			gasLimit: web3.toHex(f.randomIntFromInterval(1000000 , 2000000)),
			gasPrice: web3.toHex(5000000000),
			value: web3.toHex(0),
			data: contract.setAmountTransport.getData(_uuid , _amount , _motivo , {from: API}),
		};
		var tx = new EthTx(rawTx);
		var rawTx = rawTx;
		tx.sign(pKey1x);
		var ttt = tx.serialize().toString('hex');
		var hash_firmado = '0x' + ttt;
		web3.eth.sendRawTransaction(hash_firmado , function(err , result){
			if(err){
				res.status(500).send({status:false , msg:'ERROR'});
			} else {
				res.status(200).send({status:true , msg:'OK' , hash: result});
			}
		});
	} else {
		res.status(500).send({status:false , msg:'enterFields'});
	}
}


async function setAmountPoints(req , res){
	let p = req.body;
	if( f.vC(p , '_uuid') && f.vC(p , '_amount') && f.vC(p , '_motivo') ){
		let _uuid = f.vS(p._uuid);
		let _amount = f.vS(p._amount);
		let _motivo = f.vS(p._motivo);
		var pKey1x = new Buffer(pK , 'hex');
		var contract = web3.eth.contract(abi).at(contrato);
		var rawTx = {
			nonce: web3.toHex(web3.eth.getTransactionCount(API)),
			to: contrato,
			gasLimit: web3.toHex(f.randomIntFromInterval(1000000 , 2000000)),
			gasPrice: web3.toHex(5000000000),
			value: web3.toHex(0),
			data: contract.setAmountPoints.getData(_uuid , _amount , _motivo , {from: API}),
		};
		var tx = new EthTx(rawTx);
		var rawTx = rawTx;
		tx.sign(pKey1x);
		var ttt = tx.serialize().toString('hex');
		var hash_firmado = '0x' + ttt;
		web3.eth.sendRawTransaction(hash_firmado , function(err , result){
			if(err){
				res.status(500).send({status:false , msg:'ERROR' , err:err});
			} else {
				res.status(200).send({status:true , msg:'OK' , hash: result});
			}
		});
	} else {
		res.status(500).send({status:false , msg:'enterFields'});
	}
}



async function setTransactionsTransport(req , res){
	let p = req.body;
	if( f.vC(p , '_uuid') && f.vC(p , '_amount') && f.vC(p , '_bus') ){
		let _uuid = f.vS(p._uuid);
		let _amount = f.vS(p._amount);
		let _bus = f.vS(p._bus);
		var pKey1x = new Buffer(pK , 'hex');
		var contract = web3.eth.contract(abi).at(contrato);
		var rawTx = {
			nonce: web3.toHex(web3.eth.getTransactionCount(API)),
			to: contrato,
			gasLimit: web3.toHex(f.randomIntFromInterval(1000000 , 2000000)),
			gasPrice: web3.toHex(5000000000),
			value: web3.toHex(0),
			data: contract.setTransactionsTransport.getData(_uuid , _amount , _bus , {from: API}),
		};
		var tx = new EthTx(rawTx);
		var rawTx = rawTx;
		tx.sign(pKey1x);
		var ttt = tx.serialize().toString('hex');
		var hash_firmado = '0x' + ttt;
		web3.eth.sendRawTransaction(hash_firmado , function(err , result){
			if(err){
				res.status(500).send({status:false , msg:'ERROR' , err:err});
			} else {
				res.status(200).send({status:true , msg:'OK' , hash: result});
			}
		});
	} else {
		res.status(500).send({status:false , msg:'enterFields'});
	}
}





async function setTransactionsPoints(req , res){
	let p = req.body;
	if( f.vC(p , '_uuid') && f.vC(p , '_amount') && f.vC(p , '_points') && f.vC(p , '_place') ){
		let _uuid = f.vS(p._uuid);
		let _amount = f.vS(p._amount);
		let _points = f.vS(p._points);
		let _place = f.vS(p._place);
		var pKey1x = new Buffer(pK , 'hex');
		var contract = web3.eth.contract(abi).at(contrato);
		var rawTx = {
			nonce: web3.toHex(web3.eth.getTransactionCount(API)),
			to: contrato,
			gasLimit: web3.toHex(f.randomIntFromInterval(1000000 , 2000000)),
			gasPrice: web3.toHex(5000000000),
			value: web3.toHex(0),
			data: contract.setTransactionsPoints.getData(_uuid , _amount , _points , _place , {from: API}),
		};
		var tx = new EthTx(rawTx);
		var rawTx = rawTx;
		tx.sign(pKey1x);
		var ttt = tx.serialize().toString('hex');
		var hash_firmado = '0x' + ttt;
		web3.eth.sendRawTransaction(hash_firmado , function(err , result){
			if(err){
				res.status(500).send({status:false , msg:'ERROR' , err:err});
			} else {
				res.status(200).send({status:true , msg:'OK' , hash: result});
			}
		});
	} else {
		res.status(500).send({status:false , msg:'enterFields'});
	}
}





async function setTransactionsToken(req , res){
	let p = req.body;
	if( f.vC(p , '_uuid') && f.vC(p , '_amount') && f.vC(p , '_receiver') ){
		let _uuid = f.vS(p._uuid);
		let _amount = f.vS(p._amount);
		let _receiver = f.vS(p._receiver);
		var pKey1x = new Buffer(pK , 'hex');
		var contract = web3.eth.contract(abi).at(contrato);
		var rawTx = {
			nonce: web3.toHex(web3.eth.getTransactionCount(API)),
			to: contrato,
			gasLimit: web3.toHex(f.randomIntFromInterval(1000000 , 2000000)),
			gasPrice: web3.toHex(5000000000),
			value: web3.toHex(0),
			data: contract.setTransactionsToken.getData(_uuid , _amount , _receiver , {from: API}),
		};
		var tx = new EthTx(rawTx);
		var rawTx = rawTx;
		tx.sign(pKey1x);
		var ttt = tx.serialize().toString('hex');
		var hash_firmado = '0x' + ttt;
		web3.eth.sendRawTransaction(hash_firmado , function(err , result){
			if(err){
				res.status(500).send({status:false , msg:'ERROR' , err:err});
			} else {
				res.status(200).send({status:true , msg:'OK' , hash: result});
			}
		});
	} else {
		res.status(500).send({status:false , msg:'enterFields'});
	}
}


///GETS///

async function getTransactionsToken(req , res){
	let p = req.body;
	if( f.vC(p , '_uuid')){
		let _uuid = f.vS(p._uuid);
		var contract = web3.eth.contract(abi).at(contrato);
		var a = contract.TransactionsToken(_uuid , {from: API});
		var data = {
			uuid: a[0]*1,
			amount: a[1]*1,
			receiver: a[2]*1,
			date: a[3]*1,
		};
		res.status(200).send({status:true , msg:'OK' , data: data});
	} else {
		res.status(500).send({status:false , msg:'enterFields'});
	}
}


async function getTransactionsPoints(req , res){
	let p = req.body;
	if( f.vC(p , '_uuid')){
		let _uuid = f.vS(p._uuid);
		var contract = web3.eth.contract(abi).at(contrato);
		var a = contract.TransactionsPoints(_uuid , {from: API});
		var data = {
			uuid: a[0]*1,
			amount: a[1]*1,
			points: a[2]*1,
			place: a[3],
			date: a[4]*1,
		};
		res.status(200).send({status:true , msg:'OK' , data: data});
	} else {
		res.status(500).send({status:false , msg:'enterFields'});
	}
}



async function getTransactionsTransport(req , res){
	let p = req.body;
	if( f.vC(p , '_uuid')){
		let _uuid = f.vS(p._uuid);
		var contract = web3.eth.contract(abi).at(contrato);
		var a = contract.TransactionsTransport(_uuid , {from: API});
		var data = {
			uuid: a[0]*1,
			amount: a[1]*1,
			bus : a[2],
			date: a[3]*1,
		};
		res.status(200).send({status:true , msg:'OK' , data: data});
	} else {
		res.status(500).send({status:false , msg:'enterFields'});
	}
}


async function getBalances(req , res){
	let p = req.body;
	if( f.vC(p , '_uuid')){
		let _uuid = f.vS(p._uuid);
		var contract = web3.eth.contract(abi).at(contrato);
		var a = contract.Balances(_uuid , {from: API});
		var data = {
			uuid: a[0]*1,
			transport: a[1]*1,
			point: a[2]*1,
			token: a[3]*1,
			date: a[4]*1,
		};
		res.status(200).send({status:true , msg:'OK' , data: data});
	} else {
		res.status(500).send({status:false , msg:'enterFields'});
	}
}



async function getUsers(req , res){
	let p = req.body;
	if( f.vC(p , '_uuid')){
		let _uuid = f.vS(p._uuid);
		var contract = web3.eth.contract(abi).at(contrato);
		var a = contract.Users(_uuid , {from: API});
		var data = {
			uuid: a[0]*1,
			firstname: a[1],
			lastname: a[2],
			email: a[3],
			password: a[4],
			telefono: a[5],
			date: a[6]*1,
		};
		res.status(200).send({status:true , msg:'OK' , data: data});
	} else {
		res.status(500).send({status:false , msg:'enterFields'});
	}
}


async function checkLogin(req , res){
	let p = req.body;
	if( f.vC(p , '_uuid') && f.vC(p , '_password') && f.vC(p , '_email') ){
		let _uuid = f.vS(p._uuid);
		let _email = f.vS(p._email);
		let _password = f.vS(p._password);
		var contract = web3.eth.contract(abi).at(contrato);
		var a = contract.Users(_uuid , {from: API});
		if( a[3] == _email && a[4] == _password ){
			var data = {
				uuid: a[0]*1,
				firstname: a[1],
				lastname: a[2],
				email: a[3],
				password: a[4],
				telefono: a[5],
				date: a[6]*1,
			};
			res.status(200).send({status:true , msg:'OK' , data: data});
		} else {
			res.status(500).send({status:false , msg:'loginError'});
		}
	} else {
		res.status(500).send({status:false , msg:'enterFields'});
	}
}




module.exports = {
	setUsers,
	setLogins,
	setAmountToken,
	setAmountTransport,
	setAmountPoints,
	setTransactionsTransport,
	setTransactionsPoints,
	setTransactionsToken,
	

	getTransactionsToken,
	getTransactionsPoints,
	getTransactionsTransport,
	getBalances,
	getUsers,
	checkLogin,

	
};