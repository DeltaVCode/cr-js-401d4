'use strict';

const User = require('./users-model.js');

module.exports = (req, res, next) => {

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
    let user = await User.authenticateToken(token);
    return _authenticate(user);
  }

  async function _authenticate(user) {
    if ( user ) {
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

