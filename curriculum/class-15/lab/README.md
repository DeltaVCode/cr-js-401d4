# Block 3 Project: API Server

Implement a fully functional, authenticated and authorized API Server using the latest coding techniques

Over the course of the previous 2 blocks, you have separately created an `auth-server` and an `api-server`

In this project, the core requirement is to marry those 2 servers to create a single, authenticated API server.

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

## Requirements
* API Routes must now be protected with the proper permissions based on user capability
  * `app.get(...)` should should not require authentication
  * `app.post(...)` should require the `create` capability
  * `app.put(...)` should require the `update` capability
  * `app.patch(...)` should require the `update` capability
  * `app.delete(...)` should require the `delete` capability
* Clean and modularize Auth Middleware
* Clean/Tighten the Auth Model
* Stretch Goal
  * Multiple OAuth Providers Support
  * Create an abstraction for the `oauth` route

**Implementation Notes/Advice**
  * Use the code you've already written for the `auth-server` and the `api-server`!
  * Add the `auth` module/folder from the `auth-server` to the API server
  * Import and use the auth routes in the API server
  * Create users and roles in the mongo database

### Testing
* Tests from both previous servers should work in the new merged server...
* 100% Test Coverage Goal For:
  * Auth router
    * Signup
    * Sign In via username/password or Token
  * Model Finder Middleware
  * Auth Middleware
    * Protected Routes
  * OAuth Chooser
  * API Routes
    * Make assertions on the data shapes returned from the API routes

## Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
