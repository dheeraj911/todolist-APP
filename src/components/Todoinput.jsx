import React from 'react'
import { useState } from 'react'


function Todoinput(props) {
const [input,setInput] = useState("")

function handleChange(e){
setInput(e.target.value)
}

function handleENterPress(e){
    if(e.keyCode === 13){
        props.addList(input)
        setInput("")
    }
}
  return (
    <div className="input-container">
        <input type='text'
         className='input-box-todo'
         value={input}
          placeholder='ENTER YOUR TO-DO-LIST'
           onChange={handleChange} 
           onKeyDown={handleENterPress}
           />

        <button className='add-btn'
        onClick={()=>{
            props.addList(input)
            setInput("")
        }}
        >+</button>
    </div>
  )
}

export default Todoinput