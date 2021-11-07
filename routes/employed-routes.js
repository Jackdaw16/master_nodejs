const express = require('express');
const { getAllEmployed, getEmployed, createEmployed, updateEmployed, deleteEmployed } = require('../controllers/employedController');

const router = express.Router();

router.get('/employed', getAllEmployed);
router.get('/employed/:id', getEmployed);
router.post('/employed', createEmployed);
router.put('/employed/:id', updateEmployed);
router.delete('/employed/:id', deleteEmployed);

module.exports = {
    routes: router
};
