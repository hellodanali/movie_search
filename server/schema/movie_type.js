const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLFloat
} = graphql;

const MovieType = new GraphQLObjectType({
  name: 'MovieType',
  fields: {
    id: { type: GraphQLFloat },
    title: { type: GraphQLString },
    overview: { type: GraphQLString },
    vote_average: { type: GraphQLFloat },
    poster_path: { type: GraphQLString }
  }
});

module.exports = MovieType;
