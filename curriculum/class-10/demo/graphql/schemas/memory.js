
'use strict';
const express = require('express');
const { buildSchema } = require('graphql');
const expressGraphQL = require('express-graphql');

const router = express.Router();

// In-Memory database (array of objects)
const people = [
  { id: 1, firstName: 'Jim', lastName: 'Smith', role: 'Parent' },
  { id: 2, firstName: 'Sally', lastName: 'Smith', role: 'Parent' },
  { id: 3, firstName: 'Allison', lastName: 'Smith', role: 'Child' },
  { id: 4, firstName: 'Timmy', lastName: 'Smith', role: 'Child' },
  { id: 5, firstName: 'Freckles', lastName: 'Smith', role: 'Pet' },
];

// GraphQL schema
// Identifying what types of lookups we will allow
// Person is an object type, People is an array of those
const inMemorySchema = buildSchema(`
    type Query {
        person(id: Int!): Person
        people(lastName: String, role:String): [Person]
    },
    type Person {
        id: Int
        firstName: String
        lastName: String
        role: String
    }
`);

// Methods to fetch a person or a list of people from that list.
const getPerson = function(args) {
  let id = args.id;
  return people.filter(person => {
    return person.id == id;
  })[0];
};

const getPeople = function(args) {
  if (Object.keys(args).length) {
    return people.filter(person => {
      return (args.lastName ? args.lastName === person.lastName : true) &&
        (args.role ? args.role === person.role : true)
    });
  } else {
    return people;
  }
};

// Set the rootValue for our query ... these are things that people can search for
const inMemoryRoot = {
  person: getPerson,
  people: getPeople,
};

const graph = expressGraphQL({
  schema: inMemorySchema,
  rootValue: inMemoryRoot,
  graphiql: true,
});

router.use('/graphql', graph);

module.exports = router;
