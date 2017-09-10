'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentAssoc = sequelize.define('StudentAssoc', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return StudentAssoc;
};