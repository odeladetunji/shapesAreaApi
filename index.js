const app = require('express')();
const server = require('http').Server(app);
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./database/dbconnection');

app.use(bodyParser.urlencoded({ extended: false })); // urlencoded form parser
app.use(bodyParser.json())  // json parser
app.use(cors());

// app.use('/', LetsChat);

server.listen(9000, function(){
	console.log('Shape and Area Api');
});

async function testDb(){
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	  } catch (error) {
		console.error('Unable to connect to the database:', error);
	  }
}

testDb();


module.exports = app;
