'use strict';

const express = require('express');
const graphql = require('graphql');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');

const router = express.Router();

mongoose.connect('mongodb://localhost:27017/class10', { useNewUrlParser: true });

// Standard Mongoose Schema. We'll use this to run queries from the resolvers
const peopleSchema = mongoose.Schema({
  firstName: { type:String, required:true },
  lastName: { type:String, required:true },
  role: { type:String, required:true },
});
const People = mongoose.model('people', peopleSchema);

// Get some constants from graphQL (this is just some object deconstruction)
const {
  GraphQLObjectType, GraphQLString,
  GraphQLID, GraphQLInt,GraphQLSchema,
  GraphQLList,GraphQLNonNull,GraphQLBoolean,
} = graphql;

// Describe a person in graphQL Terms (feels repetitive)
const PeopleType = new GraphQLObjectType({
  name: 'People',
  fields: () => ({
    id: { type: GraphQLID  },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    role: { type: GraphQLString }
  }),
});

// Describe the query types (person and people) and their resolvers (how we get the actual data)
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    person: {
      type: PeopleType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return People.findById(args.id);
      },
    },
    people:{
      type: new GraphQLList(PeopleType),
      args: {
        id: { type: GraphQLID },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        role: { type: GraphQLString },
      },
      resolve(parent, args) {
        return People.find(args);
      },
    },
  },
});

// Describe the shape of the object for write ops
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addPeople: {
      type: PeopleType,
      args: {
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        role: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let person = new People({
          firstName: args.firstName,
          lastName: args.lastName,
          role: args.role
        });
        return person.save();
      },
    },
  },
});


// As with all GraphQL Endpoints, create a schema, and start up a server with it.
const schema = new GraphQLSchema({
  query: RootQuery,
  mutation:Mutation,
});

const graph = expressGraphQL({
  schema: schema,
  graphiql: true,
});

router.use('/graphql', graph);

module.exports = router;

