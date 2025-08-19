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

    const handelTodoDelete = (index) => {
        setTodos(todos.filter((todo,i) => i !== index))
    }

    return (
        <div>
            <h2>React Todo App</h2>
            <AddTodos inputRef={inputRef} handelTodoAdd={handelTodoAdd} />
            <Todos todos={todos} handelDelete={handelTodoDelete}/>
        </div>
    )
}
export default App
