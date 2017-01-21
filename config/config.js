var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'techmagic'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/techmagic-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'techmagic'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/techmagic-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'techmagic'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/techmagic-production'
  }
};

module.exports = config[env];
