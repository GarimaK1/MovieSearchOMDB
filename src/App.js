import React from 'react';
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';
import orange from '@material-ui/core/colors/orange';
import MovieSearchOMDB from './components/MovieSearchOMDB'

let theme = createMuiTheme({
  palette: {
    primary: lightGreen,
    secondary: orange,
  }
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MovieSearchOMDB />
    </ThemeProvider>
  );
}

export default App;
