import { useEffect, useState } from 'react'
import API from '../api'
import ProductCard from '../components/ProductCard.jsx'

function Home() {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const res = await API.get('/products')

      console.log(res.data)

      setProducts(Array.isArray(res.data) ? res.data : [])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h1>Products</h1>

      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <p>No Products Found</p>
        )}
      </div>
    </div>
  )
}

export default Home