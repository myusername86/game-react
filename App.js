import React, { useState } from 'react'
import './App.css'
import Result from './Result';

function App() {

  const[term,setTerm]=useState("");

  const secretNumber=Math.floor(Math.random()*10)+1;

  const handlechange=(e)=>
  {
    setTerm(e.target.value)
  }
  return (
    < div className='container'>
      <div className='head'>
        <lable htmlFor="term" >Guess the numner between 1-10:</lable>

      </div>
      
      <input 
      type="text"
      id="term"
      name="term"
      onChange={handlechange}
      />
      <Result secretNumber={secretNumber} term={term}/>

      
      
    </div>
  )
}

export default App