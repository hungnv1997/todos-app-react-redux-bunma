export const addTodo = (text, id)=> {
    return {
        type: 'ADD_TODO',
        text: text,
        id: id
    }
}


export const deleteTodo = (id) =>  {
    return {type: 'DELETE_TODO', id:id}
}