export const typeDefs = `
    type User {  
        id: Int!
        firstName: String! 
        lastName: String! 
        age: Int! 
        email: String! 
        password: String
        confirmed: Boolean
    }
    type Query {
        getUser(id: Int!): User!
        getAllUsers: [User!]!
    }
    type Mutation {
        signup(firstName: String!, lastName: String!, age: Int!, email: String!, password: String!): String
        createUser(firstName: String!, lastName: String!, age: Int!, email: String!): User!
        updateUser(id: Int!, firstName: String, lastName: String, age: Int, email: String): Boolean
        deleteUser(id: Int!): Boolean
    }
`;
