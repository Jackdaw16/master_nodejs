const express = require('express');
const { addEmployed } = require('../controllers/employedController');

const router = express.Router();

router.post('/employed', addEmployed);

module.exports = {
    routes: router
};
