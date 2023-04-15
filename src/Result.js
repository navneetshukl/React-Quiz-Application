import React from 'react'
import {  useNavigate } from 'react-router-dom';

const Result = (props)=> {
  const navigate = useNavigate();
  /*const navigateToHome1 = () => {
    // 👇️ navigate to /home
    navigate1('/');
  };*/
  return (
    <>
    <div className='show-score'>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore}
    </div>
    <button id="next-button" onClick={props.tryAgain}>Try Again</button>
    <button  id="next-button" style={{position:'relative', bottom:'0',}} onClick={()=>navigate("/")}>Home</button>
    </>
  )
}

export default Result