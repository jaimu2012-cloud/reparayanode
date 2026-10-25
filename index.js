const express = require("express");

const app = express();

const port = 3000;

app.get("/contacto", (req, res) => {
  res.sendFile(__dirname + "/contacto.html");
});

app.listen(port, () => {
  console.log(`el servidor esta corriendo en el puerto http://localhost:${port}`);
});