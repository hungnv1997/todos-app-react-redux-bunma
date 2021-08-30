import React from 'react'

function Todo(props) {
    const {todo}=props;
    const handleClickDelete= ()=>{
        console.log(todo.id);
    }
    const handleChecked = ()=>{
        console.log('checked',todo.id)
    }
    return (
        <div>
            <div style = {{display:'flex', flexDirection:'row', alignItems:'center'}}>
                <input type="checkbox" onChange={handleChecked}/>
                <p>{todo.id}</p>
                <button onClick={handleClickDelete}>DELETE</button>
            </div>
        </div>
    )
}

export default Todo
