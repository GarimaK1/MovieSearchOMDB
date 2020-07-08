import React from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';
import orange from '@material-ui/core/colors/orange';

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import SearchBar from "./layout/SearchBar";
import MovieDisplay from "./components/MovieDisplay";

const theme = createMuiTheme({
  palette: {
    primary: lightGreen,
    secondary: orange,
  }
});

const useStyles = makeStyles((theme) => ({
  layout: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flexGrow: 1,
    margin: '0 1rem 0.5rem 1rem'
  }
}));


function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.layout}>
        <Header />
        <div className={classes.content} >
          <SearchBar />
          <MovieDisplay />
        </div>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
