module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('user', [
      {
        name: 'admin',
        role: 'ADMIN',
        email: 'user@user.com',
        password: '$2a$12$OK/pX188YyGBUg2KA1QJ/.Lsmd13a8zf53CUryMbBK/V24Sqd8PJW', // admin
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('user', null, {});
  },
};
