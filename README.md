## [Version Control]

We will be using 2 repositories.

- Backend and web:
https://github.com/IIC2113-Politrack/IIC2113---Api
- Mobile:
https://github.com/IIC2113-Politrack/IIC2113---Mobile

## [Chosen Frameworks]

MEAN stack development for web application and API
MEAN stands for: 
- Mongo NO-SQL database
- Express server
- Angular frontend
- Node.js for backend

For mobile development, we will be using IONIC Framework which is based on Angular 4.

## [Chosen coding standard]
- https://angular.io/guide/styleguide [for angular]
- http://nodeguide.com/style.html [for node/express]

## API endpoints

The application API is been hosted using Amazon EC2, currently at [this page.](http://ec2-18-221-146-123.us-east-2.compute.amazonaws.com/)

The endpoints offered are the following: 


| http method 	| URL               	| description             	        |
|-----------	|--------------------	|--------------------------------	|
| GET         	| /users             	| list all the users      	        |
| POST        	| /users             	| create new user         	        |
| GET         	| /users/:id         	| get user information    	        |
| PUT         	| /users/:id         	| update user information 	        |
| DELETE      	| /users/:id         	| delete user                   	|
| GET         	| /organizations       	| list all the organizations      	|
| POST        	| /organizations        | create new organization         	|
| GET         	| /organizations/:id   	| get organization information    	|
| PUT         	| /organizations/:id   	| update organization information 	|
| DELETE      	| /organizations/:id   	| delete organization             	|
| GET         	| /evidences          	| list all the evidences        	|
| POST        	| /evidences          	| create new evidence            	|
| GET         	| /evidences/:id      	| get evidence information      	|
| PUT         	| /evidences/:id      	| update evidence information   	|
| DELETE      	| /evidences/:id      	| delete evidence               	|
| GET         	| /proposals          	| list all the proposals        	|
| POST        	| /proposals          	| create new proposal            	|
| GET         	| /proposals/:id      	| get proposal information      	|
| PUT         	| /proposals/:id      	| update proposal information   	|
| DELETE      	| /proposals/:id      	| delete proposal               	|
| GET         	| /comments          	| list all the comments           	|
| POST        	| /comments          	| create new comment            	|
| GET         	| /comments/:id      	| get comment information      	    |
| PUT         	| /comments/:id      	| update comment information   	    |
| DELETE      	| /comments/:id      	| delete comment               	    |