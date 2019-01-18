/**
 * Returns the appropriate credentials, depending on whether the application is deployed or in development.
 */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./config');
}
