// src/routes/exampleRoutes.js
const express = require('express');
const OffreSpecialeController = require('../controllers/OffreSpecialeController');

const router = express.Router();

router.get('/', OffreSpecialeController.getOffre);
router.post('/', OffreSpecialeController.postOffre);

module.exports = router;