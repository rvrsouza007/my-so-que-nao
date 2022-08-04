module.exports = (sequelize, DataTypes) => {
    let u = sequelize.define(
        "Usuarios",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            nome: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(45),
                allowNull: false,
            },
            senha: {
                type: DataTypes.STRING(64),
                allowNull: false,
            },
            foto: {
                type: DataTypes.STRING(45),
                allowNull: true,
            }
        },
        {
            tableName: "usuarios",
            timestamps: false
        },
    )

    u.associate = (models) => {
        u.hasMany(models.Publicacoes, { as: "publicacoes", foreignKey: "usuarios_id" });
        u.belongsToMany(
            models.Usuarios,
            {
                as: "friends", 
                through:"amizades", 
                foreignKey:"usuarios_id1", 
                otherKey:"usuarios_id2", 
                timestamps: false
            }
        );
    }

    return u;
}