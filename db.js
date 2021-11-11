const Sequelize = require('sequelize');
const config = require('./config');

const EmployedModel = require('./models/employed');
const ResponsableModel = require('./models/responsable');

const sequelize = new Sequelize(config.databaseConfig.database, config.databaseConfig.user, config.databaseConfig.password, {
    host: config.host,
    dialect: 'mysql'
});

const Employed = EmployedModel(sequelize, Sequelize);
const Responsable = ResponsableModel(sequelize, Sequelize);

sequelize.sync({alter: true}).then( () => console.log('Tabla sincronizada'));

module.exports = {
    Employed,
    Responsable
};
