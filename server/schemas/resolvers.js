// import User model
const { User } = require('../models');
// import Authentication Error from apollo-server-express
const { AuthenticationError } = require('apollo-server-express');
// import signToken() function from utils
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      // check if context.user exists, if not, throw authentication error
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('savedBooks');
    
        return userData;
      }
    
      throw new AuthenticationError('Not logged in');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('savedBooks');
    },
  },

  Mutation: {
    // mutation to add new user, returns token and user
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
    },
    // mutation that accepts book's id, author, description, title, image, and link as parameters, returns User
    saveBook: async (parent, { input }, context) => {
      // check if context.user exists, if not, throw authentication error
      if (context.user) {
        // find user by id and add book to savedBooks array from input
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { savedBooks: input } },
          { new: true }
        ).populate('savedBooks');

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    // mutation that accepts a book's bookId to remove book from user's savedBooks array, returns User
    removeBook: async (parent, { bookId }, context) => {
      // check if context.user exists, if not, throw authentication error
      if (context.user) {
        // find user by id and remove book from savedBooks array by bookId
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId: bookId } } },
          { new: true }
        ).populate('savedBooks');

        return updatedUser;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;