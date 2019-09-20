# LAB: Data Modeling With NoSQL Databases

Using a Mongo Schema and Data Model, implement a CRUD interface that is used the same as your "in memory" data models from the previous labs

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

* install uuid, supertest, mongodb-memory-server
* start mongo server: `mongod --dbpath=/Users/path/to/data/db`

## Assignment 1: Self Contained Models

* Work in the `data-modeling/models-singular` folder in the starter code
* You will find the scaffolding for a category model
  * `categories-schema.js` - the intended mongoose schema
    * This needs 2 fields: `name` (required) and `description`, both strings
  * `categories.js` - the interface for mongoose
  * In the `tests/models-singular` folder, you'll find the test for this model.
  * The test is blocked out (but has no actual test code)
  * Both files are missing some critical bits
  * Fill in the blanks to get them working.
    * You must implement the following model interface methods
      * `get()`
      * `create()`
      * `update()`
      * `delete()`
  * Use TDD to get the tests and your model working in sync.
  * Once your tests are passing, validate by writing an app that wires it up for real.

#### Repeat this process for a new model called `products`
* Use your imagination for the schema definition (fields)


## Assignment 2: Unified/Combined Models
As you may have noticed, your 2 model interfaces in the previous assignment are 99% the same (not very DRY).  In this assignment, we're going to create a common "mongo" interface, not unlike what we did for the memory and file models.

The goal is to create a single interface, that any mongo based model can simply extend from and get all of the same functionality, with the only difference being their schema definition.

* Work in the `data-modeling/models-modular` folder in the starter code
* You'll see the categories model and the mongo interface are scaffolded out for you.
* Move the functionality from one of the models that you created in **Assignment 1** into the mongo interface.
  * Genericize it
  * How will you obtain the schema generically?
* Alter the model itself (`categories.js`) to extend from the mongo interface and export itself, with the right schema wired in.
* Write tests to assert that you're wired up.
* Create a new folder called `products` and repeat the above process.
  * This should be a simple as wiring, as the functionality is now all in the `mongo.js` interface!

#### What have we accomplished?
* How does impact testing?
* Can you see how this might scale?
* How do these interfaces relate to the file and memory interfaces?
* Can they exist in the same system?


### Testing
* Required for all interface methods


### Stretch Goals
* Add some pre and post hooks
  * Logging
  * Uppercasing and Lowercasing
* Research Virtual Joins
  * Can you connect the Categories and Products to get a combined result on a find?

### Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
