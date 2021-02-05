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
const fetchToken = require('./routes/fetchToken');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

const swaggerOptions = {
	swaggerDefinition: {
		info: {
			title: "Shapes And Area Api",
			description: "Basic Api for calculation area of different shapes",
			contact: {
				name: 'Olatunji Odelade'
			},
			servers: ['http://localhost:9000']
		}
	},
	apis: ['index.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);

app.use(bodyParser.urlencoded({ extended: false })); // urlencoded form parser
app.use(bodyParser.json())  // json parser
app.use(cors());

//Routes//
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /registerusers:
 *  post:
 *    description: for registration of new users
 *    response: 
 *     '200':
 *       description: returns details of the new created user
 */
app.use('/registerusers', registerUsers);

/**
 * @swagger
 * /fetchAUser:
 *  get:
 *    description: endpoint is used to fetch a single user
 *    response: 
 *     '200':
 *       description: returns an object containing a list of all users
 */
app.use('/fetchAUser', fetchAUser);

/**
 * @swagger
 * /fetchAllUsers:
 *  get:
 *    description: endpoint is used to fetched all users in the system
 *    response: 
 *     '200':
 *       description: returns an object containing a list of all users
 */
app.use('/fetchAllUsers', fetchAllUsers);

/**
 * @swagger
 * /areaOfRectangle:
 *  post:
 *    description: endpoint is used to compute the area of a rectangle
 *    response: 
 *     '200':
 *       description: returns details about the computed data of that user
 */
app.use('/areaOfRectangle', rectangle);

/**
 * @swagger
 * /areaOfSquare:
 *  post:
 *    description: endpoint is used to compute the area of a square
 *    response: 
 *     '200':
 *       description: returns details about the computed data of that user
 */
app.use('/areaOfSquare', square);

/**
 * @swagger
 * /areaOfTriangle:
 *  post:
 *    description: endpoint is used to compute the area of a triangle
 *    response: 
 *     '200':
 *       description: returns details about the computed data of that user
 */
app.use('/areaOfTriangle', triangle);

/**
 * @swagger
 * /areaOfCircle:
 *  post:
 *    description: endpoint is used to compute the area of a circle
 *    response: 
 *     '200':
 *       description: returns details about the computed data of that user
 */
app.use('/areaOfCircle', circle);

/**
 * @swagger
 * /fetchtoken:
 *  get:
 *    description: this endpoint is to fetch token
 *    response: 
 *     '200':
 *       description: token returned sucessfully
 */
app.use('/fetchtoken', fetchToken);

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
