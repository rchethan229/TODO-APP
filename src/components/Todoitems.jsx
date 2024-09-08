import React from 'react'
import TodoItem from './TodoItem'
const Todoitems = ({todoitems,ondeleteclick}) => {
  return (
    <>
    
    {todoitems.map((item)=>(
      <TodoItem key={item.name}
      todoname={item.name} tododate={item.dueDate} ondeleteclick={ondeleteclick}/>
    ))}
    </>
  )
}

export default Todoitems
