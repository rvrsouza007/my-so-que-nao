
module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'Publicacoes',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
            },
            texto: {
                type: DataTypes.STRING(45),
            },
            usuarios_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: {
                        tableName: 'usuarios'
                    },
                    key: "id"
                }
            },
            imagem: {
                type: DataTypes.STRING(45)
            }
        },
        {
            tableName: 'publicacoes',
            timestamps: false
        },
    )
}