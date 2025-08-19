import React from 'react'

const Todos = ({todos, handelDelete, startEdit}) => {
    return (
        <div>
            <ul>
                {todos.map((todo,index) => (
                    <div key={index}>
                        <p>{todo}</p>
                        <button onClick={() => {startEdit(index)}}>✏️</button>
                        <button onClick={() => {handelDelete(index)}}>❌</button>
                    </div>
                ))
                }
            </ul>
        </div>
    )
}
export default Todos
