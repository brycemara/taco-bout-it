import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return(
    <section className="nav">
    <Link to="/about" className="about-us">
      <button>About Us</button>
    </Link>
    <Link to="/" className="home">
      <button>Home</button>
    </Link>
    <Link to="/locations" className="find-us">
      <button>Find Us</button>
    </Link>
    </section>
  )
}

export default Nav;