import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const DATA = [
  { id: "todo-0", name: "Estudiar Materia Cálculo II", completed: true }
];

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>,
)