const { User } = require('../model');

const userData = [
  {
    username: 'techBlogUser1',
    email: 'Joe@joe.com',
    password: 'hash1'
  },
  {
    username: 'techBlogUser2',
    email: 'user2@test.com',
    password: 'hash2'
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;