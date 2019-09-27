'use strict';

const express = require('express');
const expressGraphQL = require('express-graphql');
const { HttpLink } = require('apollo-link-http');
const fetch = require('node-fetch');

const router = express.Router();

const {
  introspectSchema,
  makeRemoteExecutableSchema
} = require('graphql-tools');


const setupRemote = async () => {

  const link = new HttpLink({ uri: 'https://api.graphql.jobs', fetch });
  const schema = await introspectSchema(link);

  const executableSchema = makeRemoteExecutableSchema({
    schema,
    link,
  });

  return expressGraphQL({
    schema: executableSchema,
    graphiql: true,
  });

};

setupRemote()
  .then( (graph) => {
    router.use('/graphql', graph);
  });

module.exports = router;
