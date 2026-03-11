import { useState } from 'react'
import Queue from './Queue'
import './App.css'
import ATMdata from './ATM'

function App() {
  const [cola, setCola] = useState(Queue)

  const [form, setForm] = useState({
    name: "",
    amount: 0
  })

  const addPerson = () => {
    const newPerson = new ATMdata(form.name, form.amount, new Date())
    Queue.enqueue(newPerson)
    
  }
  
  return (
    <h1></h1>
  )
}

export default App
