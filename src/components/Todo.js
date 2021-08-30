import React, { useEffect, useState } from 'react'

function Todo(props) {
    //Props
    const {todo}=props;
    const markTodo = (id)=>{
        props.markTodo(id)
    }
    //State
    const [isMarked, setIsMarked] = useState(false)
    useEffect(() => { 
        setIsMarked(todo.isMarked)
        
    }, [todo])
    
    //Handle Func
    const handleClickDelete= ()=>{
        console.log(todo.id);
    }
    const handleChecked = ()=>{
        //console.log('checked',todo.id)
        markTodo(todo.id)
    }
    return (
        <div>
            <div style = {{display:'flex', flexDirection:'row', alignItems:'center'}}>
                <input type="checkbox" onChange={handleChecked} />
                <p style={(isMarked)?{textDecoration:'line-through'}:{textDecoration:'none'}}>{todo.text}</p>
                <button onClick={handleClickDelete}>DELETE</button>
            </div>
        </div>
    )
}

export default Todo
