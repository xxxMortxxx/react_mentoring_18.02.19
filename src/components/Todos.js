import React from 'react';

export default class Todos extends React.Component {
  state = {
    todos: [],
    inputText: ''
  }

  onAddButtonClick = () => {
    this.setState(({todos, inputText}) => ({
      todos: [...todos, inputText],
      inputText: ''
    }))
  }

  render() {
    return (
      <div>
        <input type="text"
               value={this.state.inputText}
               onChange={({target: {value}}) => this.setState({inputText: value})}
        />
        <button onClick={this.onAddButtonClick}>Add</button>
        <ul>{
          this.state.todos.map((todo, index) => {
            return (
              <li key={index}>{todo}</li>
            )
          })
        }</ul>
      </div>

    )
  }

}