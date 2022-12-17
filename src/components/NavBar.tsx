import React, { useContext } from 'react';
import { Box } from '@mui/system';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import { styled, useTheme } from '@mui/system';
import { ColorModeContext } from '../App';

export default function NavBar() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          position: 'fixed',
          width: {
            xs: 6 / 7, // theme.breakpoints.up('xs')
            sm: 3 / 4, // theme.breakpoints.up('sm')
            md: 2.2 / 3, // theme.breakpoints.up('md')
            lg: 1.8 / 3, // theme.breakpoints.up('lg')
            xl: 1.6 / 3, // theme.breakpoints.up('xl')
          },
          height: 55,
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: 'background.nav',
          color: 'text.primary',
          borderRadius: 4,
          // border: '1px solid lightgrey',
          p: 3,
          margin: '15px',
          boxShadow: 2,
          zIndex: 'tooltip',
        }}
      >
        <p>CDE</p>
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="primary">
          {theme.palette.mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Box>
    </>
  );
}
