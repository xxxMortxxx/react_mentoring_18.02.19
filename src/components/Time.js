import React, { useState, useEffect } from 'react';

// export default class Time extends Component {
//   state = {
//     date: new Date(),
//   };
//
//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState({
//         date: new Date(),
//       })
//     }, 1000);
//   }
//
//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }
//
//   render() {
//     const { date } = this.state;
//     return (
//       <div>{date.toLocaleString()}</div>
//     )
//   }
// }

const Time = ({ getHeader = () => {} }) => {
  const date = useTime();

  return (
    <>
      { getHeader()}
      {date.toLocaleString()}
      <button>some button</button>
    </>
  )
};

export default Time;

function useTime() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
      console.log('set new time from interval')
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  });

  return date;
}