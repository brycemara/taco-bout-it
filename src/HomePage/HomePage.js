import './HomePage.css';
import { Link } from 'react-router-dom'

function HomePage() {
  return(
    <section className="homepage-view">
      <div className="taco">
        <h1 className="taco-name">Taco Name</h1>
      </div>
      <p>Wanna taco bout it?</p>
      <p>Favorite the taco if you want to see it again!</p>
      <Link to="/recipe" >
        <button className="recipe-button">View Recipe</button>
      </Link>
    </section>
  )
}

export default HomePage;