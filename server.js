const express = require("express");
const app = express();
const hbs = require("hbs");
require("./hbs/helpers");

port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

// Express hbs
hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "silvio ROS"
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));
