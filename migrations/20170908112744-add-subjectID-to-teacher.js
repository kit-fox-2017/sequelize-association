'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.addColumn(
      'TeacherAssocs',
      'subjectID',
      Sequelize.INTEGER
    )

    queryInterface.addConstraint('TeacherAssocs', ['subjectID'], {
      type: 'FOREIGN KEY',
      name: 'custom_fkey_constraint_name',
      references: { //Required field
        table: 'SubjectAssocs',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
