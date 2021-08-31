import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, markTodo } from '../redux/actions/todosAction'
import Header from './Header'
import Todo from './Todo'

function Todos() {
   
    const todos = useSelector(state => state.todos)
    console.log('todos redux',todos)
    const dispatch = useDispatch()
    const addTodoProps = (text,id)=>{
        console.log('connect addTodo from redux')
        return dispatch(addTodo(text,id))
    }
    const markTodoProps = (id)=>{
        console.log('connect addTodo from redux')
        return dispatch(markTodo(id))
    }
    const deleteTodoProps = (id)=>{
        console.log('connect addTodo from redux')
        return dispatch(deleteTodo(id))
    }
    return (
        <div>
            <Header addTodo = {addTodoProps}/>
            {
                todos.length>0&& todos.map(
                    todo => (
                        <Todo
                            key = {todo.id}
                            todo= {todo}
                            markTodo = {markTodoProps}
                            deleteTodo = {deleteTodoProps}
                            
                        />
                    )
                )
            }
        </div>
    )
}

export default Todos
