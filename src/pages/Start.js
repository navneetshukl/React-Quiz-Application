import { React,useEffect,useState } from "react";
import helper from "../Helper";
import "../App.css"
import Result from "../Result";
//import { useNavigate } from "react-router-dom";
//import { click } from "@testing-library/user-event/dist/click";
//import Result from "../Result";

const Start=()=>{
  const [questions,setQuestions]=useState([]);

  const fetchCourse=async()=>{
     const questions=await helper.getQuestions();
    setQuestions(questions);
  }
  useEffect(()=>{
    fetchCourse();
  },[])
  /*console.log(questions.length)*/
  /*questions.map((data)=>{
    console.log(data.question +" "+data.correct)
    //console.log(data.correct)
  })*/
 // var i=0;
var len=questions.length;
/*for(var i=0;i<len;i++) {
  console.log(questions[i].question)
}*/
const [currentQuestion,setcurrentQuestion]=useState(0)
const [score,setScore]=useState(0);
const [clickedOption,setclickedOption]=useState("");
const [showResult,setshowResult]=useState(false);
//const [myArray, setMyArray] = useState([]);
const correctAnswer=[];
for(var i=0;i<len;i++){
  correctAnswer.push(questions[i].correct);
}
const changeQuestion=()=>{
  if(currentQuestion<len-1)
  {
    setcurrentQuestion(currentQuestion+1);
    setclickedOption(" ");
  }
  else {
    setshowResult(true);
  }
}
 function  handleClick(value) {
 // setMyArray(prevArray => [...prevArray, value]);
  if(value===correctAnswer[currentQuestion])
  {
    setScore(score+1);
  }
}
const reset=()=>{
  setshowResult(false)
  setcurrentQuestion(0)
  setclickedOption(" ")
  setScore(0);
}

for(;currentQuestion<len;){
  return(
  <div>
  <p className="heading-txt">Quiz App</p>
  <div className="container">
  {showResult ?(
    <Result score={score} totalScore={len} tryAgain={reset}/>
  ):(
    <>
    <div className="question">
      <span id="question-number">{currentQuestion+1}.</span>
      <span id="question-text">{questions[currentQuestion].question}</span>
    </div>
    <div className="option-container">
      <button 
      className="option-btn"
      key={1}
      onClick={()=>{setclickedOption(questions[currentQuestion].option1);handleClick(questions[currentQuestion].option1)}}
      >
      {questions[currentQuestion].option1}</button>
      <button 
      className="option-btn"
      key={2}
      onClick={()=>{setclickedOption(questions[currentQuestion].option2);handleClick(questions[currentQuestion].option2)}}
      >
      {questions[currentQuestion].option2}</button>
      <button 
      className="option-btn"
      key={3}
      onClick={()=>{setclickedOption(questions[currentQuestion].option3);handleClick(questions[currentQuestion].option3)}}
      >
      {questions[currentQuestion].option3}</button>
      <button 
      className="option-btn"
      key={4}
      onClick={()=>{setclickedOption(questions[currentQuestion].option4);handleClick(questions[currentQuestion].option4)}}
      >
      {questions[currentQuestion].option4}</button>
    </div>
    <input type="button" value="Next" id="next-button" 
    onClick={()=>{changeQuestion()}}
    ></input>
    </>)}
  </div>
  
  </div>)
   }
   
}
export default Start

