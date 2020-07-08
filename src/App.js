import React from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import lightGreen from '@material-ui/core/colors/lightGreen';
import orange from '@material-ui/core/colors/orange';

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

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
    flexGrow: 1
  },
  header: {
    flexShrink: 0
  }, 
  footer: {
    flexShrink: 0
  }
}));


function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.layout}>
        <Header className={classes.header} />
        <div className={classes.content} >

        </div>
        <Footer className={classes.footer} />
      </div>
    </ThemeProvider>
  );
}

export default App;
