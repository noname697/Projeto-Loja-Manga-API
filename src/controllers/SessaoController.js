const AuthService = require("../services/AuthService");

class SessaoController {
  store = async (req, res) => {
    try {
      const { email, senha } = req.body;
      const resultado = await AuthService.login(email, senha);

      return res.status(200).json(resultado);
    } catch (error) {
      return res.status(401).json({ erro: error.message });
    }
  };
}

module.exports = SessaoController;
