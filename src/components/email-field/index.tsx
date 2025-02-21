import { useId } from 'react';

export function EmailField() {
  const id = useId(); // This will generate a unique id

  return (
    <label htmlFor={id}>
      <span>email</span>
      <input id={id} type="email" />
    </label>
  )
}