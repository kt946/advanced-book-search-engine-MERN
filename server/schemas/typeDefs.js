// import the gql tagged template function from apollo-server-express
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
`;

// export the typeDefs
module.exports = typeDefs;