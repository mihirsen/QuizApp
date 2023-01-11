import React, { useEffect , useState} from 'react'

const Result = (props) => {
  const { 
    score = 0, 
    totalQuestions = 0, 
    restartGame = ()=>{},
    showResults=false,
  } = props;

  const [highestScore, setHighestScore] = useState(localStorage.getItem('currentHighestScore'));

  useEffect(() => {
    if(showResults) {
      if(score > highestScore){
        localStorage.setItem('currentHighestScore', score);
        setHighestScore(score)
      }
    }
  }, [showResults])

  return ( 
  <div className="final-results">
    <h1>Final Results</h1>
    <p className='HighestScore'
    >Your Highest Score : { highestScore }</p>
    <h2>
      {score} out of {totalQuestions} correct - (
      {(score / totalQuestions) * 100}%) <br/>
    </h2>
    <button onClick={() => restartGame()}>Restart game</button>
  </div> );
}
 
export default Result;