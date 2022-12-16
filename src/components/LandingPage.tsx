import React, { useContext } from 'react';
import { styled, useTheme } from '@mui/system';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import { ColorModeContext } from '../App';

export default function LandingPage() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '100%',
          height: '100%',
          alignItems: 'center',
          //   justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: {
              xs: 6 / 7, // theme.breakpoints.up('xs')
              sm: 3 / 4, // theme.breakpoints.up('sm')
              md: 2.2 / 3, // theme.breakpoints.up('md')
              lg: 1.8 / 3, // theme.breakpoints.up('lg')
              xl: 1.8 / 3, // theme.breakpoints.up('xl')
            },
            height: 55,
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.nav',
            color: 'text.primary',
            borderRadius: 4,
            // border: '1px solid lightgrey',
            p: 3,
            margin: '15px',
            boxShadow: 2,
          }}
        >
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Box>
      </Box>
    </>
  );
}

function NavBar() {
  return <div></div>;
}
const Container = styled('div')({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4,
  display: 'flex',
  width: '100',
});
