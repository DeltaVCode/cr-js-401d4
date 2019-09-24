const chalk = require('chalk');

// currying / curried function
module.exports = (color, label = '') => {

  let log = chalk.keyword(color);

  return (req, res, next) => {
    log(`${req.method} ${req.path} at ${req.requestTime.toISOString()}`)
    next();
  }
}
