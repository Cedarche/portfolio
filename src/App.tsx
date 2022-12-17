import { useState, createContext, useContext, useMemo } from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import LandingPage from './components/LandingPage';
import { ParallaxProvider } from 'react-scroll-parallax';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    nav?: {
      light;
      dark;
    };
  }
}

export default function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('dark');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // palette values for light mode
                background: {
                  nav: '#fff',
                },
              }
            : {
                // palette values for dark mode
                background: {
                  default: '#0F0F19',
                  nav: '#1D1D29',
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ParallaxProvider>
          <LandingPage />
        </ParallaxProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
