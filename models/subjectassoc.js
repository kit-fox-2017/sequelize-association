'use strict';
module.exports = function(sequelize, DataTypes) {
  var SubjectAssoc = sequelize.define('SubjectAssoc', {
    subject_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return SubjectAssoc;
};