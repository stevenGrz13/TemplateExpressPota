// src/controllers/exampleController.js
const { Request, Response } = require('express');
const ExampleService = require('../services/ExampleService');

class ExampleController {

  antsoina(req, res){
    res.json({message: 'VOAANTSO LE FONCTION'});
  }

  async insertUser(req, res) {
    try {
      // Récupérer les informations nécessaires depuis les paramètres de requête
      const { nom, description, date_debut, date_fin } = req.query;

      // Valider les paramètres (vous pouvez ajouter une validation plus robuste si nécessaire)

      // Appeler le service pour insérer l'utilisateur
      const result = await ExampleService.insertUser({ nom, description, date_debut, date_fin }); 

      res.json({ message: 'Utilisateur inséré avec succès', result });
    } catch (error) {
      console.error('Erreur lors de l\'insertion de l\'utilisateur:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  async getExample(req, res) {
    try {
      const data = await ExampleService.getData();
      res.json({ message: 'GET request successful', data });
    } catch (error) {
      console.error('Error in getExample:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  postExample(req, res) {
    const postData = req.body;
    try {
      const result = ExampleService.processPostData(postData);
      res.json({ message: 'POST request successful', result });
    } catch (error) {
      console.error('Error in postExample:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}

module.exports = new ExampleController();
