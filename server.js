process.env.ROOT_PATH = __dirname;

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
