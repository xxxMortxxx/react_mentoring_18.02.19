import React from 'react';
import { connect } from 'react-redux';
import * as usersActions from '../actions/users';

class UserList extends React.Component {
  componentDidMount() {
    this.props.usersRequestAction();
  }

  render() {
    return(<ul>{this.props.users.map(user => (
      <li key={user.id}>{user.name}</li>
    ))}</ul>)
  }
}

const mapStateToProps = state => ({
  users: state.users.data,
});

const mapDispatchToProps = {
  usersRequestAction: usersActions.usersRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList)