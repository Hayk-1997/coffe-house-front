import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  props: {
    MuiTextField: {
      variant: 'outlined'
    },
    MuiSelect: {
      variant: 'outlined'
    }
  },
  palette: {
    primary: {
      main: '#c49b63'
    },
    error: {
      main: '#ff1b1b'
    },
    text: {
      primary: '#ffffff'
    }
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Roboto',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  },
  shape: {
    borderRadius: 5
  }
});
