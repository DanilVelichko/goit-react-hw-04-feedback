import List from '@mui/material/List';
import React from 'react';
import ListItem from '@mui/material/ListItem';
import PropTypes from 'prop-types';
import ListItemText from '@mui/material/ListItemText';

const Notification = ({ message }) => {
  return (
    <>
      <List aria-label="mailbox folders">
        <ListItem>
          <ListItemText primary={message} />
        </ListItem>
      </List>
    </>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
