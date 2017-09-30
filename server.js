const express = require('express'),
      app = express(),
      fs = require('fs'),
      bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("Listening on " + port);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname+"/index.html");
})

app.get("/v/:folder/:file", (req, res) => {
  const r = req.params;
  res.sendFile(`${__dirname}/view/${r.folder}/${r.file}`);
});

app.get("/c/:file", (req, res) => {
  const r = req.params;
  res.sendFile(`${__dirname}/controllers/${r.file}`);
});
