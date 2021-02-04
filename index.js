const app = require('express')();
const server = require('http').Server(app);
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const registerUsers = require('./routes/registerusers');
const fetchAUser = require('./routes/fetchAUser');
const fetchAllUsers = require('./routes/fetchAllUsers');
const rectangle = require('./routes/rectangle');
const square = require('./routes/square');
const triangle = require('./routes/triangle');
const circle = require('./routes/circle');

app.use(bodyParser.urlencoded({ extended: false })); // urlencoded form parser
app.use(bodyParser.json())  // json parser
app.use(cors());

//Routes//
app.use('/registerusers', registerUsers);
app.use('/fetchAUser', fetchAUser);
app.use('/fetchAllUsers', fetchAllUsers);
app.use('/areaOfRectangle', rectangle);
app.use('/areaOfSquare', square);
app.use('/areaOfTriangle', triangle);
app.use('/areaOfCircle', circle);

server.listen(9000, function(){
	console.log('Shape and Area Api');
});

// async function testDb(){
// 	try {
// 		await sequelize.authenticate();
// 		console.log('Connection has been established successfully.');
// 	  } catch (error) {
// 		console.error('Unable to connect to the database:', error);
// 	  }
// }

// testDb();


module.exports = app;
