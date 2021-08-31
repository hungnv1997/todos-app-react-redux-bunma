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
        let inputValue = document.getElementById('add-input')
        inputValue.value = ''
        setUserInput('')
    }
    const handleOnChangeInput =(e) => {
        console.log(e.target.value)
        setUserInput(e.target.value)
    }
    return (
        <div>
            <h1>Todos App</h1>
            <input type="text" id="add-input" onChange={handleOnChangeInput} maxLength="10"/>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4" onClick={handleClickAddBtn}>Add</button>
        </div>
    )
}

export default Header
