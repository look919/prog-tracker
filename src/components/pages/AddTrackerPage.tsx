import React, { Fragment, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Form } from '../../styles/AddTrackerPage';
import Button from '@material-ui/core/Button';
import UndoIcon from '@material-ui/icons/Undo';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CodeIcon from '@material-ui/icons/Code';
import LanguageIcon from '@material-ui/icons/Language';
import BookIcon from '@material-ui/icons/MenuBook';
import SportIcon from '@material-ui/icons/AccessibilityNew';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles({
  input: {
    width: '100%',
    marginBottom: '1.5rem',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '1.6rem',
  },
  select: {
    width: '100%',
    marginBottom: '3.5rem',
  },
});

export const _AddTrackerPage: React.FunctionComponent<RouteComponentProps> = ({
  history,
}) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    icon: 'code',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSelectChange = (e: any) => {
    setFormData({
      ...formData,
      icon: e.target.value,
    });
  };

  const onSubmit = (e: any) => {
    //TODO:
  };

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
      <Form onSubmit={onSubmit}>
        <TextField
          className={classes.input}
          value={formData.title}
          name='title'
          label='Title'
          variant='filled'
          required
          inputProps={{ maxLength: 30 }}
          onChange={onChange}
        />
        <TextField
          className={classes.input}
          value={formData.description}
          name='description'
          label='Description - what do you want to learn?'
          variant='filled'
          required
          onChange={onChange}
        />

        <Select
          value={formData.icon}
          className={classes.select}
          onChange={onSelectChange}
        >
          <MenuItem value='code'>
            <ListItemIcon>
              <CodeIcon />
            </ListItemIcon>
            <ListItemText primary='Code' />
          </MenuItem>
          <MenuItem value='lang'>
            <ListItemIcon>
              <LanguageIcon />
            </ListItemIcon>
            <ListItemText primary='Language' />
          </MenuItem>
          <MenuItem value='book'>
            <ListItemIcon>
              <BookIcon />
            </ListItemIcon>
            <ListItemText primary='Culture' />
          </MenuItem>
          <MenuItem value='sport'>
            <ListItemIcon>
              <SportIcon />
            </ListItemIcon>
            <ListItemText primary='Sport' />
          </MenuItem>
          <MenuItem value='other' style={{}}>
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary='Others' />
          </MenuItem>
        </Select>
        <Button
          variant='contained'
          color='primary'
          endIcon={<AddIcon />}
          onClick={() => history.push('/')}
        >
          Add Tracker!
        </Button>
      </Form>
    </Fragment>
  );
};

export const AddTrackerPage = withRouter(_AddTrackerPage);
