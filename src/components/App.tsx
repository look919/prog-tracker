import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Header } from './Header';
import { HomePage } from './pages/HomePage';
import { AddTrackerPage } from './pages/AddTrackerPage';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#002884',
      dark: '#111',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/add' component={AddTrackerPage} />

          <Route component={HomePage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};
