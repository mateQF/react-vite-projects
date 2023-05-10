import { useRef, useState, useMemo, useCallback } from 'react' 
// useRef: value persists, it does not restart with the component, value can change without restart the component
// useMemo: memorizar el resultado de una función de cálculo costosa y evitar que se recalcule en cada renderizado del componente.
// useCallback -> same as useMemo, but it is better for functions

import { searchMovies } from '../services/movies'

export const useMovies = ({ search, sort }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previusSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
      if (search === previusSearch.current) return 
      try {
        setLoading(true)
        setError(null)
        previusSearch.current = search
        const mapedMovies = await searchMovies({ search })
        setMovies(mapedMovies)
      } catch (error) {
        setError(error.message)
        throw new Error('Error getting movies from API')
      } finally {
        setLoading(false)
      }
    }
  )

  const sortedMovies = useMemo(() => {
    return sort // localeCompare -> verify tildes
     ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
     : movies
  }, [sort, movies]) // dependencies work like useEffect, when sort changes or movies change

  return { movies: sortedMovies, getMovies, loading, error }
}
