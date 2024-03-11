import React from 'react'

const CardList = ({title, children ,...rest}) => {
  let titleBg = 'bg-red-500';
  let colBg = 'bg-red-100';
  
  if(title == 'Do'){
    titleBg='bg-blue-500';
    colBg='bg-blue-100'
  }
  else if(title == 'Delegate'){
    titleBg='bg-green-500';
    colBg='bg-green-100'
  }
  else if(title == 'Decide'){
    titleBg='bg-teal-500';
    colBg='bg-teal-100'
  }
  else{
    titleBg='bg-red-500'
    colBg='bg-red-200'
  }
  return (
    <>
    <div className={`flex flex-col gap-2 min-w-80 max-w-max border rounded-md p-4 mt-8 ${colBg}`}>
    <h1 className={`text-center font-bold text-xl bg-red-500 rounded-md py-2 text-slate-100 ${titleBg}`}>{title}</h1>
    {children}
    </div>
    </>
  )
}

export default CardList