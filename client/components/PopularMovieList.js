import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchPopularMovies';

class PopularMovieList extends Component {
  render() {
    if (this.props.data.loading) {
      return <div>Loading</div>;
    }

    return <div>popular move list</div>;
  }
}

export default graphql(query)(PopularMovieList);
