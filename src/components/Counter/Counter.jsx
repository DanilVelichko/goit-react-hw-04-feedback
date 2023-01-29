import { useState } from 'react';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';

export default function Counter() {
  const [ good, setGood ] = useState(0);
  const [ neutral, setNeutral ] = useState(0);
  const [ bad, setBad ] = useState(0);


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
return good + neutral + bad;
   
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }
    else {
      return Math.round((good / countTotalFeedback()) * 100);
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
        {countTotalFeedback() > 0 ? (
          <Statistics
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
            state={{ good, neutral, bad }}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
