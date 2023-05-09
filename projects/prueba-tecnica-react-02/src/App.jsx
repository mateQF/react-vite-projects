import './App.css'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { Movies } from './components/Movies'
// import { useRef } from 'react' // value persists, it does not restart with the component, value can change without restart the component

function App () {
  const { movies } = useMovies()
  const { search, setSearch, error } = useSearch()

  const handleSubmit = (e) => {
    e.preventDefault()
    // const inputElement = inputRef.current
    // const value = inputElement.value
    // const value = inputRef.current.value
    // console.log(value)

    // const { query } = Object.fromEntries(new window.FormData(e.target))
    // console.log(query)
    console.log({ search })
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movies Finder</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input style={{ border: '1px solid', borderColor: error ? 'red' : 'transparent' }} value={search} onChange={handleChange} name='query' type='text' placeholder='Avengers, The Matrix...' />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
