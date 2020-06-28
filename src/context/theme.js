import { createContext } from 'react';

export const themes = {
  light: {
    color: '#282C34',
    background: '#eeeeee',
  },
  dark: {
    color: '#ffffff',
    background: '#282C34',
  },
};

const ThemeContext = createContext(themes.dark);

export { ThemeContext as default };
