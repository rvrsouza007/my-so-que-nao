const express = require('express');
const UsuariosRouter = require("./routers/UsuariosRouter")

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.use('/', UsuariosRouter);

app.listen(3000, ()=>{console.log("to na porta 3000")});
