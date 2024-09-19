const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const connectDB = require('../db');

connectDB();

import applicationController from '../controllers/applicationController.js';

router.get('/status', (req, res) => {
  res.sendStatus(200);
});

router.get('/allapps', applicationController.getAllApplications, (req, res) => {
  res.send(res.locals.allApps);
});

// router.get(
//   '/:id',
//   applicationController.getIndividualApplication,
//   (req, res) => {
//     res.send(res.locals.allApps);
//   }
// );

router.post('/allapps', applicationController.addApplication, (req, res) => {
  res.send(res.locals.done);
});

module.exports = router;
