import responseMovies from '../mocks/results.json'

export const useMovies = () => {
  const movies = responseMovies.Search

  const mapedMovies = movies.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return { movies: mapedMovies }
}
