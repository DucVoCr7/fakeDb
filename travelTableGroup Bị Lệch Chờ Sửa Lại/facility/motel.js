'use strict';
const Columns = require('../columns/column.js');

const { DataTypes } = require('sequelize');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('motel', {
      ...Columns.id_createdAt_updatedAt(),
      ...Columns.name_email_password(),
      ...Columns.status_level(),
      ...Columns.phone_phoneId(),
      ...Columns.addressFull(),
      ...Columns.lat_lng(),
      ...Columns.facility(),
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('motel');
  },
}; // Ok
