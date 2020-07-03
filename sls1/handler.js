'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

 };

// this is only loaded by aws if the function is called to avoid unnecessary storage occupying
module.exports.todos = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      [
        { id: 1, title: "Complete serverless api", complete: false },
        { id: 2, title: "Create frontend", complete: true },
        { id: 3, title: "Speak", complete: false },
        { id: 4, title: "Create tweet", complete: false },
        { id: 5, title: "Kushani Tharushika Perera", complete: true },
        { id: 6, title: "16020669", complete: true },
      ],
      null,
      2
    ),
  };
};

module.exports.createTodo= async (event) => {
  console.log("Creating an event");
  console.log(`Type ${typeof event.body}`);
  return {
    statusCode: 200,
    body: event.body,
  };

};

module.exports.getTodo= async (event) => {
  console.log("Returning a todo");
  console.log(event);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {id: 1, title: "Complete serverless api", complete: false},
      null,
      2
    ),
  };
};

module.exports.updateTodo= async (event) => {
  console.log("Returning a todo");
  console.log(event);
  return {
    statusCode: 200,
    body: event.body,
  };
};

module.exports.deleteTodo= async (event) => {
  console.log("Returning a todo");
  console.log(event);
  return {
    statusCode: 200,
    body: "",
  };
};

 


