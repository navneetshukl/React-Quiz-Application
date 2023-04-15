import Home from './pages/home';
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Add from './pages/Add';
import Edit from './pages/Edit';
import Start from './pages/Start';


function App() {
  const [bookId,setBookId]=useState("");
  
  const getBookIdHandler=(id)=>{
    console.log("The Id of question to be edited ",id);
    setBookId(id);
  }

  return (
    <div>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/add" element={<Add id={bookId} setBookId={setBookId}/>} />
      <Route path="/edit" element={<Edit getBookId={getBookIdHandler} bookId={bookId}/>} />
      <Route path="/start" element={<Start/>} />
        
      </Routes>
    </div>

  );
}

export default App;
