# LAB: Async

The javascript V8 engine is great at doing things "asynchronously" ... as a coder, you'll need to work in this lab to step out of the iterative coding mindset and use promises and async/await to read a file, as well as to work with converting buffers into text into objects and back again.

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Requirements
### Read and Write to a File
Write a node application, called `edit-file.js` in the root of your project that will modify a file on your computer

#### Getting Started
In the `data` folder, there is a file called `person.json` which is a simple object, representing a person.

#### Requirements
* Use the node `fs` module
* Accepts a file name as a command line parameter
* Reads in the contents of the file specified 
* Convert the contents to a javascript object
* Alters some values in the object
  * Maybe use `faker`
* Save the new object back to the file
  * What 2 steps are required to do this?
* Re-Open and read the file contents
* Prove that the new file contents match your changed object

***Software Engineering Note!***
*Working with command line arguments is an essential part of writing server side code, which often starts with options. Learn to read and use them*

### Execution notes

1. Perform the above operations with standard node `fs` module callbacks
1. Re-Implement (refactor) using promises
1. Re-Implement (refactor)  using async/await

For each of the above implementations, create a separate module that you can test and also require/run from the index.js file.

For write operations, your modules should accept an object and convert it to a save-able buffer.

For read operations, your modules should read in the text file and convert it's contents to an object before returning.


#### Testing
* test your modules, not your cli app!
* handle errors (i.e. file not found) in a consistent way
* Handle async issues in your tests
  * Callbacks, async, promises all behave differently ...

### Stretch Goals

* Rather than use the built-in `JSON.parse()` and `JSON.stringify()` methods ...
  * Write your own `stringify()` method that will turn any Object into a valid JSON string
  * Write your own `parse()` method that will turn a string of JSON into a real object

## Assignemnt Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations

