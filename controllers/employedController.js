'use strict';

const firebase = require('../db');
const employed = require('../models/employed');

const firestore = firebase.firestore;

const addEmployed = async (request, response, next) => {
  try {
      const data = request.body;
      await firestore.collection('employees').doc().set(data);
      response.send('Data saved successfuly');
  }  catch (e) {
      response.status(500).send(error.message);
  }
};

module.exports = {
    addEmployed
};
