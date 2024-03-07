import React from 'react'
import { TodoCard , CardList} from './components'

const App = () => {
  return (
    <>
    <div className='container mx-auto text-center bg-slate-100 text-blue-950'>MY TODO APP</div>
    <main className='grid gap-4 grid-cols-1 mx-auto min-w-max max-w-min md:grid-cols-2'>
    <CardList title='Do'>

    </CardList>
    <CardList title='Decide'>
      
    </CardList>
    <CardList title='Delegate'>
      
    </CardList>
    <CardList title='Delete'>
      
    </CardList>
    </main>
    </>
    
  )
}

export default App