import React, { useState } from 'react';

const TodoCard = ({ title, description }) => {
    const [checked, setChecked] = useState(false)
    return (
        <div className="bg-white rounded-lg max-w-80 shadow-md p-4">
            <div className='flex justify-between'>
                <h3 className={`text-lg font-medium mb-2 ${checked?'line-through':null}`}>{title}</h3>
                <input onClick={()=>setChecked(!checked)} type="checkbox" checked={checked} name="done" />
            </div>
            <p className={`truncate text-gray-700 max-h-24 ${checked?'line-through':null}`}>
                {description}
            </p>
        </div>
    );
};

export default TodoCard;
