import {TodoItem} from '../components/TodoItem.tsx'
import {ITodo} from '../types/data.ts'

interface ITodoListProps{
    items: ITodo[] ,
    toggleTodo: (id: number)=>void,
    removeTodo: (id: number)=>void
}
const TodoList: React.FC<ITodoListProps> = (props)=>{
    const {items, toggleTodo, removeTodo} = props
    return(
        <div>
            {
                items.map((item)=>{
                    return <TodoItem 
                    key={item.id} 
                    {...item}
                    toggleTodo={toggleTodo}
                    removeTodo={removeTodo}
                    />})
            }
        </div>
    )
}

export {TodoList}