import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import light from './styles/theme/light';
import dark from './styles/theme/dark';

import usePersistedState from './utils/usePersistedState';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('light', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
