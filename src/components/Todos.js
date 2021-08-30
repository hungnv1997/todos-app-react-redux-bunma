import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'
import Todo from './Todo'

function Todos() {
    const todos = [
        {id:'asfdaf-asfd', text: 'Đi mua đồ', isMarked: false},
        {id:'asfdaf-fdsfd', text: 'Đi mua đồ', isMarked: false},
        {id:'asfdaf-sdff', text: 'Đi mua đồ', isMarked: false}
    ]
    const newTodos = useSelector(state => state.todos)
    console.log('todos redux',newTodos)
    return (
        <div>
            <Header/>
            {
                todos.length>0&& todos.map(
                    todo => (
                        <Todo
                            key = {todo.id}
                            todo= {todo}
                            
                        />
                    )
                )
            }
        </div>
    )
}

export default Todos
