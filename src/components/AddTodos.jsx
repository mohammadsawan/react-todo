import {useEffect, useState} from "react";

const AddTodos = ({inputRef, handelTodoAddEdit,triggerAddBtn}) => {



    return (
        <div className='flex justify-around align-items-center mt-20'>
            <input className='border-1 border-amber-100 rounded-[10%] font-bold' type='text' ref={inputRef} placeholder='Enter some tasks...'/>
            <button className='border-2 p-2 rounded-[10%] font-bold cursor-pointer border-amber-100 ' onClick={handelTodoAddEdit}>{triggerAddBtn}</button>
        </div>
    )
}
export default AddTodos
