// const ExampleModel = require('../models/ExampleModel');

const ExampleModel = require("../models/ExempleModel");

const OffreSpeciale = require('../models/OffreSpeciale');

const mongoose = require('mongoose');
const config = require('../config/config');

async function getData() {
  try {
    const examples = await ExampleModel.find({});
    return examples;
  } catch (error) {
    console.error('Error fetching data from database:', error);
    throw error;
  }
}

function processPostData(postData) {
  const exampleModel = new ExampleModel(postData);
  exampleModel.save();
  return 'Données postées traitées avec succès';
}

async function insertUser(nom, desc, date_debut, date_fin) {
  await mongoose.connect(`mongodb://localhost:27017/${config.database}`);
  var offrespec = new OffreSpeciale({ nom: nom, description: desc, date_debut: new Date(date_debut), date_fin: new Date(date_fin) });
  const savedUser = await offrespec.save();
  return savedUser; 
}

module.exports = {
  getData,
  processPostData,
  insertUser,
};
