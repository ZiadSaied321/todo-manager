import { Dialog } from '@headlessui/react'
import React, { useState, useContext } from 'react'
import TodosContext from '../hooks/context'
import { uid } from 'uid';

const AddTask = () => {
  const { addTodo } = useContext(TodosContext)
  const [model, setModel] = useState(false)
  const [data, setData] = useState({
    title: '',
    description: '',
    select: 'Do',
    checked:false,
  })

  const dataHandler = (action) => {
    const name = action.target.name;
    const value = action.target.value;
    setData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <button onClick={() => setModel(true)} className='bg-blue-500 px-8 py-1 rounded-full font-bold text-white shadow-inner drop-shadow hover:bg-blue-800 transition-colors'>ADD Task</button>
      <Dialog className='bg-blue-400 min-w-max p-4 border rounded-md mt-4 mx-auto absolute top-0 left-[50%] translate-x-[-50%] z-50' open={model} onClose={() => setModel(false)}>
        <Dialog.Panel>
          <Dialog.Title>
            Add New Task
          </Dialog.Title>
          <label htmlFor="task-title">Title: </label>
          <br />
          <input onChange={dataHandler} value={data.title} name='title' className='w-full px-1' id='task-title' type="text" />
          <br />
          <label htmlFor="task-description">Description: </label>
          <br />
          <textarea className='px-1' onChange={dataHandler} value={data.description} name="description" id="task-description" cols="30" rows="10"></textarea>
          <br />
          <select onChange={dataHandler} value={data.select} name='select' className='my-2 border rounded-md w-full'>
            <option>Do</option>
            <option>Decide</option>
            <option>Delegate</option>
            <option>Delete</option>
          </select>
          <div className="flex gap-2 justify-between">
            <button onClick={() => {
              addTodo({...data,id:uid()});
              setData({
                title: '',
                description: '',
                select: 'Do',
                checked:false
              })
              setModel(false)
            }} className='text-white font-bold bg-blue-600 rounded-full px-2 py-1'>ADD TO THE LIST</button>
            <button onClick={() => setModel(false)} className='mx-auto text-red-400 font-bold bg-red-100 rounded-full px-2 py-1'>CANCEL</button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}

export default AddTask