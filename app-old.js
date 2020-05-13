const http = require("http");

http
  .createServer((req, res) => {
    res.write("howdy y'all");
    res.end();
  })
  .listen(8080);

console.log("listening on port 8080");
