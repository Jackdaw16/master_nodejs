const Responsable = require('./responsable');

module.exports = (sequelize, type) => {
  const Employed = sequelize.define('employees', {
      id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name: type.STRING,
      salary: type.DOUBLE,
  });

  Employed.belongsTo(Responsable);

  return Employed;
};


