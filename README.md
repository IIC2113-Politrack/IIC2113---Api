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
| GET         	| /api/users             	| list all the users      	        |
| POST        	| /api/users             	| create new user         	        |
| GET         	| /api/users/:id         	| get user information    	        |
| PUT         	| /api/users/:id         	| update user information 	        |
| DELETE      	| /api/users/:id         	| delete user                   	|
| GET         	| /api/organizations       	| list all the organizations      	|
| POST        	| /api/organizations        | create new organization         	|
| GET         	| /api/organizations/:id   	| get organization information    	|
| PUT         	| /api/organizations/:id   	| update organization information 	|
| DELETE      	| /api/organizations/:id   	| delete organization             	|
| GET         	| /api/politicians                 	| list all politicians                         	|
| POST        	| /api/politicians                 	| create politician                            	|
| GET         	| /api/politicians/:id             	| get politician information                   	|
| GET         	| /api/politicians/:id/commitments 	| get politician commitments (with proposals)  	|
| POST        	| /api/politicians/:id/commitments 	| create politician commitment (to a proposal) 	|
| PUT         	| /api/politicians/:id             	| update politician information                	|
| DELETE      	| /api/politicians/:id             	| destroy politician                           	|
| GET         	| /api/commitments                 	| list all commitments                         	|
| GET         	| /api/commitments/:id             	| get commitment information                   	|
| GET         	| /api/commitments/:id/evidences   	| list a commitment's evidences                	|
| POST        	| /api/commitments/:id/evidences   	| create new evidence related to commitment    	|
| DELETE      	| /api/commitments/:id             	| destroy commitment                           	|
| GET         	| /api/proposals                   	| list all proposals                           	|
| POST        	| /api/proposals                   	| create new proposal                          	|
| GET         	| /api/proposals/:id               	| obtain proposal information                  	|
| PUT         	| /api/proposals/:id               	| update proposal information                  	|
| DELETE      	| /api/proposals/:id               	| remove proposal                              	|
| GET         	| /api/evidences                   	| list all evidences                           	|
| GET         	| /api/evidences/:id               	| obtain evidence information                  	|
| DELETE      	| /api/evidences/:id               	| remove evidence                              	|
| GET         	| /api/comments          	| list all the comments           	|
| POST        	| /api/comments          	| create new comment            	|
| GET         	| /api/comments/:id      	| get comment information      	    |
| PUT         	| /api/comments/:id      	| update comment information   	    |
| DELETE      	| /api/comments/:id      	| delete comment               	    |