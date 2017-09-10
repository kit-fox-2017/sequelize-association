'use strict';
module.exports = function(sequelize, DataTypes) {
  const SubjectAssoc = sequelize.define('SubjectAssoc', {
    subject_name: DataTypes.STRING
  })
  const TeacherAssoc = sequelize.define('TeacherAssoc', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    subjectID: DataTypes.INTEGER
  });

  TeacherAssoc.associate = (models) => {
    TeacherAssoc.belongsTo(SubjectAssoc, {foreignKey: 'subjectID'})
  }

  return TeacherAssoc;
};
