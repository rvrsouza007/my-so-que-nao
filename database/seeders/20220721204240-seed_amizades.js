
const amizades = [
  {
    id: 1,
    usuarios_id1:2,
    usuarios_id2:3,
    aceita: "1"
  },
  {
    id: 2,
    usuarios_id1:1,
    usuarios_id2:3,
    aceita: "1"
  },
  {
    id: 3,
    usuarios_id1:2,
    usuarios_id2:1,
    aceita: "0"
  },
]

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('amizades', amizades, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('amizades', null, {});

  }
};