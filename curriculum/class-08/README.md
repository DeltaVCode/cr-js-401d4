# Express Routing & Connected API

## Learning Objectives

* Understand and implement external (modular) routing with express
* Integrate a data model into an express API

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
* APIs
* Data Transfer

## Main Topic:

Routes can be managed in separate modules from the main server, allowing us to extract that logic and wiring to be more topical.

How does this change the server's role?  

* index.js - Entry Point
* server.js - Hub, Exported Server
* routes/routex.js, etc - Routers and Handlers
