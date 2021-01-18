import './HomePage.css';
import { Link } from 'react-router-dom'
import { useState } from "react";
import notFav from '../assets/not-favorited.png'
import fav from '../assets/favorited.png'
import austin from '../assets/austin.png'

function HomePage() {
  const [favorite, setFavorite] = useState(notFav)

  const changeFavorite = () => {
    favorite === notFav ? setFavorite(fav) : setFavorite(notFav)
  }
  return(
    <section className="homepage-view">
      <img className="landing" src={austin} alt="Ingredients Image"/>
      <h1 className="welcome">TACQUERO MUCHO</h1>
      <h2 className="taco-name">Check out our taco of the day!</h2>
      <div className="taco">
        <img className="favorite" src={favorite} alt="fav-img" onClick={changeFavorite} />
      </div>
      {favorite === fav && (
        <p className="fav-info">Thanks for favoriting our taco!</p>
      )}
      {favorite !== fav && (
        <p className="fav-info">Favorite the taco if you want to see it again!</p>
      )}
      <Link to="/recipe" className="remove-link">
        <button className="recipe-button">RECIPE</button>
      </Link>
    </section>
  )
}

export default HomePage;