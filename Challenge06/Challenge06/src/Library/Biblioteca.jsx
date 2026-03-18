import { useState } from 'react'
import stack from './stack'
import Book from './Book'
import './App.css'

function App() {
  const [books, setBooks] = useState(stack.getAll());

  const [form, setForm] = useState({
    name: '',
    ISBN: '',
    author: '',
    editorial: ''
  })

  const addBook = () => {
    const newBook = new Book(form.name, form.ISBN, form.author, form.editorial);
    stack.push(newBook);
    setBooks(stack.getAll());

    setForm({
      name: '',
      ISBN: '',
      author: '',
      editorial: ''
    })
  }

  return (
   <div>
    <h1>Book Stack</h1>
    <div className="form">
      <input type="text" placeholder="Name" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
      <input type="text" placeholder="ISBN" value={form.ISBN} onChange={(e) => setForm({...form, ISBN: e.target.value})} />
      <input type="text" placeholder="Author" value={form.author} onChange={(e) => setForm({...form, author: e.target.value})} />
      <input type="text" placeholder="Editorial" value={form.editorial} onChange={(e) => setForm({...form, editorial: e.target.value})} />
      <button onClick={addBook}>Add Book</button>
    </div>
    <div className="stack">
      <h2>Books in Stack:</h2>
      {books.map((book, index) => (
        <div key={index} className="book">
          <h2>{book.name}</h2>
          <p><strong>ISBN:</strong> {book.ISBN}</p>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Editorial:</strong> {book.editorial}</p>
        </div>
      ))}
    </div>
   </div>
  )
}

export default App
