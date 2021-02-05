# shapesAreaApi
(Shape Area Api) Api for calculating areas fo different shapes

# hosting was done on Digital Oceans Cloud Servers

# baseurl is:
odeladetest.com

#Postman Api Collection, there is a file called: 
Shapes And Area.postman_collection.json
You can find it on the root directory of the project

#How to use the collection
1. Ensure you call the fetchToken Api First. then pass the fetched
token to the various authorization headers of the various Api.
Please use Bearer Token

#If you want to run the app locally, then do the following
from the root directory of the project. run the command
supervisor index.js
this should start the application

2. Please run the shape.sql and users.sql script from the command console of postgres
   This should initialize the users and shapes tables of the Application

#Note
The application is currently listening on port 9000, you may want to 
change this to suit your own environment