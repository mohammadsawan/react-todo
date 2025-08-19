import {useState, useRef} from 'react'
import AddTodos from "./components/AddTodos.jsx";
import Todos from "./components/Todos.jsx";

const App = () => {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef('');

    const handelTodoAdd = () => {
        const value = inputRef.current.value;
        if (value === '' || null) return;
        setTodos([...todos, value]);
        inputRef.current.value = "";
    }

    return (
        <div>
            <h2>React Todo App</h2>
            <AddTodos inputRef={inputRef} handelTodoAdd={handelTodoAdd} />
            <Todos todos={todos} />
        </div>
    )
}
export default App
