'use strit'


let port = 4444;
let name = 'default';
let app = require('./app');
let Promise = require('bluebird');
let args = require('yargs').argv;



if(args.port && args.port != null){
	port = args.port;
}

if(args.name && args.name != null){
	name = args.name;
}

 
app.locals.port = port;
app.locals.name = name;
app.listen(port , function(){
  console.log('Servidor de BusPaid corriendo correctamente');
});



