const fs = require('fs');
const path = require('path');
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.resolve(__dirname, './schema.graphql')).toString(),
  resolvers,
  formatError: error => {
    console.log(error);
    return error;
  },
});

module.exports = async function installAPIHandler(app) {
  await server.start()

  app.use('/graphql', express.json(), expressMiddleware(server));
}
