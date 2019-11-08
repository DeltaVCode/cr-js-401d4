# Block 8 Project: RESTy Conversion to Redux

Its upgrade time! We're going to migrate our venerable **RESTy** application from using a simplistic (and slightly monolithic) state management system into a more modern and robust **Redux** core.

**This is a paired assignment**


## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.


## Getting Started

For this assignment, you'll be running in an "ejected" React application, where we get out from under the "Create React App" environment and into a more tactical one, using a generated "webpack" ... 

**Do not modify any of the configuration files that are created by the steps below, or bring in any custom configs**

* Create a new repository for this assignment and clone it
* In that folder, unzip the provided starter code
* Run `npm install` followed by `npm start` to get the app running
* Once you confirm that it's working, stop the app
* "Eject" from `create-react-app`
  * `npm run eject`
* Start your server again
  * `npm start`


## Requirements
* Keeping the core functionality in place, upgrade RESTy
  * Convert from component state to a Redux Store
  * Convert from using `superagent` to `fetch`
  * Modularize the component and store tree
  * Fully document the application and all components
  * Fully test the reducers, actions, and units
  
* Use the tools you've built in react to construct an amazing application.
* Make this easy and intuitive for a user to use
* The User Interface and Experience are completely up to you
  

**Implementation Notes/Advice**
* Use the deployed API server at https://api-401js.herokuapp.com
* The API server has `players` and `teams` models
* The api server supports the following routes:
  * **GET** `/api/v1/models` - A list of all data models
  * **GET** `/api/v1/:model/schema` - The JSON Schema for a given **model**
  * **GET** `/api/v1/:model/id` - A single record, from a **model**, with the **id**
  * **DELETE** `/api/v1/:model/id` - Delete a single record, from a **model**, with the **id**
  * **PUT** `/api/v1/:model/id` - Replace single record, from a **model**, with the **id**
  * **PATCH** `/api/v1/:model/id` - Tactically update a single record, from a **model**, with the **id**


## Stretch Goals

* Implement a Database Monitor with "Q" Events
* Implement a CRUD/CMS editor for supported API models, from a supported server

## Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations

You are required to deploy a locally built application, using a custom built `webpack` configuration

* Deploy your front-end (the React application) to AWS
  * Preferably, use the automated deployment process to connect a Cloud Formation stack
* Deploy your back-end (the API server) to Heroku with a mongo database
* Complete the README.md with complete documentation, UML, and user notes.
