# README


## Steps to Run on local 
 Run a command  "serverless offline start"

   │   GET    | http://localhost:3000/dev/user/{name}                               │
   │   POST   | http://localhost:3000/dev/user                                      │
   │   DELETE | http://localhost:3000/dev/user/{name}                               │
                                                                            

## Steps deploy  
 Run a command  "serverless deploy"

endpoints:
  GET - https://ygmw5rq37e.execute-api.ap-southeast-2.amazonaws.com/dev/user/{name}
  POST - https://ygmw5rq37e.execute-api.ap-southeast-2.amazonaws.com/dev/user
  DELETE - https://ygmw5rq37e.execute-api.ap-southeast-2.amazonaws.com/dev/user/{name}
functions:
  getUser: aws-serverless-typescript-api-dev-getUser (532 kB)
  createUser: aws-serverless-typescript-api-dev-createUser (532 kB)
  deleteUser: aws-serverless-typescript-api-dev-deleteUser (532 kB)
                                                                            


## Steps to run test 
 Run a command  " npm run test"

   │   GET    | http://localhost:3000/dev/user/{name}                               │
   │   POST   | http://localhost:3000/dev/user                                      │
   │   DELETE | http://localhost:3000/dev/user/{name}                               │
                                                                            
## Additional
Set up the AWS CLI
> aws configure

Project setup
# Install serverless package globally
> npm install -g serverless
#Initialize a new serverless project
> serverless create --template aws-nodejs-typescript --path aws-serverless-typescript-api
> npm install

## Project structure
Models: Defin schema and connect it to our database
Service: Contains  business handler functions
Functions: Contains Lambda functions