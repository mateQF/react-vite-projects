import { Products } from './components/Products'
import { Header } from './components/Header'
import { useFilter } from './hooks/useFilter'
import { products as initialProducts } from './mocks/products.json'
import { useState } from 'react'

function App () {
  const [products] = useState(initialProducts)
  const { setFilters, filterProducts } = useFilter()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  )
}

export default App
