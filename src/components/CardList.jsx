import React from 'react'

const CardList = ({title, children ,...rest}) => {
  return (
    <>
    <div className='flex flex-col gap-2 bg-red-100 min-w-80 max-w-max border rounded-md p-4 mt-8'>
    <h1 className='text-center font-bold text-xl bg-red-500 rounded-md py-2 text-slate-100'>{title}</h1>
    {children}
    </div>
    </>
  )
}

export default CardList