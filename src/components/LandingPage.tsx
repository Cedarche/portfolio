import React, { useContext } from 'react';
import { styled, useTheme } from '@mui/system';
import NavBar from './NavBar';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';

import Background from './Background';

import { ColorModeContext } from '../App';
import { useEffect } from 'react';
const points = [
  { x: 0, y: 0, color: 'red', size: 10 },
  { x: 50, y: 50, color: 'green', size: 20 },
  { x: 100, y: 100, color: 'blue', size: 30 },
];

export default function LandingPage() {
  const theme = useTheme();

  return (
    <>
      <CssBaseline />
      <Container>
        <NavBar />
        {theme.palette.mode === 'dark' && <Background />}
        <div>
          <h1>Welcome to my page</h1>
        </div>
      </Container>
    </>
  );
}

const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '100%',
  minHeight: '400vh',
  alignItems: 'center',
  justifyContent: 'flex-start',
  bgcolor: 'background.default',
  color: 'text.primary',
  overflow: 'hidden',

  background: 'linear-gradient(0deg, #7ba7c7 0%, #4d4d93 20%, #2a2a48 55%, #0F0F19 100%);',
});
