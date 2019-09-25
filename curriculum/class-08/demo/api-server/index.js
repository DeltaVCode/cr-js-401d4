'use strict';

const mongoose = require('mongoose');
const server = require('./lib/server.js');

const MONGODB_URI = 'mongodb://localhost:27017/class-08';
mongoose.connect(MONGODB_URI);

server.start();
