import React from 'react';
import { useState, useEffect } from 'react';

export function Timer() {
  console.log('Timer component rendered');

  const [time, setTime] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [paused]);

  const handleClick = () => {
    setPaused((prevPaused) => !prevPaused);
  }

  const handleClick2 = () => {
    console.log('clicked');
  }

  return (
    <>
      <p>time: { time }</p>
      <button type='button' onClick={handleClick}>pause</button>
      <Child />
      <Child2 handleClick2={handleClick2} />
    </>
  )
}

const Child = React.memo(() => {
  console.log('Child component rendered');

  return (
    <p>Child component</p>
  )
});

const Child2 = React.memo((props) => {
  console.log('Child2 component rendered');

  return (
    <button onClick={props.handleClick2} type='button'>Child</button>
  )
})
