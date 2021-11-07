'use strict';

const employed = require('../models/employed');

const mysql = require('mysql');
const config = require('../config');
const mysqlConnection = mysql.createConnection(config.databaseConfig);

mysqlConnection.connect(function (error) {
    if (error){
        console.log(error);
    } else {
        console.log('Database connected');
    }
});

const getAllEmployed = async (request, response) => {
  try {
      await mysqlConnection.query('select * from employees', (error, rows, fields) => {
         if (!error && rows.length > 0)
             response.json(rows);
         else
             response.status(404).send('Not found');
      });
  }  catch (e) {
      response.status(500).send(e.message)
  }
};

const getEmployed = async (request, response) => {
  try {
      const { id } = request.params;
      await mysqlConnection.query('select * from employees where id = ?', [id], (error, rows, fields) => {
          if (!error && rows.length > 0)
              response.json(rows);
          else
              response.status(404).send('Not found');
      })
  }  catch (e) {
      response.status(500).send(e.message)
  }
};

const createEmployed = async (request, response) => {
    try {
        const { name, salary } = request.body;
        await mysqlConnection.query('insert into employees (name, salary) values (?, ?)', [name, salary], (error, rows, fields) => {
            if (!error)
                response.status(200).send('Created');
            else
                response.status(500).send(error.message)

        })
    } catch (e) {
        response.status(500).send(e.message)
    }
};

const updateEmployed = async (request, response) => {
    try {
        await mysqlConnection.query('update employees set ? where id = ?', [request.body, request.params.id], (error, rows, fields) => {
            if (!error)
                response.status(200).send('Updated');
            else
                response.status(500).send(error.message)

        })
    } catch (e) {
        response.status(500).send(e.message)
    }
};

const deleteEmployed = async (request, response) => {
    try {
        await mysqlConnection.query('delete from employees where id = ?', [request.params.id], (error, rows, fields) => {
            if (!error)
                response.status(200).send('Deleted');
            else
                response.status(500).send(error.message)

        })
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
