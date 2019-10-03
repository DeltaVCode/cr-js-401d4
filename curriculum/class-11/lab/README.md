# LAB: Authentication

Fix and document a (broken) Basic Authentication server, with signup and signin capabilities, using a Mongo database for storage.

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

* You've been provided a server code with the authentication middleware, models and routes scaffolded in.
* There are some potential bugs and missing logic.
* Work with a partner!

## Requirements

### Assignment: Auth Server
* Create a UML diagram of the authentication system on a whiteboard
* Identify and fix any bugs
* **NEW CODE:** Protect the `/book` and `/book/:id` routes by requiring user authentication
* Document and publish the code with JSDoc

### Testing
* POST to /signup to create a new user
* POST to /signin to login as a user (use basic auth)
* Need tests for auth middleware and the routes
  * Does the middleware function (send it a basic header)
  * Do the routes assert the requirements (signup/signin)
  * Are the book routes protected properly?
* Ensure that you use supergoose instead of mongo/express

### Notes

Signup with httpie: 
```
echo '{"username":"name","password":"pass"}' | http post :3000/signup
```
Signin with httpie: 
```
http post :3000/signin -a username:password
```
You may also use Postman or RESTy

## Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations

