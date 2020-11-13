import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Header } from './Header';
import { HomePage } from './pages/HomePage';
import { AddTrackerPage } from './pages/AddTrackerPage';

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
