import './HomePage.css';
import { Link } from 'react-router-dom'

function HomePage() {
  return(
    <section className="homepage-view">
      <div className="taco">
        <h1 className="taco-name">Random Taco of the Day!</h1>
      </div>
      <p>Favorite the taco if you want to see it again!</p>
      <p>Wanna taco bout it?</p>
      <Link to="/recipe" >
        <button className="recipe-button">View Recipe</button>
      </Link>
    </section>
  )
}

export default HomePage;