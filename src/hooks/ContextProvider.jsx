import TodosContext from "./context";
import React from 'react'
import useLocalStorage from './custom-hooks/useLocalStorage'
const TodosProvider = ({ children }) => {
  // use local storage to store and retreve todos
  const [todos, setTodos] = useLocalStorage('todos', [])
  // add new todo to the local storage
  const addTodo = (todoDetails) => setTodos((prev) => {
    return [...prev, { ...todoDetails }]
  })
  //delete single todo
  const delTodo = (id) => {
    setTodos(prev => prev.filter((todo) => todo.id != id))

  }
  //check single task as done or todo
  const check = (id) => {
    setTodos(prev=>{
      const index = prev.findIndex((todo)=>todo.id === id)
      prev[index].checked = !prev[index].checked;
      return [...prev]
    })
  }
  return (
    <TodosContext.Provider value={{ todos, addTodo, delTodo, check }}>
      {children}
    </TodosContext.Provider>
  )
}
export default TodosProvider