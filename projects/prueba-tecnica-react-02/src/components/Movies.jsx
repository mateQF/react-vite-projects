/* eslint-disable react/prop-types */
function ListOfMovies ({ movies }) {
  return (
    <ul>
      {
        movies.map(movie => (
          <li key={movie.id}>
            <h2>{movie.title}</h2>
            <h3>{movie.year}</h3>
            <img src={movie.poster} alt={movie.title} />
          </li>
        ))
      }
    </ul>
  )
}

function NoMoviesResults () {
  return (
    <p>There are no results</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies.length > 0

  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMoviesResults />
}
