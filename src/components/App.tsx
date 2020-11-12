import React, { Fragment } from 'react';
import { GlobalStyles } from '../styles/GlobalStyles';
import { Header } from './Header';
import { Trackers } from './Trackers';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

//import LanguageIcon from '@material-ui/icons/Language';
//import CodeIcon from '@material-ui/icons/Code';
//import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
//import MenuBookIcon from '@material-ui/icons/MenuBook';
//import StarIcon from '@material-ui/icons/Star';

export const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <Button variant='contained' color='primary' endIcon={<AddIcon />}>
        Add tracker
      </Button>
      <Trackers />
    </Fragment>
  );
};
