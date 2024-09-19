const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const connectDB = require('../db');

connectDB();

import applicationController from '../controllers/applicationController.js';

router.get('/status', (req, res) => {
  res.sendStatus(200);
});

router.get('/', applicationController.getAllApplications, (req, res) => {
  res.send(res.locals.allApps);
});

router.post('/', applicationController.addApplication, (req, res) => {
  res.send(res.locals.done);
});

module.exports = router;
