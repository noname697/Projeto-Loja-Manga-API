const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE",
};

app.use(cors(corsOptions));

const rotaLogin = require("./routes/loginRota.js");
const rotasCompras = require("./routes/comprasRotas.js");
const rotasUsuarios = require("./routes/usuariosRotas.js");
const rotasProdutos = require("./routes/produtosRotas.js");

app.use(express.json());

app.use("/login", rotaLogin);
app.use("/compras", rotasCompras);
app.use("/usuarios", rotasUsuarios);
app.use("/produtos", rotasProdutos);

app.listen(process.env.PORT, () => {
  console.log(`Ouvindo porta: ${process.env.PORT}`);
});
