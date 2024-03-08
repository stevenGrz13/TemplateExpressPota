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

module.exports = {
  getData,
  processPostData,
};
