'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'publicacoes',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
        },
        texto: {
          type: Sequelize.DataTypes.STRING(45),
        },
        usuarios_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: {
              tableName: 'usuarios'
            },
            key: "id"
          }
        },
        imagem: {
          type: Sequelize.DataTypes.STRING(45)
        }
      }
    );

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('publicacoes');

  }
};
