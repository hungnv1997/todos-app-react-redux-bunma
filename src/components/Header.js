import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';
function Header(props) {
    const [userInput, setUserInput] = useState('')
    const addTodo = (text,id)=>{
        props.addTodo(text,id)
    };
    const id = uuid()
    const handleClickAddBtn = (e)=>{
        e.preventDefault()
        addTodo(userInput,id);
        setUserInput('')
    }
    const handleOnChangeInput =(e) => {
        console.log(e.target.value)
        setUserInput(e.target.value)
    }
    return (
        <div>
            <h1>Todos App</h1>
            <input type="text" onChange={handleOnChangeInput} maxLength="10"/>
            <button onClick={handleClickAddBtn}>Add</button>
        </div>
    )
}

export default Header
