# LAB: Data Modeling

Re-Use your validator class from Class 02 to provide sanity checking to a real data model while implementing full CRUD functionality.

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.
s

## Requirements

### Finish the tests
* Using TDD ...
  * Add tests to support the other CRUD Methods
    * `delete()`
    * `update()`
  * Replace the `memory.js` parent class' `sanitize()` method with YOUR `Validate` class to support type checking (string, number, boolean)
    * *How will this change your schemas?*
    * *How will you use this class in your CRUD methods?*
  * Genericize the model test to run the same set of core tests on any model

### Create another model
* Using TDD ...
  * Create a data model called **products**
  * Add the following fields - use your own judgement on field type and validation rules
    * category_id - string, required
    * price - number, required
    * weight - number
    * quantity_in_stock - number, required
* TDD?
  * Shouldn't your generic model test "just work" once you add the Products model to it's list?
    * Yep ...

### Stretch Goal: Persist the data!
Thus far, you've created a simple, testable, extensible data modeling system.  But the data goes away after each run of the program. For this task, you'll be writing a persistence layer.

* Create a new model type in the `models` folder called `file.js`
  * *Hint: It's not a bad idea to copy the memory model to get started*
* Create a new data model called `person` that uses the file model type (just like categories and products used the memory type)
* Rather than use an in-memory database, which is the array of records, store that data in the file system.
  * Create a `data` folder
  * When working with a model, store it's data in a file with the model name (i.e. `categories.db`)
  * All operations should read from and write to that data file using the node `fs` module
* Write a full test suite
  * Yes ... you can use your memory model tests for inspiration

**Questions**
* How does this change your tests?
  * Do records just keep getting created over and over as you go?
  * How can you mitigate that?
  * Can mocking help?
* Do you want a new test runner for this type of model?


### Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
