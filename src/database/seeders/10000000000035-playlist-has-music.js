module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'playlist_has_music',
      [
        {
          music_id: 1,
          playlist_id: 1,
        },
        {
          music_id: 2,
          playlist_id: 1,
        },
        {
          music_id: 3,
          playlist_id: 3,
        },
        {
          music_id: 4,
          playlist_id: 4,
        },
        {
          music_id: 5,
          playlist_id: 5,
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('playlist_has_music', null, {});
  },
};
