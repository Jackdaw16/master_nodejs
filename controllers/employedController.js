'use strict';

const { Employed } = require('../db');

const getAllEmployed = async (request, response) => {
  try {
      return response.json(await Employed.findAll());
  }  catch (e) {
      response.status(500).send(e.message)
  }
};

const getEmployed = async (request, response) => {
    try {
        const employed = await Employed.findAll({
            where: { id: request.params.id }
        });

        if (employed === null)
            return response.status(400).send('Not found');

        return response.json(employed);
    }  catch (e) {
        response.status(500).send(e.message)
    }
};

const createEmployed = async (request, response) => {
    try {
        const employed = await Employed.create(request.body);

        return response.status(200).send(response.json(employed));
    } catch (e) {
        response.status(500).send(e.message)
    }
};

const updateEmployed = async (request, response) => {
    try {
        const employed = await Employed.update(request.body, {
            where: { id: request.params.id }
        });

        if (employed === null)
            return response.status(404).send('Not Found');

        return response.status(200).send('Success')
    } catch (e) {
        response.status(500).send(e.message)
    }
};

const deleteEmployed = async (request, response) => {
    try {
        const employed = await Employed.destroy({
            where: { id: request.params.id }
        });

        if (employed === null)
            return response.status(404).send('Not Found');

        return response.status(200).send('Success')
    } catch (e) {
        response.status(500).send(e.message)
    }
};



module.exports = {
    getAllEmployed,
    getEmployed,
    createEmployed,
    updateEmployed,
    deleteEmployed
};
