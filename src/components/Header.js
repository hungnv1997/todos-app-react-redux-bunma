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
        <div  className='block header'>
            <h1 className="is-size-1 has-text-centered block">Todos App</h1>
            <div className=" block">
            <input className="input block header__input" placeholder="...Add your todo" type="text" id="add-input" onChange={handleOnChangeInput} maxLength="20"/>
            <button className="button is-primary  is-fullwidth" onClick={handleClickAddBtn}>Add</button>
            </div>
        </div>
    )
}

export default Header
