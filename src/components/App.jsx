import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import css from './section.module.css';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  clickOnButton = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };
  onLeaveFeedback = event => {
    const option = event.target.textContent;
    this.clickOnButton(option);
  };

  render() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const positivePercentage = (this.state.good * 100) / total;
    return (
      <div className={css.main}>
        <Section title="Please leave feedback" children>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics" children>
          {total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={Math.round(positivePercentage)}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
