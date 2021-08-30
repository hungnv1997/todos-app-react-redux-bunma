const iState = [{id:'asfdaf-asfd', text: 'Đi mua đồ', isMarked: false},
{id:'asfdaf-fdsfd', text: 'Đi mua đồ', isMarked: false},
{id:'asfdaf-sdff', text: 'Đi mua đồ', isMarked: false}]

const todosReducer = (state=iState.length>0 && iState,action)=>{
    switch (action.type) {
        case 'ADD_TODO':
            const newTodo = {id: action.id, text: action.text, isMarked: false}
            console.log('newTodo',newTodo)
            return [...state,newTodo]
        case 'DELETE_TODO':
            return state

        default: return state
    }

}

export default todosReducer