import React, { useEffect, useState } from 'react'
import { Table, Button } from "react-bootstrap";
import Helper from '../Helper'
import { useNavigate } from 'react-router-dom';
//import "../App.css"
import "./Edit.css"



const Edit =( {getBookId} ) => {
  const [questions,setQuestions]=useState([]);

  const fetchCourse=async()=>{
     const questions=await Helper.getQuestions();
    setQuestions(questions);
  }
  useEffect(()=>{
    fetchCourse();
  },[])
  const navigate=useNavigate();

 
  const deleteHandler = async (id) => {
    await Helper.deleteQuestion(id);
    fetchCourse();
  }
  const navigateToAdd = () => {
    // 👇️ navigate to /home
    navigate('/add');
  };
  return (
    <>
    <div className='mb-2'>
        {/*<Button variant="dark-edit" onClick={fetchCourse}>
          Refresh List
        </Button>*/}
      </div>
      <Table striped bordered hover size="sm" className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>Option1</th>
            <th>Option2</th>
            <th>Option3</th>
            <th>Option4</th>
            <th>Correct</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((doc, index) => {
            
            return (
              <tr key={doc.id}>
              <td>{index+1.}</td>
                <td>{doc.question}</td>
                <td>{doc.option1}</td>
                <td>{doc.option2}</td>
                <td>{doc.option3}</td>
                <td>{doc.option4}</td>
                <td>{doc.correct}</td>
                <td>
                  <Button
                    variant="secondary"
                    className="edit"
                    onClick={(e) => {getBookId(doc.id);navigateToAdd()}}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    className="delete"
                    onClick={(e) => deleteHandler(doc.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button variant="dark-edit" onClick={()=>navigate("/")}>Home</Button>
    </>
      
  )
}

export default Edit
