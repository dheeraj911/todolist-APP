import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'

function Todolist(props) {
  return (
    
  <li className="list-item">
    {props.list}
    <span className='icon'>
       <DeleteIcon className='icons-delete' onClick={(e)=>{
      props.deleteItems(props.index)
      console.log(props.index)

       }}/>
        </span>
        </li>
  
 
  )
}

export default Todolist