import React, { Component } from 'react';
import UserList from './components/UserList';
import withLogger from './hoc/logger';

import logo from './logo.svg';
import './App.css';
import Time from "components/Time";
import Todos from "components/Todos";

const UserListWithLogger = withLogger(UserList);
const TimeWithLogger = withLogger(Time);

class App extends Component {
  state = {
    isShowTime: true,
  };

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<UserListWithLogger renderItem={(item) => <div>{item.name}</div>}/>*/}
        {/*{ this.state.isShowTime && (<TimeWithLogger getHeader={() => <h1>Current time</h1>}/>) }*/}
        {/*<button onClick={() => this.setState({isShowTime: false})}>remove time</button>*/}
      <Todos/>
      </div>
    );
  }
}

export default App;
