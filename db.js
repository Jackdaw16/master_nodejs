const Sequelize = require('sequelize');
const config = require('./config');

const EmployedModel = require('./models/employed');

const sequelize = new Sequelize(config.databaseConfig.database, config.databaseConfig.user, config.databaseConfig.password, {
    host: config.host,
    dialect: 'mysql'
});

const Employed = EmployedModel(sequelize, Sequelize);

sequelize.sync({force: false}).then( () => console.log('Tabla sincronizada'));

module.exports = {
    Employed
};
