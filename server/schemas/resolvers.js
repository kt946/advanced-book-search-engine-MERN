// import User model
const { User } = require('../models');
// import Authentication Error from apollo-server-express
const { AuthenticationError } = require('apollo-server-express');
// import signToken() function from utils
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('savedBooks');
    },
  },

  Mutation: {
    // mutation to add user, returns token and user
    addUser: async (parent, args) => {
      // create user from arguments (username, email, password)
      const user = await User.create(args);
      // create token
      const token = signToken(user);
      // return token and user
      return { token, user };
    },
    // mutation to login user, returns token and user
    login: async (parent, { email, password }) => {
      // find user based on unique email
      const user = await User.findOne({ email });
    
      // if user doesn't exist, display error message
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      // check if password is correct
      const correctPw = await user.isCorrectPassword(password);
    
      // if password is incorrect, display error message
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
    
      // create token
      const token = signToken(user);
      // return token and user
      return { token, user };
    }
  }
};

module.exports = resolvers;