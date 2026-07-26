import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
   let [counter,setCounter] =useState (0)
  // let counter=5;
  const addvalue=()=>{
    if(counter<50){
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    }

    // counter=counter+1;
    console.dir("clicked" ,counter);
  }
  const removevalue=()=>{
    if(counter >0){
    setCounter(counter-1)
    }
  }
    const resetvalue=()=>{
      setCounter(0)
    }
    
  


  return (
    <>
      <h1>Counter Value: {counter}</h1>
      <button onClick={addvalue}>Add Value{counter}</button><br/>
      <button onClick={removevalue}>Remove value{counter}</button><br/>
      <button onClick={resetvalue}>Reset</button>
    </>
  )
}

export default App

