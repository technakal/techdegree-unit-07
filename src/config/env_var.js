/**
 * Returns the appropriate credentials, depending on whether the application is deployed or in development.
 */
if (process.env.NODE_ENV !== 'development') {
  console.log(process.env.NODE_ENV);
  // use prod keys
  module.exports = require('./prod');
} else {
  console.log(process.env.NODE_ENV);
  // use dev keys
  module.exports = require('./config');
}
