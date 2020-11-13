import React, { Fragment } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import UndoIcon from '@material-ui/icons/Undo';

export const _AddTrackerPage: React.FunctionComponent<RouteComponentProps> = ({
  history,
}) => {
  return (
    <Fragment>
      <Button
        variant='contained'
        color='primary'
        endIcon={<UndoIcon />}
        onClick={() => history.push('/')}
      >
        Go Back
      </Button>
    </Fragment>
  );
};

export const AddTrackerPage = withRouter(_AddTrackerPage);
