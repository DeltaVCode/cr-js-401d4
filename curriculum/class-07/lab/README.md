# LAB: Express

Add fidelity, documentation, and tests to a fully functional REST API built with Express

**This is a paired Lab**

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started
In the `starter-code`, there are folders that map to each of the lab assignments. You'll be creating new repositories today, one for each part of the assignment.

## Requirements

### API Server
* Create a repository called `lab-07-api-server` and copy the contents of the `starter-code/api-server` folder into it
* Modularize the `index.js` file into 2 files
  * `lib/server.js` should contain all of the logic for the server (essentially all of the code)
    * This file must export an object containing a start method that accepts a port and a 'server' property that references the `app` (express)
    * Why are we doing this?
  * `index.js` should require `lib/server.js` and receive an object with a `start()` method.
  * Have `index.js` call that start method with a port.
* Add middleware at the application level for all routes that puts the current timestamp on the `request` object in a property called `requestTime`
* Add logging middleware that accepts a parameter called 'message'
  * This middleware should do a `console.log()` of the request `path`, `method`, the `requestTime` property of the request object, and whatever message is passed to it
* Add 404 and 500 error handling middleware to the server
* Alter the `get` and `post` routes to call this logging middleware with a custom message
* Write middleware only for use by the `post` route that puts a random `true` or `false` value on a property of the request object called `valid`
  * In that post route, only add the new record if `request.valid` is `true`, otherwise, force a 500 error
    * Note, you won't be able to test the route once you do this, as you will not be able to depend on valid to be true.
    * Why are we doing this? To simulate a database failure and ensure that your route can handle both the "happy" and "sad" paths.
* Modularize the server routes
  * Create a routes folder with a `category-routes.js` module
    * This should contain the routes and the database for categories
  
**Engineering Note** - *Modularity is a tool that not only makes your code more readable and consumable by other developers, it helps you to think about how to break problems down*
  
* Draw a full process/data flow diagram (UML) for the server
* Write JSDoc for all methods, routes
* Provide full swagger documentation
  * Wire up to a custom port using the `express-swagger-generator` npm module
  * Note that your routes might be different as well as the returned data shape ... update accordingly
  

### Testing
* Server tests have been partially provided, but will not work until the modularization steps are completed
  * Complete the tests to cover all of your routes
  * Use `supergoose` to wire up a mock server
* Write unit tests for the middleware
* Write unit tests for the data model

**Engineering Note** - *Testing servers without side-effects is crucial. More critical is not having to manage starting/stopping a server in multiple environments.*

### Stretch Goals:
* Add support for a second data type: `products`
  * New Model
  * Additional Routes


## Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
