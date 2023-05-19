import './Product.css'
import { AddToCartIcon } from './Icons'

export function Products ({ products }) { // eslint-disable-line
  return (
    <main className='products'>
      <ul>
        {products.slice(0, 10).map(product => ( // eslint-disable-line
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
