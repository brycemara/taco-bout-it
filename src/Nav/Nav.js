import { Link } from 'react-router-dom'
import './Nav.css'
import taco from '../assets/tacos.png'

function Nav() {
  return(
    <section className="nav">
    <Link to="/about" className="about">
      <button className="nav-button">ABOUT</button>
    </Link>
    <Link to="/taco-bout-it" className="home">
      <button className="nav-button">
        <img src={taco} alt="home-icon"/>
      </button>
    </Link>
    <Link to="/reviews" className="reviews">
      <button className="nav-button">REVIEWS</button>
    </Link>
    </section>
  )
}

export default Nav;