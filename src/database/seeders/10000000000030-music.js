module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'music',
      [
        {
          name: 'We Will Rock You ',
          genre_id: 1,
          artist_id: 1,
        },
        {
          name: "It\’s Only Rock \‘n\’ Roll (But I Like It)",
          genre_id: 1,
          artist_id: 2,
        },
        {
          name: 'My Generation',
          genre_id: 1,
          artist_id: 3,
        },
        {
          name: 'Stairway To Heaven',
          genre_id: 1,
          artist_id: 4,
        },
        {
          name: 'Enter Sandman',
          genre_id: 1,
          artist_id: 5,
        },
      ],
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('music', null, {});
  },
};
