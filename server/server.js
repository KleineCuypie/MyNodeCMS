var express = require('express'),
	dao = require('./dao');
	
var server = express();
server.listen(3000);


dao.init();

server.get('/heykes', function(request, response){
	response.send('welkom op de pagina');
});

server.get('/add/:param', function(request, response){
	dao.insertPage(request.params.param + "blabla");
	response.send(200);
});


//dao.closeConnection();

/*
if(dao.insertPage('nick')){
	console.log('added page timke');
}*/
