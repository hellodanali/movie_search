const graphql = require('graphql');
const axios = require('axios');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;

const MovieType = require('./movie_type');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    movies: {
      type: new GraphQLList(MovieType),
      resolve() {
        return axios
          .get(
            'https://api.themoviedb.org/3/movie/popular?api_key=eb58c32f2b292aad36dde3c4ccc7e2ae&language=en-US&page=1'
          )
          .then(res => res.data.results);
      }
    }
  })
});
