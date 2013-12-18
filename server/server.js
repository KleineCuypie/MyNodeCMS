var express = require('express'),
	// path = require('path'),
	dao = require('./dao');
	
var server = express();
// server.use(express.static(__dirname + '/client'));
server.configure(function () {
    server.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
});
// server.set('views', __dirname + '/client');
// server.engine('html', require('jade').renderFile);
server.listen(3000);

dao.init();

server.get('/heykes', function(request, response){
	response.send('welkom op de pagina');
});

server.get('/add/:pageName', function(request, response){
	dao.addPage(request.params.pageName);
	response.send(200);
});

server.get('/addPageAttribute/:pageId/:attributeId/:name', function(request, response){
	dao.addPageAttribute(request.params.pageId, request.params.attributeId, request.params.name);
	response.send(200);
});

server.get('/addPageAttributeContent/:pageAttributeId/:content', function(request, response){
	dao.addPageAttributeContent(request.params.pageAttributeId, request.params.content);
	response.send(200);
	// response.render('index');
});

server.get('/getAttributes', function(request, response){
	dao.getAttributes(function(rows){
		response.send(rows);
	});
	// response.send("please wait");
	// response.render('index');
});

//dao.closeConnection();

/*
if(dao.insertPage('nick')){
	console.log('added page timke');
}*/
