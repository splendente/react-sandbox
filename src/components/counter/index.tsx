import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0); // This will create a state variable

  const handleClick = () => {
    setCount(count + 1); // This will re-render the component
  }

  return (
    <button type="button" onClick={handleClick}>count: {count}</button>
  )
}
