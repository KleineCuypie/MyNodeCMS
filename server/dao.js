
var mysql = require('mysql');


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

module.exports.insertPage = function(name){
		connection.query("INSERT INTO  garagevlieghetest.page (name) VALUES ('" + name + "');" , function(err, rows, fields){
			console.log(err);
		});
};

module.exports.closeConnection = function(){
	connection.end();
};

/*connection.query('SELECT * FROM page', function(err, rows, fields) {
  if (err) throw err;

  console.log(rows[0].name);
});*/