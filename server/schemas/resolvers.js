const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    // Write Query code for single user
    Query: {
        user: async (parent, args, context) => {  
            return await User.findOne({ _id: context.user._id }); 
          },
    },
    // write mutation code with an addUser/login/saveBook and deleteBook
    Mutation: {
        // addUser mutation
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            
            if (!user) {
                return res.status(400).json({ message: 'Error - 404 :/' });
              }

            const token = signToken(user);
            return { token, user };
        },

        // login mutation
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Sorry - There is no user found with the email address entered');
            }

            const userPassword = await user.isCorrectPassword(password);

            if (!userPassword) {
                throw new AuthenticationError('Sorry - There password entered is incorrect');
            }

            const token = signToken(user);
            return { token, user };
        
        },

        // saveBook mutation
        saveBook: async (parent, args, context) => {
            try {
                const updateSaveBook = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedBooks: args.criteria } },
                    { new: true, runValidators: true }
                );
                return updateSaveBook;
            } catch (err) {
                console.log(err);
                return err;
            }
        },

        // deleteBook mutation
        deleteBook: async (parent, args, context) => {
            const deleteSaveBook = await User.findOneAndUpdate(
                { _id: context.user._id },
                { $pull: { savedBooks: { bookId: args.bookId } } },
                { new: true }
            );
            if (!deleteSaveBook) {
                return res.status(404).json({ message: "Sorry - Couldn't Delete book with this ID" });
            }
            return deleteSaveBook;
        }
    }
};


// export file here
module.exports = resolvers;