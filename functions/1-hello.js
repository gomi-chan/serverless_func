//domain/.netlify/functions/1-hello

// const person = { name: "john" };

exports.handler = async (event, context, cd) => {
  return {
    statusCode: 200,
    // body: JSON.stringify(person),
    body: "Hello world",
  };
};
