var Sequelize = require('sequelize')

var exports = module.exports = {};

var instance;

exports.createInstance = function() {
  var sequel = new Sequelize('santaDB', null, null, {
    host: 'localhost',
    dialect: 'sqlite',
    omitNull: true,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    storage: './santaDB.sqlite'
  });

  sequel.sync()
  return sequel
}

exports.getInstance = function() {
  if (!instance) {
    instance = this.createInstance()
  }

  return instance
}
