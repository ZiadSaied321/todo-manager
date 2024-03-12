import React, { useContext } from 'react';
import TodosContext from '../hooks/context';

const TodoCard = ({ title, description, checked , id}) => {
    const {delTodo , check} = useContext(TodosContext)
    return (
        <div className="bg-white rounded-lg max-w-80 shadow-md p-4 mt-4">
            <div className='flex justify-between'>
                <h3 className={`text-lg font-medium mb-2 ${checked?'line-through':null}`}>{title}</h3>
                <input onChange={()=>check(id)} type="checkbox" checked={checked} name="done" />
            </div>
            <p className={`truncate text-gray-700 max-h-24 ${checked?'line-through':null}`}>
                {description}
            </p>
            <button onClick={()=>delTodo(id)} className='bg-red-300 mt-2 text-red-50 px-1 py-0.5 rounded-md' >delete</button>
        </div>
    );
};

export default TodoCard;
