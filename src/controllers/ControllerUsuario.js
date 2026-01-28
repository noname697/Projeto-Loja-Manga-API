const UsuarioService = require('../services/ServiceUsuario');

class ControllerUsuario {
    constructor(model = Usuario){
        super(model)
    }

    cadastrarUsuario = async (req, res) => {
        try{
            const usuario = await UsuarioService.criarUsuario(req.body)

            usuario.senha = undefined

            return res.status(201).json(usuario)
        } catch (error) {
            return res.status(400).json({ mensagem: error.message })
        }
    }
}

module.exports = ControllerUsuario