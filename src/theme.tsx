import { useState, createContext, useMemo } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/system';

export const customTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      contrastText: 'white',
    },
  },
});

export const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});
// export const ColorModeContext = createContext({ toggleColorMode: () => {} });

// export function ToggleColorMode() {
//   const [mode, setMode] = useState<'light' | 'dark'>('light');
//   const colorMode = useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
//       },
//     }),
//     []
//   );
// }
