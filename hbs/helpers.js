const hbs = require("hbs");

//jelpers
hbs.registerHelper("getYear", () => {
  return new Date().getFullYear();
});
