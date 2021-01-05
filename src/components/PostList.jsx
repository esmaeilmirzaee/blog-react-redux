import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderedList() {
    return this.props.posts.map((post) => {
      return (
        <div className='item' key={post.id}>
          <i className='user middle aligned massive icon'></i>
          <div className='content'>
            <div className='description'>
              <h3 className='title'>{post.title}</h3>
              <p>{post.body}</p>
              <UserHeader id={post.userId} />
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className='ui relaxed devided list'>{this.renderedList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
