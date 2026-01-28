class ServiceUsuario extends Service {
  constructor(model = Usuario) {
    super(model);
  }

  criarUsuario = async (dados) => {
    const { nome, email, senha } = dados;
    const usuarioExiste = await this.model.findOne({ where: { email } });

    if (usuarioExiste) throw new Error("Usuário já cadastrado");

    const senhaHash = await bcrypt.hash(senha, 8);

    const novoUsuario = await this.model.create({
      nome,
      email,
      senha: senhaHash,
    });

    return novoUsuario;
  };
}

module.exports = new ServiceUsuario();
