module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('playlist', {
      id: {
        type: Sequelize.INTEGER,        
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      genre: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('playlist');
  },
};
