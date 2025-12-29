const express = require("express");
const app = express();
const PORT = 8000;

const rotasPrincipais = require("./routes/routes.js");

app.use("/", rotasPrincipais);

app.listen(PORT, () => {
  console.log(`Ouvindo porta: ${PORT}`);
});
