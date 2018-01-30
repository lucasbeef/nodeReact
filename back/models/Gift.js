const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  return sequelize.define('gift', {
    name: Sequelize.STRING
  });
}
