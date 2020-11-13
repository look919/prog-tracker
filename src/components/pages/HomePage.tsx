import React, { Fragment } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import {
  Trackers,
  Tracker,
  TrackerTitle,
  TrackerProgress,
} from '../../styles/HomePage';

import LanguageIcon from '@material-ui/icons/Language';
import CodeIcon from '@material-ui/icons/Code';
import SportIcon from '@material-ui/icons/AccessibilityNew';
import BookIcon from '@material-ui/icons/MenuBook';
import StarIcon from '@material-ui/icons/Star';

export const _HomePage: React.FunctionComponent<RouteComponentProps> = ({
  history,
}) => {
  const trackers = [
    {
      id: uuidv4(),
      title: 'Nauka języka włoskiego',
      dscription: ['progress1', 'progress2'],
      progress: 1,
      icon: 'star',
    },
    {
      id: uuidv4(),
      title:
        'Torem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas venenatis odio non porttitor. ',
      dscription: ['progress1', 'progress2', 'progress3'],
      progress: 20,
      icon: 'code',
    },
  ];

  return (
    <Fragment>
      <Button
        variant='contained'
        color='primary'
        endIcon={<AddIcon />}
        onClick={() => history.push('/add')}
      >
        Add tracker
      </Button>

      <Trackers>
        {trackers.map((tr) => (
          <Tracker key={tr.id} to={`/${tr.id}`}>
            {tr.icon === 'code' ? (
              <CodeIcon />
            ) : tr.icon === 'lang' ? (
              <LanguageIcon />
            ) : tr.icon === 'book' ? (
              <BookIcon />
            ) : tr.icon === 'sport' ? (
              <SportIcon />
            ) : (
              <StarIcon />
            )}
            <TrackerTitle>{tr.title}</TrackerTitle>
            <TrackerProgress>{`${tr.progress * 5}%`}</TrackerProgress>
          </Tracker>
        ))}
      </Trackers>
    </Fragment>
  );
};

export const HomePage = withRouter(_HomePage);
