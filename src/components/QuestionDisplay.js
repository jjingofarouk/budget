// QuestionDisplay.js
import React, { useState } from 'react';
import AnswerOptions from './AnswerOptions';

const QuestionDisplay = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  const questionStyle = {
    background: '#f5f5f5',
    padding: '15px',
    borderRadius: '5px',
    marginBottom: '15px'
  };

  if (currentQuestion >= questions.length) {
    return <div>Quiz Completed!</div>;
  }

  return (
    <div style={questionStyle}>
      <h3>{questions[currentQuestion].question}</h3>
      <AnswerOptions 
        options={questions[currentQuestion].options}
        correctAnswer={questions[currentQuestion].answer}
        onNext={() => setCurrentQuestion(currentQuestion + 1)}
      />
    </div>
  );
};

export default QuestionDisplay;