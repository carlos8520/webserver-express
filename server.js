const express = require("express");
const app = express();
const hbs = require("hbs");
require("./hbs/helpers");

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

//Express HBS engine
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Y'all",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {});
});

app.get("/data", (req, res) => {
  res.send("howdy data world");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
