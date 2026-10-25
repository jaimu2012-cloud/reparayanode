const express = require("express");

const app = express();

const port = 3000;

app.get("/contacto", (req, res) => {
  res.sendFile(__dirname + "/contacto.html");
});

module.exports = app;