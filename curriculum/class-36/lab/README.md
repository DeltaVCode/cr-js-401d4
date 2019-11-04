# LAB - Application State

For this assignment, you will be refactoring an app that uses basic state management into one that uses the more advanced Redux state management system, with a reducer.

## Before you begin
Refer to *Getting Started*  in the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for complete setup, configuration, deployment, and submission instructions.

## Getting Started

### Practice: Connect to a store
For this assignment, you're going to take an existing component which puts out some random numbers when a div is clicked, and refactor it to use a Redux store instead of local state.

* You've been provided starter code to work with - `practice`
* Connect `index.js` to the redux store and pass it down to the `App` component
* Remove the state declaration in the constructor
  * Do you still need a constructor?
* Bring in the actions to `app.js`
* Map state and dispatch to props in `app.js`
  * use `stuff` as your state keyword.
* Export the connected `App` component
* Render `this.props.stuff.foo` instead of `this.state.foo`
* Remove the `handleChange()` method in `app.js`
* Re-Implement the click event on the `<div>` using the action method that you mapped earlier

## To Do App Assignment
**Refactor the To Do application to use Redux**

You'll be given a working To Do application which you must refactor as follows:

### State Management
* Convert the state management to a Redux Store.
* Create a Redux Store and two reducers:
  1. A `todoList` reducer, to track the list
  2. A `details` reducer, to track which item detail to show
* Wire up the components to subscribe to the store for state and actions

#### Testing
* Test each reducer (without Enzyme)

### Assignment Submission Instructions
Refer to the the [lab submission instructions](../../../reference/submission-instructions/labs/README.md) for the complete lab submission process and expectations
