import { createTheme } from '@mui/material/styles';

export const PRIMARY_COLOR = '#e9fce5';
export const SECONDARY_COLOR = '#a6f690';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#ffffff',
      main: '#a6f690',
      dark: '#74c361'
    },
    secondary: {
      light: '#c2d1c0',
      main: '#92a090',
      dark: '#647263'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          marginRight: '10px',
          borderRadius: '12px'
        }
      }
    }
  }
});