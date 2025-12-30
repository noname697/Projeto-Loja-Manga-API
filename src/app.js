const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE",
};

app.use(cors(corsOptions));

const rotasCompras = require("./routes/comprasRotas.js");
const rotasUsuarios = require("./routes/usuariosRotas.js");
const rotasProdutos = require("./routes/produtosRotas.js");

app.use(express.json());

app.use("/compras", rotasCompras);
app.use("/usuarios", rotasUsuarios);
app.use("/produtos", rotasProdutos);

app.listen(PORT, () => {
  console.log(`Ouvindo porta: ${PORT}`);
});
