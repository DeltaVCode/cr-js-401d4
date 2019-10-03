'use strict';

const User = require('./users-model');

module.exports = (req, res, next) => {
  try {
    let authorization = req.headers.authorization || '';
    let [authType, authString] = authorization.split(/\s+/);

    switch(authType.toLowerCase()) {
      case 'basic':
        return _authBasic(authString);
      default:
        return _authError();
    }
  } catch(e) {
    return _authError(e);
  }

  function _authBasic(basicString) {
    let base64Buffer = Buffer.from(basicString, 'base64');
    let bufferString = base64Buffer.toString();
    let [username,password] = bufferString.split(':');

    if (!password) {
      return _authError();
    }

    return User.authenticateBasic({ username, password })
      .then(user => _authenticate(user))
      .catch(_authError);
  }

  async function _authenticate(user) {
    if (user) {
      req.user = user;
      next();
    } else {
      _authError();
    }
  }

  async function _authError(error) {
    req.user = null;
    next({
      error,
      status: 401
    });
  }
};
