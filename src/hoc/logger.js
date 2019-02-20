import React from 'react';

export default function withLogger(Component) {
  return class WithLogger extends React.Component {
    componentDidMount() {
      console.log(`${Component.name} did mount!`);
    }

    render() {
      return (
        <Component {...this.props}/>
      )
    }
  }
}