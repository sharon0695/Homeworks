
import { useState, useEffect } from "react";
import LinkedList from "./estructura/LinkedList";
import './App.css'

function App() {
  const [list] = useState(new LinkedList())
  const [students, setStudents] = useState([])
  const [currentNode, setCurrentNode] = useState(null)
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [code, setCode] = useState('')

  const addStudent = () => {
    console.log("Cliked")
    list.append({ name, age, code})
    if (!currentNode) {
      setCurrentNode(list.head)
    }
    setStudents([...list.toArray()])

    setName('')
    setAge('')
    setCode('')
  }

  const removeStudent = (studentCode) => {
    list.removeByCode(studentCode)
    setStudents([...list.toArray()])
    setCurrentNode(list.current)
  }

  const goToNext = () => {
    const next = list.next()
    setCurrentNode(next)
  }
  const reset = () => {
    list.reset()
    setCurrentNode(list.current)
  }

  useEffect(() => {
    console.log('Lista actualizada:', students)
  }, [students])

  return (
    <div className="App">
      <h1>Lista de Estudiantes</h1>
      
      <input
        placeholder="Name"
        value = {name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Age"
        value = {age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        placeholder="Code"
        value = {code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button onClick={addStudent}>Add Student</button>
      <h2> Estudiantes: </h2>
      {students.length === 0 && <p>No hay estudiantes registrados.</p>}
      {currentNode && (
        <div>
          <p>{currentNode.value.name}</p>
          <p>{currentNode.value.age} años</p>
          <p>{currentNode.value.code}</p>
        </div>
      )}
      <button onClick={goToNext}>Siguiente</button>
      <button onClick={reset}>Resetear Lista</button>
      <button onClick={() => removeStudent(currentNode.value.code)}>Eliminar Estudiante Actual</button>
    </div>
  )
}

export default App
