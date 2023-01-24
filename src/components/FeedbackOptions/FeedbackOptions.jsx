import css from './FeedbackOptions.module.css';
import React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ state, handleButtons }) => {
  return (
    <>
      <div className={css.counter}>
        {Object.keys(state).map(keyName => {
          return <Button onClick={handleButtons}>{keyName}</Button>;
        })}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  handleButtons: PropTypes.func.isRequired,
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
};

export default FeedbackOptions;
