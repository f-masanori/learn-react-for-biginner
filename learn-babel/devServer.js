const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/index.html");
});

app.use(express.static(__dirname + "/lib"));

app.listen(3000, () => {
  console.log("Start server port:3000");
});
