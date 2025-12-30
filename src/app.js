const express = require("express");
const app = express();
const PORT = 8000;

const rotasCompras = require("./routes/comprasRotas.js");
const rotasUsuarios = require("./routes/usuariosRotas.js");
const rotasProdutos = require("./routes/produtosRotas.js");

app.use("/compras", rotasCompras);
app.use("/usuarios", rotasUsuarios);
app.use("/produtos", rotasProdutos);

app.listen(PORT, () => {
  console.log(`Ouvindo porta: ${PORT}`);
});
