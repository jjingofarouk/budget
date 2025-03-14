// QuizHeader.js
import React from 'react';

const QuizHeader = () => {
  const headerStyle = {
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px'
  };

  return (
    <h1 style={headerStyle}>Medical Quiz</h1>
  );
};

export default QuizHeader;