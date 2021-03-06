// const express = require("express");
// const path = require("path");

// const app = express();
// app.use(express.static(".dist/users-angular-app"));
// app.get("/*", (req, res) => {
//   // res.sendFile(path.join(_dirname, "/dist/users-angular-app/index.html"));
//   res.sendFile("index.html", { root: "." });
// });

// app.listen(process.env.PORT || 8080, () => {
//   console.log("server starterd from server.js!!");
// });

//Install express server
const express = require("express");
const path = require("path");

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/users-angular-app"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/users-angular-app/index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
