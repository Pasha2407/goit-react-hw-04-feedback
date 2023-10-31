import React, { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import css from './section.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const buttons = { good, neutral, bad };

  const onLeaveFeedback = event => {
    const option = event.target.textContent;
    switch (option) {
      case 'good': {
        setGood(good + 1);
        return;
      }
      case 'neutral': {
        setNeutral(neutral + 1);
        return;
      }
      case 'bad': {
        setBad(bad + 1);
        return;
      }
      default:
        return;
    }
  };

  const total = good + neutral + bad;
  const positivePercentage = (good * 100) / total;

  return (
    <div className={css.main}>
      <Section title="Please leave feedback" children>
        <FeedbackOptions
          options={Object.keys(buttons)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics" children>
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={Math.round(positivePercentage)}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
