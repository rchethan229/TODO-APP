import React, { useState } from 'react'
import styles from "./AddTodo.module.css";
const AddTodo = ({ onNewitem }) => {
    const [todoName, setTodoName] = useState("")
    const [todoDate, setTodoDate] = useState("")
    const handleNamechange = (e) => {
       
        setTodoName(e.target.value)
    }
    const handleDatechange = (e) => {
        
        setTodoDate(e.target.value)
    }
    const handleAdd = () => {
        {if (todoName && todoDate){
            onNewitem(todoName, todoDate)
        } }
        
        setTodoName("")
        setTodoDate("")
    }
    

    return (
        <>
            <div className={styles.hero}>
                <div>
                    <input className={styles.todo} value={todoName} type="text" placeholder='Enter Your To Do Here' onChange={handleNamechange} />
                </div>
                <div>
                    <input className={styles.date} value={todoDate} type="date" placeholder='Enter the due date Here'
                        onChange={handleDatechange} />
                </div>
                <div>
                    <button type="submit" className={styles.add} onClick={handleAdd}>Add</button>
                </div>
            </div>
        </>
    )
}

export default AddTodo
