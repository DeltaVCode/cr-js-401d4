# LAB - Express Routing & Connected API

You have been provided a partially working API server. The assignment for today is to complete the server's functionality by creating the data models and writing a full test suite

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.


## Getting Started

* install uuid, supertest, mongodb-memory-server
* start mongo server: `mongod --dbpath=/Users/path/to/data/db`

## Requirements


### Assignment 1: Integrate "Real" Data Models 
* Import your mongo data models from your earlier data modeling lab. 
  * Put them in a `models` folder in your source tree
  * Import them into your `server.js`
  * Wire them into the routes, replacing the in-memory "database"
* So long as your models obey the interface contract, your API routes should begin working
  * Verify this manually by visiting each of the routes with httpie or postman
    * get, post, put, delete on /categories and /categories/:id
    * get, post, put, delete on /products and /products/:id
  * Write supergoose tests to verify that your routes are functioning
    * /post saves a new record
    * /get gets all records
    * ...etc

---

### Assignment 2: Modularizing with External Routes

* Move the 2 sets of routes and rout handler functions into separate, external routers
  * They should go into a `routes` folder as separate files
    * One for categories
    * One for products
  * They will need to export an express router instance
  * The app will now need to import and use these routes
* Once you've moved the routes out, the tests that you wrote should still work.

**Engineering Note** This is a main benefit of testing -- asserting that major changes don't effect functionality!

## Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
