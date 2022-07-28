const {Usuarios, sequelize} = require('../database/models');

let teste = async () => {
    let usuarios = await Usuarios.findAll();
    console.log(usuarios.map(p => p.toJSON()));
    sequelize.close();
}

teste();