import React, { useContext } from 'react';

import Home from './pages/Home';
import ThemeContext, { themes } from './context';

function App() {
  const theme = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={themes}>
      <Home />
    </ThemeContext.Provider>
  );
}

export default App;
