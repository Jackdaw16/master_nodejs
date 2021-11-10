module.exports = (sequelize, type) => {
  return sequelize.define('employees', {
      id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name: type.STRING,
      salary: type.DOUBLE
  })
};
