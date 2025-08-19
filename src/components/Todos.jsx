import React from 'react'

const Todos = ({todos}) => {
    return (
        <div>
            <ul>
                {todos.map((todo,index) => (
                    <p key={index}>{todo}</p>
                ))
                }
            </ul>
        </div>
    )
}
export default Todos
