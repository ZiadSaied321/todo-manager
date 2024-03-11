import React from 'react'
import { TodoCard , CardList ,AddTask} from './components'
import TodosProvider from './hooks/ContextProvider'

const App = () => {
  return (
    <TodosProvider>
    <div className='flex flex-row justify-center mt-4'>
    <AddTask/>
    </div>
    <main className='grid gap-4 grid-cols-1 mx-auto min-w-max max-w-min sm:grid-cols-2'>
    <CardList title='Do'>

    </CardList>
    <CardList title='Decide'>
      
    </CardList>
    <CardList title='Delegate'>
      
    </CardList>
    <CardList title='Delete'>
      
    </CardList>
    </main>
    </TodosProvider>
    
  )
}

export default App