require('dotenv').config()
const express = require("express");

const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("BytesWithAnkit");
});

app.get("/login", (req, res) => {
  res.send("<h1> Hello World, Please Login</h2>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Chai Aur Code</h2>");
});

app.get("/info", (req, res) => {
    res.json({1: "Ankit"})
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});
