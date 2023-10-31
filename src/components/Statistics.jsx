const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <p style={{ color: 'green' }}>Good: {good}</p>
      <p style={{ color: '#474747' }}>Neutral: {neutral}</p>
      <p style={{ color: '#a30d0d' }}>Bad: {bad}</p>
      <p style={{ color: '#2b74aa' }}>Total: {total}</p>
      <p style={{ color: '#21734d' }}>
        Positive Feedback: {positivePercentage}%
      </p>
    </div>
  );
};

export default Statistics;
