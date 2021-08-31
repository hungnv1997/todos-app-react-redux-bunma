// let iState = [{id:'asfdaf-asfd', text: 'Đi mua đồ 1', isMarked: false},
// {id:'asfdaf-fdsfd', text: 'Đi mua đồ2', isMarked: false},
// {id:'asfdaf-sdff', text: 'Đi mua đồ3', isMarked: false}]
let iState
const dataString = localStorage.getItem('todos');
if(dataString){iState = JSON.parse(dataString);
} else{iState = [];}
const todosReducer = (state= iState,action)=>{
    switch (action.type) {
        case 'ADD_TODO':
            const newTodo = {id: action.id, text: action.text, isMarked: false}
            console.log('newTodo',newTodo)
            const todosState = [...state,newTodo]
            localStorage.setItem('todos', JSON.stringify(todosState));
            return [...state,newTodo]
        case 'DELETE_TODO':
            const newTodosDelete = state.filter(todo=>{
                return todo.id !== action.id
            })
            localStorage.setItem('todos', newTodosDelete);
            return newTodosDelete
        case 'MARK_TODO':
            const newTodos = state.map(todo=>{
                if(todo.id===action.id){return {...todo, isMarked:!todo.isMarked}}
                else return todo
            }) 
            localStorage.setItem('todos', newTodos);
            return newTodos
        default:
            
             return state
    }

}

export default todosReducer