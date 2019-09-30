'use strict';

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

    req.user = { username };

    next();
  }

  function _authError(error) {
    req.user = null;
    return next({
      error,
      status: 401
    });
  }
};
