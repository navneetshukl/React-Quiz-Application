import React from 'react'
import { useState, useEffect} from 'react';
import {db} from './firebase-config';
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import './Add.css'
import Helper from '../Helper';
import { ToastContainer, toast } from 'react-toastify';


function Add({id,setBookId}) {
  const navigate = useNavigate();
  const navigateToHome = () => {
    // 👇️ navigate to /home
    navigate('/');
  };
  const [question , setQuestion] = useState("");
  const [option1 , setOption1] = useState("");
  const [option2 , setOption2] = useState("");
  const [option3 , setOption3] = useState("");
  const [option4 , setOption4] = useState("");
  const [correct, setCorrect] = useState("");
  const Push = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "questions"), {
       question: question,
       option1: option1,
       option2: option2,
       option3: option3,
       option4: option4,
       correct: correct,   
      });
      if(id !== undefined && id!=="")
      {
        await Helper.deleteQuestion(id);
        await Helper.updateBook(id,docRef);
        setBookId("");
        toast.success("Updated successfully");

      }
      else{
      console.log("Document written with ID: ", docRef.id);
      toast.success("Question Added successfully");
    }
   } catch (e) {
      console.error("Error adding document: ", e);
    }
    setQuestion("");
    setOption1("")
    setOption2("")
    setOption3("")
    setOption4("")
    setCorrect("")
  }

  const editHandler= async()=>{
    try{
      const docSnap=await Helper.getQuestion(id);
      setQuestion(docSnap.data().question);
      setOption1(docSnap.data().option1)
      setOption2(docSnap.data().option2)
      setOption3(docSnap.data().option3)
      setOption4(docSnap.data().option4)
      setCorrect(docSnap.data().correct)
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    console.log("Id ",id);
    if(id !== undefined && id !== ""){
      editHandler();
    }
    //eslint-disable-next-line
  }, [id]);
  

  return (
    <div className="form-container">
      <form >
        <div className="form-group">
          <input
            type="text"
            name="question"
            placeholder=" "
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
          <label htmlFor="question">Enter the question</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="option1"
            placeholder=" "
            required
            value={option1}
            onChange={(e) => setOption1(e.target.value)}
          />
          <label htmlFor="option1">Enter  1st Option</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="option2"
            placeholder=" "
            required
            value={option2}
            onChange={(e) => setOption2(e.target.value)}
          />
          <label htmlFor="option2">Enter  2nd Option</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="option3"
            placeholder=" "
            required
            value={option3}
            onChange={(e) => setOption3(e.target.value)}
          />
          <label htmlFor="option3">Enter  3rd Option</label>
        </div>
        
        <div className="form-group">
          <input
            type="text"
            name="option4"
            placeholder=" "
            required
            value={option4}
            onChange={(e) => setOption4(e.target.value)}
          />
          <label htmlFor="option4">Enter  4th Option</label>
        </div>
        <div className="form-group">
          <input
            type="text"
            name="correct"
            placeholder=" "
            required
            value={correct}
            onChange={(e) => setCorrect(e.target.value)}
          />
          <label htmlFor="correct">Enter  Correct Option</label>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
  <button type="submit" onClick={Push}>Add</button>
  <button type="submit" style={{ marginLeft: '20px', backgroundColor: 'red' }} onClick={navigateToHome}>Start Quiz</button>
</div>

      </form>
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

export default Add



