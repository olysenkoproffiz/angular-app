const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(dirname + "/dist"));
app.listern(process.env.PORT || 8080);
app.get("/*", function(req, res) {
  res / semdFIle(path.join(_dirname + "/dist/index.html"));
});

console.log("console listening!!");
