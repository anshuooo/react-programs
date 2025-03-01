const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
// Define GraphQL schema
const schema = buildSchema(`
type Student {
id: ID!
name: String!
city: String!
}
type Query {
students: [Student]
student(id: ID!): Student
}
`);
// Sample data
const students = [
{ id: "1", name: "Neha Rathore", city: "Agra" },
{ id: "2", name: "Tushar Gupta", city: "Ghaziabad" },
{ id: "3", name: "Soniya Sharma", city: "Jaipur" },
];
// Define resolvers
const root = {
students: () => students,
student: ({ id }) => students.find(student => student.id === id),
};
// Create an Express server
const app = express();
app.use('/graphql', graphqlHTTP({
schema: schema,
rootValue: root,
graphiql: true, // Enable GraphiQL interface
}));



// Start the server
app.listen(4000, () => {
console.log('GraphQL server is running on http://localhost:4000/graphql');
});