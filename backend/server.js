const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/router.js");
const mongoose = require("mongoose");
require("dotenv/config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use("/", router);

const uri = process.env.DB_URI.replace("<username>", process.env.DB_USER).replace("<password>", process.env.DB_PASS)
mongoose
  .connect(uri)
  .then(() => {
    console.log("Conexión a DB correcta!");
  })
  .catch((err) => console.log(err));

const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`Servidor funcionando en el puerto ${port}`);
});

server.listen(port).on("error", /*...*/)
