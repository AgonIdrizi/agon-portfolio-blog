import * as React from 'react';

const ThemeContext = React.createContext('light');
ThemeContext.displayName = 'ThemeContext';

function ThemeProvider(props) {
  const [theme, setTheme] = React.useState('light')

  React.useEffect(() => {
    
    if (window.localStorage.theme === 'dark' || (!('theme' in window. localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    // Whenever the user explicitly chooses light mode
    window.localStorage.theme = 'light'
    
    // Whenever the user explicitly chooses dark mode
    window.localStorage.theme = 'dark'
  }, [])
}