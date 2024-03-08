// src/database/database.js
const mongoose = require('mongoose');
const config = require('../config/config');
const OffreSpeciale = require('../models/OffreSpeciale');
// require('dotenv').config();

const connectDB = async () => {
  try {
  //   // offline
    await mongoose.connect(`mongodb://localhost:27017/First`);
  //   //online
  //   // await mongoose.connect(`mongodb+srv://${config.user}:${config.password}@cluster1.xys21au.mongodb.net/${config.database}`);
      
  //   const newOffreSpeciale = new OffreSpeciale({ nom: 'john', description: 1, date_debut: new Date('1990-01-01'), date_fin: new Date('1990-01-01') });
  //   newOffreSpeciale.save()
  //   .then(() => {
  //     console.log('Utilisateur ajouté avec succès!');
  //   })
  //   .catch(error => {
  //     console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
  //   });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = connectDB;
