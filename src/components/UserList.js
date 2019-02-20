import React, { Component } from 'react';

export default class UserList extends Component {
  state = {
    data: [],
    isLoading: false
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    this.setState({isLoading: true});

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({ data: users, isLoading: false });

      })
  }

  render() {
    const { isLoading, data } = this.state;
    return (
      <ul>
        {
          isLoading
          ? <div>Loading...</div>
          : data.map(user => <li key={user.id}>{user.name}</li>)
        }
      </ul>
    )
  }
};