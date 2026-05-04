import { ChangeEvent, useEffect, useState } from 'react'
import trie from './data'
import './App.css'
import { Product } from './structures/type'

function App() {

  const [prefijo, setPrefijo] = useState<string>('')
  const [rank, setRank] = useState<number>(3)
  const [results, setResults] = useState<Product[]>([])

  useEffect(() => {
    if(prefijo.length === 0 || rank <= 0){
      setResults([])
      return
    }

    const res = trie.searchTopK(prefijo, rank)
    setResults(res)
  }, [prefijo, rank])

  const handleChangeP = (e: ChangeEvent<HTMLInputElement>) => {
    setPrefijo(e.target.value)
  }

  const handleChangeR = (e: ChangeEvent<HTMLInputElement>) => {
    setRank(Number(e.target.value))
  }


  return (
    <>
      <h1>Busca los productos más populares</h1>
      <div className='search'>
        <h2>¿Qué producto te causa curiosidad?</h2>
        <h3>Escribe el prefijo y el número del rank que quieres ver</h3>
        <div className='input'>
          <input className='search-input' placeholder='Ej: air' value={prefijo} onChange={handleChangeP}></input>
          <input className='search-input-number' type='number' value={rank} onChange={handleChangeR}></input>
        </div>
      </div>

      <div className='results'>
        <h2>Resultados encontrados:</h2>
        {results.length === 0?(
          <p>No hay resultados</p>
        ):(
          results.map((item, index) => (
            <div key={index} className='result-card'>
              <p><strong>{item.name}</strong></p>
              <p>Popularidad: {item.popularity} </p>
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default App
