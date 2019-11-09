const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const { config } = require('./config');
const kindRoutes = require('./routes/kinds')

app.get('/', (request, response) => {
  //let userInfo = request.header("user-agent");
  //res.send(`UserInfo: ${userInfo}`);
  res.send('hola mundo')
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

kindRoutes(app);

app.listen(config.port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${config.port}`);
});