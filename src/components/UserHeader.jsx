import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.id);
  }

  render() {
    // const user = this.props.users.find((user) => user.id == this.props.id);
    // console.log(this.props.users);
    // const user = 'user';
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div className='ui header teal'>{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id == ownProps.id) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
