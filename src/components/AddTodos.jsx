const AddTodos = ({inputRef, handelTodoAdd}) => {
    return (
        <div>
            <input type='text' ref={inputRef} placeholder='Enter some tasks...'/>
            <button onClick={handelTodoAdd}>Add</button>
        </div>
    )
}
export default AddTodos
