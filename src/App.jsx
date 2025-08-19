import {useState, useRef} from 'react'
import AddTodos from "./components/AddTodos.jsx";
import Todos from "./components/Todos.jsx";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [editTodo, setEditTodo] = useState(null);
    const inputRef = useRef('');

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
            <h2>React Todo App</h2>
            <AddTodos inputRef={inputRef} handelTodoAddEdit={handelTodoAddEdit} />
            <Todos todos={todos} handelDelete={handelTodoDelete} startEdit={startEdit}/>
        </div>
    )
}
export default App
