import { useRef } from 'react';

export function Counter2() {
  const countRef = useRef(0); // This will create a ref

  const handleClick = () => {
    countRef.current += 1; // This will not re-render the component
  }

  return (
    <button type="button" onClick={handleClick}>count: {countRef.current}</button>
  )
}