import React from 'react'

const Todos = ({todos, handelDelete}) => {
    return (
        <div>
            <ul>
                {todos.map((todo,index) => (
                    <div key={index}>
                        <p>{todo}</p>
                        <button onClick={() => {handelDelete(index)}}>❌</button>
                    </div>
                ))
                }
            </ul>
        </div>
    )
}
export default Todos
