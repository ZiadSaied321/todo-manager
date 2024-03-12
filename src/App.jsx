import React, { useContext } from 'react'
import { TodoCard , CardList ,AddTask} from './components'
import TodosContext from './hooks/context'

const App = () => {
  const {todos} = useContext(TodosContext)
  console.log(todos)
  return (
    <>
    <div className='flex flex-row justify-center mt-4'>
    <AddTask/>
    </div>
    <main className='grid gap-4 grid-cols-1 items-start mx-auto min-w-max max-w-min sm:grid-cols-2'>
    <CardList title='Do'>
      {todos?.filter((todo)=>todo.select === 'Do').map((todo)=><TodoCard key={todo.id} id={todo.id} title={todo.title} description={todo.description} checked={todo.checked}/>)}
    </CardList>
    <CardList title='Decide'>
    {todos?.filter((todo)=>todo.select === 'Decide').map((todo)=><TodoCard key={todo.id} id={todo.id} title={todo.title} description={todo.description} checked={todo.checked}/>)}
    </CardList>
    <CardList title='Delegate'>
    {todos?.filter((todo)=>todo.select === 'Delegate').map((todo)=><TodoCard key={todo.id} id={todo.id} title={todo.title} description={todo.description} checked={todo.checked}/>)}
    </CardList>
    <CardList title='Delete'>
    {todos?.filter((todo)=>todo.select === 'Delete').map((todo)=><TodoCard key={todo.id} id={todo.id} title={todo.title} description={todo.description} checked={todo.checked}/>)}
    </CardList>
    </main>
    </>
    
    
  )
}

export default App