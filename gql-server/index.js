const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        hello: String
        products: [Product!]!
    }

    type Product {
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        onSales: Boolean!
    }
`;

const resolvers = {
  Query: {
    hello: () => {
      return 'world!';
    },
    products: () => {
      return [
        {
          name: 'Bike',
          description: 'Mountain Bike',
          quantity: 100000,
          price: 20000,
        },
      ];
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen()
  .then(({ url }) => {
    console.log('Server is ready at ' + url);
  })
  .catch(() => {
    console.error('Do that');
  });
