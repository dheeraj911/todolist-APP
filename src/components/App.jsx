import { useState } from 'react'
import '../App.css'
import Todoinput from './Todoinput'
import Todolist from './todolist'


function App() {
const [list,setList] = useState([])

let addList = (input)=>{
  if(input!==""){
  setList([...list,input])
  }
}

let deleteItems = (key)=>{
let newList = [...list]
newList.splice(key,1)
setList([...newList])

}

  return (
   <div className="main-container">
    <div className="center-container">
      <Todoinput addList={addList}/>


      <h1 className="app-heading">TO DO</h1>
        <hr />
        {list.map((listItem,i)=> {
          return (
            <Todolist key ={i} index={i} list={listItem} deleteItems={deleteItems}/>
          )
        })}
      
    </div>
   </div>
  )
}

export default App
