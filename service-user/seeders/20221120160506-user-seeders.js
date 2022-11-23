'use strict'
const bcrypt = require('bcrypt')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Danang',
        profession: 'Software Developer',
        role: 'admin',
        email: 'danang@gmail.com',
        password: await bcrypt.hash('qwerty', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Saputro',
        profession: 'Software Developer',
        role: 'student',
        email: 'saputro@gmail.com',
        password: await bcrypt.hash('q1w2e3r4', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
}
