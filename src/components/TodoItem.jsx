import React from 'react'
import "./TodoItem.css"
const TodoItem = ({ todoname, tododate ,ondeleteclick}) => {
  return (
    <>
      <div className="container">
        <div className="todo">{todoname}</div>
        <div className="date">{tododate}</div>
        <div>
          <button className='delete' onClick={()=>{
            ondeleteclick(todoname)
          }}>Delete</button>
        </div>
      </div>
    </>
  )
}

export default TodoItem
