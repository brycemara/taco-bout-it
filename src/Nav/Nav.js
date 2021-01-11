import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
  return(
    <section className="nav">
    <Link to="/about" className="about-us">
      <h2>About Us</h2>
    </Link>
    <Link to="/" className="home">
      <h2>Home</h2>
    </Link>
    <Link to="/locations" className="find-us">
      <h2>Find Us</h2>
    </Link>
    </section>
  )
}

export default Nav;