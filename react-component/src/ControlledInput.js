import React, { useState } from 'react'
import Display from './Display'



const ControlledInput = () => {

   const [setFirst, setSecond] = useState("Hello")
   const change=(event)=>{
    setSecond(event.target.value)
    
   }

   const click=()=>{
    // alert("hey ")
   }
  return (
    <>
      <input  onClick={click} onChange={change} value={setFirst}/>
      
      <Display/>
      <h1>{setFirst}</h1>
</>
  )
}

export default ControlledInput