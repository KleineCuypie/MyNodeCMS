var mysql = require('mysql');
var strQuery = "";

var connection = mysql.createConnection({
  host     : 'localhost',
  //port	   : '3306',
  socketPath : '/Applications/MAMP/tmp/mysql/mysql.sock',
  database : 'garagevlieghetest',
  user     : 'root',
  password : 'root'
});

module.exports.init = function(){
	connection.connect();
	console.log('MySQL running');
};

module.exports.addPage = function(name){
	strQuery = "INSERT INTO page (name) VALUES ('" + name + "');";
	connection.query(strQuery, function(err, rows, fields){
		if (err != null){console.log(err);};
	});
};

module.exports.addPageAttribute = function(page, attribute, name){
	strQuery = "INSERT INTO pageAttribute (page, attribute, name) VALUES (" + page + "," + attribute + ",'" + name + "');";
	connection.query(strQuery, function(err, rows, fields){
		if (err != null){console.log(err);};
	});
};

module.exports.addPageAttributeContent = function(pageAttribute, content){
	strQuery = "INSERT INTO pageAttributeContent (pageAttribute, content) VALUES (" + pageAttribute + ",'" + content + "');";
	connection.query(strQuery, function(err, rows, fields){
		if (err != null){console.log(err);};
	});
};

module.exports.getAttributes = function(callback){
	strQuery = "SELECT * FROM attribute;";
	connection.query(strQuery, function(err, rows, fields){
		if (err != null){console.log(err);};
		callback(rows);
	});
};

module.exports.closeConnection = function(){
	connection.end();
};

/*connection.query('SELECT * FROM page', function(err, rows, fields) {
  if (err) throw err;

  console.log(rows[0].name);
});*/