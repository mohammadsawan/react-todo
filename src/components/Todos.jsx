
const Todos = ({todos, handelDelete, startEdit}) => {
    return (
        <div className='flex flex-col justify-between items-center mt-15'>
            <ul>
                {todos.map((todo,index) => (
                    <div key={index}>
                        <p className='inline-block font-medium mr-10 bg-emerald-50 text-black p-6 rounded-t-[10%] rounded-l-[5%] rounded-r-[5%] rounded-b-[10%]'>{todo}</p>
                        <button onClick={() => {startEdit(index)}} className='cursor-pointer m-1'>✏️</button>
                        <button onClick={() => {handelDelete(index)}} className='cursor-pointer m-1'>❌</button>
                    </div>
                ))
                }
            </ul>
        </div>
    )
}
export default Todos
