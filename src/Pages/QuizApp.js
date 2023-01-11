import React, { useState } from 'react'
import '../Styles/QuizApp.css';
import questions from '../Utils/questions';
import Result from '../Components/Result';


const QuizApp = () => {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  
  
  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <h2>Current Score: {score}</h2>
      {showResults ? (
        <Result 
          score={score}
          totalQuestions={questions.length}
          restartGame={restartGame}
          showResults={showResults}
        />
      ) : (
        <div className="question-card">
          <h2>
            Question: {currentQuestion + 1}/{questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default QuizApp
