// A hello world app for express.js
const express = require('express'),
app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(80);
