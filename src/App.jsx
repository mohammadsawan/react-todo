import {useState, useRef} from 'react'

const App = () => {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef('');

    const handelTodoAdd = () => {
        const value = inputRef.current.value;
        if (value === '' || null) return;
        setTodos([...todos, value]);
        inputRef.current.value = "";
        console.log(todos)
    }

    return (
        <div>
            <h2>React Todo App</h2>
            <input type='text' ref={inputRef} placeholder='Enter some tasks...'/>
            <button onClick={handelTodoAdd}>Add</button>
        </div>
    )
}
export default App
