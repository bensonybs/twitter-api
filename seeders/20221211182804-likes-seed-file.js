'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const LIKES_NUMBER = 36
    const users = await queryInterface.sequelize.query("SELECT id FROM Users WHERE `role` <> 'admin'", { type: queryInterface.sequelize.QueryTypes.SELECT })
    const tweets = await queryInterface.sequelize.query('SELECT id FROM Tweets', { type: queryInterface.sequelize.QueryTypes.SELECT })
    await queryInterface.bulkInsert(
      'Likes',
      Array.from({ length: LIKES_NUMBER }, () => ({
        UserId: users[Math.floor(Math.random() * users.length)].id,
        TweetId: tweets[Math.floor(Math.random() * tweets.length)].id,
        createdAt: new Date(),
        updatedAt: new Date()
      })),
      {}
    )
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Likes', null, {})
  }
}