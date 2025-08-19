import {useState, useRef, useEffect} from 'react'
import AddTodos from "./components/AddTodos.jsx";
import Todos from "./components/Todos.jsx";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);
    const [triggerBtn, setTriggerBtn] = useState('');
    const inputRef = useRef('');

    useEffect(() => {
        if(editTodo !== null && editTodo !== undefined) {
            setTriggerBtn('Edit Task');
        }else {
            setTriggerBtn('Add Task');
        }
    }, [editTodo])

    const startEdit = (index) => {
        inputRef.current.value = todos[index];
        setEditTodo(index);
    }

    const handelTodoAddEdit = () => {
        const value = inputRef.current.value;
        if (value === '' || null) return;

        if(editTodo !== null && editTodo !== undefined ){
            const updatedTodos = [...todos]
            updatedTodos[editTodo] = value;
            setTodos(updatedTodos);
            setEditTodo(null);

    } else {
            setTodos([...todos, value]);
            inputRef.current.value = "";
        }
        inputRef.current.value = "";
    }

    const handelTodoDelete = (index) => {
        setTodos(todos.filter((todo,i) => i !== index))
    }

    return (
        <div>
            <h2 className='text-center mt-10 font-bold text-3xl'>React Todo App</h2>
            <AddTodos inputRef={inputRef} handelTodoAddEdit={handelTodoAddEdit} triggerAddBtn={triggerBtn}/>
            <Todos todos={todos} handelDelete={handelTodoDelete} startEdit={startEdit}/>
        </div>
    )
}
export default App
