// src/controllers/exampleController.js
const { Request, Response } = require('express');
const OffreSpecialeService = require('../services/OffreSpecialeService');

class OffreSpecialeController {

  async getOffre(req, res) {
    try {
      const data = await OffreSpecialeService.getData();
      res.json({ message: 'GET request successful', data });
    } catch (error) {
      console.error('Error in getExample:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  postOffre(req, res) {
    const postData = req.body;
    try {
      const result = OffreSpecialeService.processPostData(postData);
      res.json({ message: 'POST request successful', result });
    } catch (error) {
      console.error('Error in postExample:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

module.exports = new OffreSpecialeController();
