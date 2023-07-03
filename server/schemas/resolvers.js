const { User } = require('../models');
const { Query } = require('mongoose');
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
        addUser: 

        }

        login: 
        
        }

        saveBook: 
        
        }

        deleteBook: 
        
        }
    }
};


// export file here
module.exports = resolvers;