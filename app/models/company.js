module.exports = (sequelize, Sequelize) => {
    const Company = sequelize.define("company", {
      cin: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
    });
  
    return Company;
  };