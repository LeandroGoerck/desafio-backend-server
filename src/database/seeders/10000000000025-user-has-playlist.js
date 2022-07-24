module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'user_has_playlist',
      [
        {
          user_id: 1,
          playlist_id: 1,
        },
        {
          user_id: 2,
          playlist_id: 2,
        },
        {
          user_id: 3,
          playlist_id: 3,
        },
        {
          user_id: 4,
          playlist_id: 4,
        },
        {
          user_id: 5,
          playlist_id: 5,
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('user_has_playlist', null, {});
  },
};
