import './HomePage.css';
import { Link } from 'react-router-dom'
import { useState } from "react";
import notFav from '../assets/not-favorited.png'
import fav from '../assets/favorited.png'

function HomePage() {
  const [favorite, setFavorite] = useState(notFav)

  const changeFavorite = () => {
    favorite === notFav ? setFavorite(fav) : setFavorite(notFav)
  }
  return(
    <section className="homepage-view">
      <h1 className="taco-name">Random Taco of the Day!</h1>
      <div className="taco">
        <img className="favorite" src={favorite} alt="fav-img" onClick={changeFavorite} />
      </div>
      {favorite === fav && (
        <p>Thanks for favoriting our taco!</p>
      )}
      {favorite !== fav && (
        <p>Favorite the taco if you want to see it again!</p>
      )}
      <p>Wanna taco bout it?</p>
      <Link to="/recipe" >
        <button className="recipe-button">View Recipe</button>
      </Link>
    </section>
  )
}

export default HomePage;