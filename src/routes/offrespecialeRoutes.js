// src/routes/exampleRoutes.js
const express = require('express');
const OffreSpecialeController = require('../controllers/OffreSpecialeController');

const router = express.Router();

router.get('/', OffreSpecialeController.getExample);
router.post('/', OffreSpecialeController.postExample);

module.exports = router;