import {ITodo} from '../types/data.tsx'

interface ITodoItem extends ITodo{
    removeTodo: (id:number)=>void,
    toggleTodo: (id:number)=>void
}

const TodoItem: React.FC<ITodoItem> = (props)=>{
    const {id,title,complete,removeTodo,toggleTodo} = props
    return(
        <div>
            <input type="checkbox" onChange={()=> toggleTodo(id)} checked={complete} />
            <span
                style={{
                    display: 'inline-block',
                    margin: '5px'
                }}
            >{title}</span>
            <button onClick={()=>removeTodo(id)}
                style={{
                    backgroundColor: 'transplarent',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'black',
                    marginLeft: '5px',
                    color: 'red'
                }}
                >x</button>
        </div>
    )
}

export {TodoItem}