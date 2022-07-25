
const publicacoes = [
  {
    id: 1,
    texto: "ja fiz isso!",
    usuarios_id: 1,
    imagem: "key.jng"
  },
  {
    id: 2,
    texto: "ja fiz isso!",
    usuarios_id: 1,
    imagem: "foreing.jng"
  },
  {
    id: 3,
    texto: "ja fiz isso!",
    usuarios_id: 2,
    imagem: "natalia.jng"
  },
  {
    id: 4,
    texto: "ja fiz isso!",
    usuarios_id: 2,
    imagem: "duda.jng"
  },
  {
    id: 5,
    texto: "ja fiz isso!",
    usuarios_id: 3,
    imagem: "ryee.jng"
  },
  {
    id: 6,
    texto: "ja fiz isso!",
    usuarios_id: 3,
    imagem: "rhuan.jng"
  },
]

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('publicacoes', publicacoes, {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('publicacoes', null, {});

  }
};