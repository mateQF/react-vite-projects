import { useState } from 'react'
import { searchMovies } from '../services/movies'

export const useMovies = ({ search }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getMovies = async () => {
    try {
      setLoading(true)
      setError(null)
      const mapedMovies = await searchMovies({ search })
      setMovies(mapedMovies)
    } catch (error) {
      setError(error.message)
      throw new Error('Error getting movies from API')
    } finally {
      setLoading(false)
    }
  }

  return { movies, getMovies, loading, error }
}
