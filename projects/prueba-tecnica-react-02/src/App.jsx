import './App.css'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { Movies } from './components/Movies'
import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)

  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debouncedMovies = useCallback(debounce((search) => {
    getMovies({ search })
  }, 300), [])

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ search })
  }

  const handleChange = (e) => {
    const newSearch = e.target.value
    setSearch(newSearch)
    debouncedMovies(newSearch)
  }

  const handleSort = (e) => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movies Finder</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input style={{ border: '1px solid', borderColor: error ? 'red' : 'transparent' }} value={search} onChange={handleChange} name='query' type='text' placeholder='Avengers, The Matrix...' />
          <input type='checkbox' checked={sort} onChange={handleSort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {
          loading
            ? <p>Loading.....</p>
            : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
