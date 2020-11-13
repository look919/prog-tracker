import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Header } from './Header';
import { HomePage } from './pages/HomePage';
import { AddTrackerPage } from './pages/AddTrackerPage';

//import LanguageIcon from '@material-ui/icons/Language';
//import CodeIcon from '@material-ui/icons/Code';
//import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
//import MenuBookIcon from '@material-ui/icons/MenuBook';
//import StarIcon from '@material-ui/icons/Star';

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/add' component={AddTrackerPage} />

        <Route component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};
