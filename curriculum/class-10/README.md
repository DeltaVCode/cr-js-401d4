# GraphQL

## Learning Objectives
* Understand and Implement Stacks and Queues
* Understand the concept behind GraphQL
* Implement a simple GraphQL Wrapper around an API Server
* Install GraphiQL

## Outline
* :05 **Housekeeping/Recap**
* :15 **Code Review**
* :45 **Stacks and Quues**
* Break
* :50 **GraphQL Theory & Demos**
* Break
* :60 **GraphQL Implementation**

## GraphQL

GraphQL is a query language used to allow clients to shape the query response according to their needs, and allowing the server to do the work of aggegating data from potentially multiple sources to fulfill client queries.

Unlike REST, GraphQL servers expose only a single endpoint. Rather than codifying every possible permutation and endpoint, a GraphQL developer configures Schemas, Queries, and Mutations holistically, and allows the client to determine the end use.

### Schemas
A Schema is the collection of all query and mutation rules, aggregated into a rule set.

```javascript
const schema = new GraphQLSchema({
  query: RootQuery,
  mutation:Mutation,
});
```

### Resolvers
The resolvers job is to describe how to fetch or mutate data ... in other words, how to "Resolve" the user's request

For example, in a simple query that only supports one field (id), the resolver in this case uses the mongoose `findById()` method, sending the id argument along.  The resolver simply returns the result of that operation

```javascript
    todo: {
      type: TodoType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Todo.findById(args.id);
      },
    },
```

### Client Examples

**Fetch One Item, By ID**
```javascript
{
	todo (id:"5d183a0960ef482f24e18860") {
    id,
    text,
    complete
  }
}
```

**Fetch All Items**
```
{
	todos {
    id,
    text,
    complete
  }
}
```

**Fetch all items assigned to "John"**
```
{
	todos(assignee:"John") {
    id,
    text,
    category,
    complete
  }
}
```

**Add a new item**
```
mutation {
  addTodo(
    text:"This is a new thing",
    category:"Home",
    complete:false,
    assignee:"Fred",
    difficulty:1
  ), {
    id,text
  }
}
```
---
### Lots of dependencies ...
```javascript
  "dependencies": {
    "apollo": "^2.15.0",
    "apollo-boost": "^0.4.3",
    "apollo-fetch": "^0.7.0",
    "express": "^4.17.1",
    "express-graphql": "^0.8.0",
    "graphql": "^14.4.1",
    "graphql-request": "^1.8.2",
    "graphql-tag": "^2.10.1",
    "graphql-tools": "^4.0.5",
    "jest": "^24.8.0",
    "mongoose": "^5.6.2",
    "node-fetch": "^2.6.0"
  }
```
