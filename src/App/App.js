import "./App.css";
import Nav from "../Nav/Nav";
import { Route, Switch } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Recipe from "../Recipe/Recipe";
import About from "../About/About";
import Reviews from "../Reviews/Reviews";

function App() {
  return (
    <main>
      <Nav />
      <main>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/recipe" component={Recipe} />
          <Route exact path="/taco-bout-it" component={HomePage} />
          <Route render={() => <h1>Page does not exist</h1>} />
        </Switch>
      </main>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
      </style>
    </main>
  );
}

export default App;
