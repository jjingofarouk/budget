// AnswerOptions.js
import React, { useState } from 'react';

const AnswerOptions = ({ options, correctAnswer, onNext }) => {
  const [answered, setAnswered] = useState(false);

  const optionStyle = {
    display: 'block',
    padding: '10px',
    margin: '5px 0',
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: '3px',
    cursor: 'pointer'
  };

  const handleClick = (option) => {
    setAnswered(true);
    setTimeout(() => {
      setAnswered(false);
      onNext();
    }, 1000);
  };

  return (
    <div>
      {options.map((option, index) => (
        <div 
          key={index}
          style={{
            ...optionStyle,
            background: answered && option === correctAnswer ? '#90ee90' : 
                      answered && option !== correctAnswer ? '#ffcccb' : '#fff'
          }}
          onClick={() => handleClick(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default AnswerOptions;