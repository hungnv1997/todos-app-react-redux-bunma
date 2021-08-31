import React, { useEffect, useState } from 'react'

function Todo(props) {
    //Props
    const {todo}=props;
    const markTodo = (id)=>{
        props.markTodo(id)
    }
    const deleteTodo = (id)=>{
        props.deleteTodo(id)
    }
    //State
    const [isMarked, setIsMarked] = useState(false)
    useEffect(() => { 
        setIsMarked(todo.isMarked)
        
    }, [todo])
    
    //Handle Func
    const handleClickDelete= ()=>{
        console.log('todo.id');
        deleteTodo(todo.id)
    }
    const handleChecked = ()=>{
        //console.log('checked',todo.id)
        markTodo(todo.id)
    }
    return (
        <div className = "block todos__todo is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center " >
            <div  className="is-flex is-flex-direction-row is-justify-content-center is-align-items-center" >
                <input className="todos__todo--checkbox" type="checkbox"  onChange={handleChecked} />
                <p className="is-size-5 block" style={(isMarked)?{textDecoration:'line-through'}:{textDecoration:'none'}}>{todo.text}</p>
            </div>
                <button className="button is-danger is-small" onClick={handleClickDelete}>DELETE</button>
        </div>
    )
}

export default Todo
