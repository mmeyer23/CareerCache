// const path = require('path');
const express = require('express');
const app = express();
const apiRouter = require('./routes/api');

const PORT = 3000;

//status checks
app.get('/status', (req, res) => res.sendStatus(200));
app.head('/status', (req, res) => res.sendStatus(200));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(apiRouter);

//error handler for unknown routes
app.use((req, res) => res.status(404).send('Page not found'));

//global error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(PORT, () => {
  console.log('Server is listening on Port 3000!');
});

module.exports = app;
