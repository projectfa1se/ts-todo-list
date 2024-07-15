import {useState,useEffect,useRef} from 'react'
import {TodoList} from './TodoList.tsx'
import {ITodo} from '../types/data.ts'
const App: React.FC = ()=>{
    const [value,setValue] = useState('')
    const [todos,setTodos] = useState<ITodo[]>([])

    const inputRef = useRef<HTMLInputElement>(null)


    const handleChange:React.ChangeEventHandler<HTMLInputElement> = (e) =>{
        setValue(e.target.value)
    }

    const addTodo = () =>{
        if(value){
            setTodos([...todos,{
                id: Date.now(),
                title: value,
                complete: false
            }])
            setValue('') 
        }
    }

    const removeTodo = (id: number): void =>{
        setTodos(todos.filter(todo=>todo.id!==id))
    }

    const toggleTodo = (id: number): void =>{
        setTodos(todos.map(todo=>{
            if(todo.id !== id) return todo
            return{
                ...todo,
                complete: !todo.complete
            }
        }))
    }

    const handleKeyDown:React.KeyboardEventHandler<HTMLInputElement> = (e)=>{
        if(e.key === 'Enter'){
            addTodo()
        }
    }

    useEffect(()=>{
        if(inputRef.current){
            inputRef.current.focus()
        }
    },[])

    return (
        <>
            <div>
                <input value={value} onKeyDown={handleKeyDown} type="text" onChange={handleChange} ref={inputRef}/>
                <button onClick={addTodo}>Add</button>
            </div>
            <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
        </>
    )
}

export {App}