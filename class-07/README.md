# Express 

## Learning Objectives

* Understand Express Middleware
* Understand Express Routing
* Properly test an `express` server
* Implement CRUD behavior through HTTP to a REST API

## Outline
* :05 **Housekeeping/Recap**
* :30 **Whiteboard/DSA Review** 
* :15 **Lightning Talk** 
* Break 
* :30 **CS/UI Concepts** -
* :20 **Code Review** 
* Break
* :60 **Main Topic**

## Computer Science Concept:
* State Management

## UI Concept:
* Basic Form Layout

## Main Topic:

#### Modularization & Separation of Concerns
* Modularizing your code into logical chunks
* Each thing should do the thing its best at
* Dan Abramov: http://react-file-structure.surge.sh/

#### HTTP Form Handling
* Browsers only care about GET and POST
* On our server, we need to care about PUT, PATCH, DELETE
* Express has given us a nice assist here with "Method Overrides"

#### CRUD Operations
* CREATE
* READ
* UPDATE
* DESTROY

#### Server Testing
* Generally, avoid starting the actual server for testing
* Instead, export your server as a module in a library
* Then, you can use `supertest` to run your tests.
  * This will hit your routes as though your server was running, without actually starting it.
  * That's one less thing to go wrong (eliminate variables when testing!)
* Additionally, you can wrap `superagent` in a module (the demo code created an `agent.js` module that does this)
  * Doing this, allows you set up a "mock" of this new agent module
  * Create a folder called `__mocks__` where the `agent.js` file is with an agent.js file in it.
  * When you invoke `jest.mock()` on the agent file in your test, jest is smart enough to use that mocks version instead of the real one.
  * Why is this cool? We can 100% fake every call to the API.  Again -- you don't want your tests of the web server to be dependant on the API running, so mock (fake) it, so that you are testing only the interface to the API, not the actual data.
  * You test the data/veracity of the API when you write your API tests, not web server tests...

#### Test Pyramid
  * Server Testing crosses boundaries
    * Units: Server Internal Functions
      * Mock any integrations (like data fetching)
    * Integration: How it connects to other services
      * Really connect to other services (hard dependencies)
    * Acceptance
      * The server might be a dependency of some other test
      
### REST Documentation (Swagger)

The standard for documenting REST APIs is with a "live" documentation system: Open API (formerly "Swagger")

Once generated, Swagger Docs present developers a way not only see how to use an API, but to actually use it.  Yes, this is documentation that allows for live requests from with it.

Here's an example: [Star Wars API Docs](https://app.swaggerhub.com/apis/ahardia/swapi/1.0.0#/)

* On the left, you'll see the source code for the documentation.
* On the right  is the generated "Swagger" or "Open API" documentation for the [Star Wars API](https://swapi.co/api/people)


#### Serving your own Swagger Documentation

Use the node `express-swagger-generator` utility to create an endpoint that will render the Open API documentation for your API simply by putting properly formmated JSDoc-like comments in your API.

Create and import a file called `swagger.js` into your API server, which uses a configuration object that you can use to customize according to your API's file and URL structure.

```javascript
const express = require('express');
const app = express();
const expressSwagger = require('express-swagger-generator')(app);

let options = {
  swaggerDefinition: {
    info: {
      description: 'API Server',
      title: 'Swaggertastic Docs!',
      version: '1.0.1',
    },
    host: 'localhost:3300',
    basePath: '',
    produces: [
      'application/json',
    ],
    schemes: ['http'],
    securityDefinitions: {
      basicAuth: {
        type: 'basic',
      },
    },
  },
  basedir: __dirname, //app absolute path
  files: ['./*.js'], //Path to the API handle folder
};
expressSwagger(options);
// start up a specific standalone swagger server on a specific port
app.listen(3000);
```

Within your API file, document your routes, with properly formatted comments like this:

```javascript
/**
 * Get a list of records for a given model
 * Model must be a proper model, located within the ../models folder
 * @route GET /api/v1/{model}
 * @param {model} model.path - Model Name
 * @security basicAuth
 * @returns {object} 200 { count: 2, results: [ {}, {} ] }
 * @returns {Error}  500 - Server error
 */
router.get('/api/v1/:model', auth('read'), handleGetAll);

/**
 * @route POST /api/v1/:model
 * Model must be a proper model, located within the ../models folder
 * @param {model} model.path.required
 * @returns {object} 200 - Count of results with an array of results
 * @returns {Error}  500 - Unexpected error
 */
router.post('/api/v1/:model', auth('create'), handlePost);
```

Once done, navigating to your running server at `/api-docs/` on the port specified in your swagger.js configuration file will reveal your live running Open API documentation.

**This is required for every API server that you create**
