import React from 'react';
import './App.css';
import Header from "./Components/Header";
import Holder from "./Components/Holder";
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import Introduction from "./Components/Introduction"; 

let theme = responsiveFontSizes(createMuiTheme({
  palette: {
    primary: {
      main: purple[900],
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
  },
  typography: {
    fontFamily: 'Indie Flower',
    h1: {
      fontSize: 1.5,
      textAlign: "center",
      margin: "1em"
      }
  }
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Introduction />
        <Holder />
      </div>
    </ThemeProvider>
  );
}

export default App;
