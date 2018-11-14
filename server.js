const express = require('express');
const app = express();
const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
};
const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
};

app.use(urlLogger, timeLogger);

app.use(express.static('public'));

app.get('/', (request, response) => {
});

app.get('/json', (request, response) => {
  response.status(200).json({"name": "Robbie"});
});

app.get('/sunsets', (request, response) => {
  response.sendFile(__dirname + '/public/sunsets.html');
});

app.listen(3000, () => {
  console.log('Express Intro running on localhost:3000');
});

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
})