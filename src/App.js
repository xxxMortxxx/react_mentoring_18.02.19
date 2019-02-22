import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import logo from './logo.svg';
import './App.css';
import UserList from 'components/UserList.container';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

class App extends Component {
  state = {
    isShowTime: true,
  };

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <img src={logo} className="App-logo" alt="logo" />
          <UserList />
        </Provider>
      </div>
    );
  }
}

export default App;
