const {Usuarios, sequelize} = require('../database/models');

let teste = async () => {
    let usuarios = await Usuarios.findAll({include:["publicacoes", "amizades"]});
    let usuarioSimplicficado = usuarios.map(p => p.toJSON());
    console.log([0])
    sequelize.close();
}

teste();