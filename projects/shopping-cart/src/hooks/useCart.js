import { useContext } from 'react'
import { CartContext } from '../context/cart'

export const useCart = () => {
  const context = useContext(CartContext)

  // verify the access
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
