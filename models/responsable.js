const Employed = require('./employed');

module.exports = (sequelize, type) => {
  const Responsable = sequelize.define('responsables', {
      id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name: type.STRING,
      project: type.STRING,
  });

  Responsable.hasMany(Employed);

  return Responsable;
};


