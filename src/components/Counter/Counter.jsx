import { useState } from 'react';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

export default function Counter() {
  const [ good, setGood ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ bad, setBad ] = useState(0);

  let positivePercentage = 0;
  let total = 0;

  const handleButtons = e => {
    const clickResult = e.target.textContent;

    if (clickResult === 'good') {
      setGood(prev => {
        return prev + 1;
      });
    }
    if (clickResult === 'neutral') {
      setNeutral(prev => {
        return prev + 1;
      });
    }
    if (clickResult === 'bad') {
      setBad(prev => {
        return prev + 1;
      });
    }
  };

  const countTotalFeedback = () => {
    total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    if (total === 0) {
      return (positivePercentage = 0);
    }
    if (total > 0) {
      return (positivePercentage = Math.round((good / total) * 100));
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          handleButtons={handleButtons}
          state={{ good, neutral, bad }}
        />
      </Section>

      <Section title="Statistics">
        {good + neutral + bad > 0 ? (
          <Statistics
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
            state={{ good, neutral, bad }}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
