const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.listen(60000, () => {
  console.log("Listening on port 60000") })