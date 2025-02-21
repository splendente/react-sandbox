import { useState, createContext, useContext } from 'react';

const ThemeContext = createContext(''); // This will create a context

export function ThemeButton() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <Button />
    </ThemeContext.Provider>
  )
}

function Button () {
  const { theme, toggleTheme } = useContext(ThemeContext); // This will read the context

  return (
    <>
      <button onClick={toggleTheme} type='button'>Theme: {theme}</button>
    </>
  )
}
