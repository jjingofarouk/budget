// App.js
import React from 'react';
import QuizHeader from './QuizHeader';
import QuestionDisplay from './QuestionDisplay';
import ScoreTracker from './ScoreTracker';
import { questions } from './Questions'; // Importing questions from separate file

const App = () => {
  const containerStyle = {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={containerStyle}>
      <QuizHeader />
      <QuestionDisplay questions={questions} />
      <ScoreTracker totalQuestions={questions.length} />
    </div>
  );
};

export default App;