const { Usuarios, sequelize } = require('../database/models');
const bycrypt = require('bcrypt');

module.exports = {
    create: (req, res) => {
        res.render('usuarioCreate.ejs');
    },
    store: async (req, res) => {
        // Capturar as informaç~eos vindas do formulário
        const { nome, email, senha, confirmacao } = req.body;

        // Verificar se a senha bate com a confirmação...
        // caso não bata, mandar msg de erro...e finalizar função

        // Inserir as informações no BD
        const u = await Usuarios.create(
            {
                nome,
                email,
                senha: bycrypt.hashSync(senha, 10)
            }
        )
        // Enviar uma mensagem de sucesso!
        res.send(u);
    },
}

