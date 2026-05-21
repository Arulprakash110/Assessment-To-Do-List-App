function ProductCard({ product }) {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        padding: '15px',
        width: '250px',
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        width='100%'
        height='200'
      />

      <h2>{product.name}</h2>

      <p>{product.description}</p>

      <h3>₹ {product.price}</h3>

      <button>Add To Cart</button>
    </div>
  )
}

export default ProductCard