import { useState, useEffect } from 'react';

export function Timer() {
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

  return (
    <>
      <p>time: { time }</p>
      <button type='button' onClick={handleClick}>pause</button>
    </>
  )
}