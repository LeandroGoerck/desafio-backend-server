module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('playlist_has_music', {
      music_id: {
        type: Sequelize.INTEGER,        
        allowNull: false,
        autoIncrement: true,
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
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('playlist_has_music');
  },
};
