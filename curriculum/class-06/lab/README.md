# LAB: HTTP and REST

Get your hands dirty in using and properly documenting a ReST API

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

## Requirements

### Build a working JSON Server

* Implement an API server suitable for a storefront, using json-server
  * Install `json-server` globally
  * Create a new repository called "simple-api"
  * Create a folder called `data` with a `db.json` file
  * Start json-server from within the `simple-api` folder and "watch" your database file
    * `json-server --watch=./data/db.json`
  * Data models should contain the following fields:
    * `categories`
      * `_id`, `name`, `display_name`, `description`
    * `products`
      * `_id`, `category`, `name`, `display_name`, `description`
  * Your api will (should) respond to the following endpoints:
    * `/categories`  GET, POST
    * `/categories/:id/` PUT, DELETE
    * `/products`  GET, POST
    * `/products/:id/` PUT, DELETE
  * Use `httpie` (command line) or Postman to POST some categories and products into your API so that you have some data in there. 
  * Confirm that GET, PUT, and DELETE also work

* Connect a web server
  * Open this [React Application](https://codesandbox.io/s/w638oyk7o8) and "Fork" it
  * Open the .env file and enter the URL to your API Server (if it's not running on http://localhost:3000)
  * This server is configured to use the routes noted in the first lab requirement
  * If your lab is working, this app will show your API Data!

* Swagger Documentation
  * In your API, Create a folder called `docs`
  * Go to swagger.io and use the Inspector application to test your api
  * Write and publish swagger documentation with Swagger Inspector
    * It will publish it to "Swagger Hub"
    * Convert the YAML to JSON and then copy and paste swagger.json from the editor and add to your server project.
    * For submission, this file needs to be in your repository
    * Additionally, add the URL to the swagger hub page where you build the docs to your README.


### Testing
**No automated testing is required for this assignment**


### Stretch Goal:
* Alter json-server to produce proper standardized API output
  * Rather than just an array of objects on a get
    * Return an object with a `count: ##` property and a `results: []` array
    * To do this, you'll need a server.js that requires in json-server and which overrides the renderer.  You will find instructions and examples on the json-server github page
  * Alter the swagger docs to reflect the new json format
  * Alter the www server to use the new json format

## Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
