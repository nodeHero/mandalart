var path = require('path'),
  rootPath = path.normalize(__dirname + '/..'),
  env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'mandalart'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost:27017/mandalart'
    // db: 'mongodb://localhost/mandalart-dev'
  },

  production: {
    root: rootPath,
    app: {
      name: 'mandalart'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/mandalart'
  }
};

module.exports = config[env];
