const { Usuario } = require("../database/models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

class AuthService {
  login = async (email, senha) => {
    const usuario = await Usuario.findOne({
      where: {
        email: email,
      },
    });

    if (!usuario) throw new Error("Email ou senha inválidos");

    const senhaValida = await bcrypt.compare(senha, usuario.senha);
    if (!senhaValida) throw new Error("Email ou senha inválidos");

    const secret = process.env.JWT_SECRET;
    const token = jwt.sign({ id: usuario.id, email: usuario.email }, secret, {
      expiresIn: "1d",
    });
    return {
      usuario: { id: usuario.id, nome: usuario.nome, email: usuario.email },
      token,
    };
  };
}

module.exports = new AuthService;
