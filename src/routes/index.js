// src/routes/index.js
const express = require('express');
const exampleRoutes = require('./exampleRoutes');
const offreRoutes = require('./offrespecialeRoutes');

const router = express.Router();

router.use('/example', exampleRoutes);

router.use('/offre', offreRoutes);

module.exports = router;
