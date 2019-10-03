'use strict';

const express = require('express');
const app = express();

const graph = require('./schemas/simple.js');
// const graph = require('./schemas/memory.js');
// const graph = require('./schemas/remote.js');
// const graph = require('./schemas/mongo.js');

app.use(graph);

app.listen(3000, () => console.log('up on 3000'));
