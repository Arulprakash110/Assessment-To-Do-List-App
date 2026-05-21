import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        gap: '20px',
        padding: '20px',
        background: '#222',
      }}
    >
      <Link to='/' style={{ color: 'white' }}>
        Home
      </Link>

      <Link to='/cart' style={{ color: 'white' }}>
        Cart
      </Link>

      <Link to='/login' style={{ color: 'white' }}>
        Login
      </Link>

      <Link to='/register' style={{ color: 'white' }}>
        Register
      </Link>
    </nav>
  )
}

export default Navbar