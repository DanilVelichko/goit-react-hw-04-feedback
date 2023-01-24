import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';

const Statistics = ({
  state,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  const { good, neutral, bad } = state;
  return (
    <>
      <List aria-label="mailbox folders">
        <ListItem>
          <ListItemText primary={`Good: ${good}`} />
        </ListItem>

        <ListItem>
          <ListItemText primary={`Neutral: ${neutral}`} />
        </ListItem>

        <ListItem divider>
          <ListItemText primary={`Bad: ${bad}`} />
        </ListItem>

        <ListItem>
          <ListItemText primary={'Total: ' + countTotalFeedback()} />
        </ListItem>

        <ListItem>
          <ListItemText
            primary={
              'Positive feedback: ' + countPositiveFeedbackPercentage() + '%'
            }
          />
        </ListItem>
      </List>
    </>
  );
};

Statistics.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};

export default Statistics;
