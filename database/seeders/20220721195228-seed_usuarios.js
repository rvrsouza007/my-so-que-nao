const bcrypt = require('bcrypt')

const usuarios = [
  {
    id: 1,
    nome: "Rhuan Victor",
    email: "rhuanramos762@gmail.com",
    senha: bcrypt.hashSync("1234567", 10),
    foto: "rhuan.jng"
  },
  {
    id: 2,
    nome: "Duda alves",
    email: "dudinha02@gmail.com",
    senha: bcrypt.hashSync("12345", 10),
    foto: "Duda.jng"
  },
  {
    id: 3,
    nome: "Ryee",
    email: "ryee777@gmail.com",
    senha: bcrypt.hashSync("123456", 10),
    foto: "ryee.jng"
  },
]

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', usuarios, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('usuarios', null, {});

  }
};
