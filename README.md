# IBM Coding Exercise

## Task

Create a single page application using Node.js and AngularJS.  Application should be able to take data from four text boxes (First Name, Last Name, Address and Company) and save it to a database.  Application should also be able to retrieve data from the database and display it to the user.

## Technolgies Used

node.js/express - Server Implementation

MongoDB - Database

Mongoose - Document Modeling for MongoDB

AngularJS - Client Side Implmentation

Angular Material / Material Data Table - Styling Framework

Bower/NPM - Package Managers

Gulp - Task Runner

LoDash - Javascript Utility Functions
  
## Directions to launch application.
  
1. Install dependenices 
              
  ````bash
  npm install
  ````
              
  ````bash
  bower install
  ````
  
2. Build client distruibution 

  ````bash
  gulp js
  ````
               
3. Add .env file. Use the following format:

  ````bash
  PORT = 3000
  DB_URL = 'mongodb://localhost:27017/ibmtest'
  ````
          
  Change the variables to whatever suites your enviroment.
          
          
 4. Lunch Application.  From the top folder run:
 
 ````bash
 node server.js
 ````
           
