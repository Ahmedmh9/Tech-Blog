const { Comment } = require("../model");

const commentData = [
  {
    comment: "MVC makes life so much easier!",
    comment_date_created: "November 22, 2021 07:00:00",
    comment_creator_id: 2,
    post_id: 1,
  },
  {
    comment: "I love OOP!",
    comment_date_created: "November 21, 2021 5:00:00",
    comment_creator_id: 2,
    post_id: 2,
  },
  {
    comment: "React is kind hard first but ones you get use to it makes things easier !!",
    comment_date_created: "November 22, 2021 16:00:00",
    comment_creator_id: 1,
    post_id: 3,
  },
  {
    comment: "GraphQl make life easier rather than RESTful  API",
    comment_date_created: "November 23, 2021 08:00:00",
    comment_creator_id: 1,
    post_id: 4,
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
