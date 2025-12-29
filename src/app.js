const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.json({ oi: "oi" });
});

app.listen(PORT, () => {
  console.log(`Ouvindo porta: ${PORT}`);
});
