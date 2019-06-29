'use strict'

var Web3 = require('web3');
var EthTx = require('ethereumjs-tx');

var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io'));




function vC(p , k){
	if( p[k] != undefined && p[k] != null && p[k].length > 0 ){
		return true;			
	} else {
		return false;
	}
}


function vS(v){
	return (v)
}



function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}





module.exports = {
  vC,
  vS,
  randomIntFromInterval
};
