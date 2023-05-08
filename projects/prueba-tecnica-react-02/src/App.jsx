import './App.css'
// import noResults from './mocks/no-results.json'
import { useMovies } from './customHooks/useMovies'
import { Movies } from './components/Movies'

function App () {
  const { movies: mapedMovies } = useMovies()
  return (
    <div className='page'>
      <header>
        <h1>Movies Finder</h1>
        <form className='form'>
          <input type='text' placeholder='Avengers, The Matrix...' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={mapedMovies} />
      </main>
    </div>
  )
}

export default App
