'use strict';
const { Op } = require("sequelize")
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

const membership = [
  {
    groupId: 1,
    UserId: 1,
    status: "co-host"
  },
  {
    groupId: 1,
    UserId: 2,
    status: "organizer"
  },
  {
    groupId: 1,
    UserId: 3,
    status: "member"
  },
  {
    groupId: 2,
    UserId: 4,
    status: "organizer"
  },
  {
    groupId: 2,
    UserId: 5,
    status: "co-host"
  },
  {
    groupId: 2,
    UserId: 6,
    status: "member"
  },
  {
    groupId: 2,
    UserId: 2,
    status: "pending"
  },
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    options.tableName = 'Memberships';

    return queryInterface.bulkInsert(options, membership,
    {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Memberships';
  return queryInterface.bulkDelete(options, {[Op.or]:membership},{});
}
}