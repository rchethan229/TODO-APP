import { useState } from 'react'

import Navbar from './components/Navbar'
import AddTodo from './components/AddTodo'


import './components/TodoItem.css'
import Todoitems from './components/Todoitems';
import Welcome from './components/Welcome';

function App() {
  const defaulttodoitems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this video",
      dueDate: "right now",
    },
  ];
  const [todoitems,settodotems]=useState([])
  
  const handleNewitem=(itemname,itemdate)=>{
    console.log(`${itemname}, ${itemdate}`)
    const newTodoitems=[...todoitems,{name:itemname,dueDate:itemdate}]
    settodotems(newTodoitems)
    
}
const handleDelete=(itemname)=>{
  const newtodoitem=todoitems.filter((item)=>item.name!=itemname)
        console.log(`Deleted Item is ${itemname}`)
        settodotems(newtodoitem)
}
  return (
    <>
      <Navbar/>
      <AddTodo onNewitem={handleNewitem}/>
      {todoitems.length==0 && <Welcome/>}
      <Todoitems todoitems={todoitems} ondeleteclick={handleDelete}/>

    </>
  )
}

export default App
