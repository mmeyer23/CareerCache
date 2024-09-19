const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db');

const app = express();

import applicationController from './applicationController.js';

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/status', (req, res) => {
  res.sendStatus(200);
});

app.get('/', applicationController.getAllApplications, (req, res) => {
  res.send(res.locals.allApps);
});

app.post('/', applicationController.addApplication, (req, res) => {
  res.send(res.locals.done);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(3000, () => {
  console.log('Server is listening on Port 3000!');
});
