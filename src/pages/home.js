import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './home.css'
import helper from '../Helper';

function Home() {
  const [ques,setQues]=useState([])
  const fetchCourse=async()=>{
    const ques=await helper.getQuestions();
   setQues(ques);
 }
 useEffect(()=>{
   fetchCourse();
 },[])
 const len=ques.length;
    const navigate = useNavigate();
 
  const navigateToAdd = () => {
    // 👇️ navigate to /home
    navigate('/add');
  };
  const navigateToEdit = () => {
    if(len===0)
    {
      toast.error("No data to Edit");
      return;
    }
    navigate('/edit');
  };
  const navigateToStart = () => {
    // 👇️ navigate to /home
    if(len===0)
    {
      toast.error("Please Add Questions");
      return;
    }
    navigate('/start');
  };
  return (
    <div className="container1">
      <h1>WELCOME TO THE QUIZ</h1>
      <div className="button-container">
        <button className="btn btn-primary" onClick={navigateToAdd}>Add Question</button>
        <button className="btn btn-secondary" onClick={navigateToEdit}>Edit Question</button>
        <button className="btn btn-success" onClick={navigateToStart}>Start Quiz</button>
      </div>
      {<ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
/>}
    </div>
    
  );
}

export default Home;
