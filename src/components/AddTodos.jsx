const AddTodos = ({inputRef, handelTodoAddEdit}) => {
    return (
        <div>
            <input type='text' ref={inputRef} placeholder='Enter some tasks...'/>
            <button onClick={handelTodoAddEdit}>Add</button>
        </div>
    )
}
export default AddTodos
