// const ExampleModel = require('../models/ExampleModel');

const OffreSpeciale = require('../models/OffreSpeciale');

const config = require('../config/config');

async function getData() {
  try {
    const examples = await OffreSpeciale.find({});
    return examples;
  } catch (error) {
    console.error('Error fetching data from database:', error);
    throw error;
  }
}

function processPostData(postData) {
  const offreSpecialeModel = new OffreSpeciale(postData);
  offreSpecialeModel.save(); 
  return 'Données postées traitées avec succès';
}

module.exports = {
  getData,
  processPostData,
};
