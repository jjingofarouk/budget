// ScoreTracker.js
import React, { useState } from 'react';

const ScoreTracker = ({ totalQuestions }) => {
  const [score, setScore] = useState(0);

  const scoreStyle = {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '18px'
  };

  return (
    <div style={scoreStyle}>
      Score: {score}/{totalQuestions}
    </div>
  );
};

export default ScoreTracker;