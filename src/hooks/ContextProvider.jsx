import TodosContext from "./context";
import React from 'react'
import useLocalStorage from './custom-hooks/useLocalStorage'
const TodosProvider = ({children}) => {
    const [todos, setTodos] = useLocalStorage('todos',[])
    const addTodo=(todoDetails)=>setTodos((prev)=>{
      return [...prev,{...todoDetails}]
    })
    console.log(todos)
  return (
    <TodosContext.Provider value={{todos,addTodo}}>
        {children}
    </TodosContext.Provider>
  )
}
export default TodosProvider