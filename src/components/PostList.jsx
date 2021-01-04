import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <>
      <h1>Post List</h1>
      </>
    )
  }
}

export default connect(null, {fetchPosts})(PostList);