import React from 'react'
import ReactDOM from 'react-dom/client'
import TodosProvider from './hooks/ContextProvider'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <TodosProvider>
        <App />
    </TodosProvider>
    ,)
