'use strict';

const { request } = require('graphql-request');

const query = `
  { message}
`;

request('http://localhost:3000/graphql', query).then(data =>
  console.log(data)
);


