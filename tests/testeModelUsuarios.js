const {Usuarios} = require('../database/models');

let teste = async () => {
    let usuarios = await Usuarios.findAll();
    console.log(usuarios);
}

teste();