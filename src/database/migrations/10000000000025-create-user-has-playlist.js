module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_has_playlist', {
      user_id: {
        type: Sequelize.INTEGER,        
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      playlist_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      updated_at: Sequelize.DATE,
      created_at: Sequelize.DATE,
    }, {underscored: true});
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('user_has_playlist');
  },
};
