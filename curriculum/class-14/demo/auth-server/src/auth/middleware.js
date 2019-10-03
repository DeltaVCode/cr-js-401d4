'use strict';

const jwt = require('jsonwebtoken');
const User = require('./users-model.js');
const usedTokens = [];

module.exports = (capability) =>
  (req, res, next) => {

  try {

    let [authType, encodedString] = req.headers.authorization.split(/\s+/);

    // BASIC Auth  ... Authorization:Basic ZnJlZDpzYW1wbGU=

    switch(authType.toLowerCase()) {
      case 'basic':
        return _authBasic(encodedString);
      case 'bearer':
        return _authBearer(encodedString);
      default:
        return _authError();
    }

  } catch(e) {
    return _authError();
  }

  function _authBasic(authString) {
    let base64Buffer = Buffer.from(authString,'base64'); // <Buffer 01 02...>
    let bufferString = base64Buffer.toString(); // john:mysecret
    let [username,password] = bufferString.split(':');  // variables username="john" and password="mysecret"
    let auth = {username,password};  // {username:"john", password:"mysecret"}

    return User.authenticateBasic(auth)
      .then( user => _authenticate(user) );
  }

  async function _authBearer(token) {
    // TODO: should this live in User.authenticateToken(token)
    if(process.env.TOKEN_ONE_TIME) {
      try {
        let { type } = jwt.decode(token);
        if (type !== 'key' && usedTokens.indexOf(token) >= 0) {
          return _authError();
        }
        else {
          usedTokens.push(req.token);
        }
      }catch(error) {
        return _authError();
      }
    }

    let user = await User.authenticateToken(token);
    return _authenticate(user);
  }

  async function _authenticate(user) {
    if ( user ) {
      if (capability && !user.can(capability)) {
        console.log("CAN'T", capability, user);
        await _authError();
      }
      req.user = user;
      req.token = user.generateToken();
      next();
    }
    else {
      await _authError();
    }
  }

  async function _authError() {
    res.set('WWW-Authenticate', 'basic');
    next({status: 401, statusMessage: 'Unauthorized', message: 'Invalid User ID/Password'});
  }

};

