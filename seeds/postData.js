const { Post } = require("../model");

const postData = [
  {
    title: "What is MVC",
    post_date_created: "November 22, 2021 13:00:00",
    contents:
      "The Model-View-Controller (MVC) framework is an architectural pattern that adheres to the separation of concerns principle. The Model stores data and data-related logic.    The View is in charge of UI/UX concerns, or what a user will see and interact with.The Controller is the interface between Models and Views. It processes requests from the View, uses the Model to manipulate data, and sends data to the View to render.",
    post_creator_id: 1,
  },
  {
    title: "What is OOP",
    post_date_created: "November 22, 2021 08:00:00",
    contents:
      "Object-Oriented Programming (OOP) is when code is organized using objects instead of functions. Objects can inherit properties and methods from other objects. Multiple objects can be created from the same blueprint classes or constructor functions.",
    post_creator_id: 1,
  },
  {
    title: "What is React",
    post_date_created: "November 22, 2021 12:00:00",
    contents:
      "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.",
    post_creator_id: 2,
  },
  {
    title: "What is GraphQl",
    post_date_created: "November 22, 2021 18:00:00",
    contents:
      "GraphQL is an open-source data query and manipulation language for APIs, and a runtime for fulfilling queries with existing data.",
    post_creator_id: 2,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
