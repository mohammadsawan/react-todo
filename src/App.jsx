import {useState, useRef} from 'react'

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
            <input type='text' ref={inputRef} placeholder='Enter some tasks...'/>
            <button onClick={handelTodoAdd}>Add</button>

            <ul>
                {todos.map((todo,index) => (
                     <p key={index}>{todo}</p>
                    ))
                }
            </ul>
        </div>
    )
}
export default App
