import './App.css';
import Nav from '../Nav/Nav'
import { Route, Switch } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import Recipe from '../Recipe/Recipe'
import AboutUs from '../AboutUs/AboutUs'

function App() {
  return (
    <main>
    <Nav />
      <main>
        <Switch>
        <Route path="/about" component={AboutUs}/>
        {/* <Route path="/locations" component={}/> */}
        <Route path="/recipe" component={Recipe}/> 
        <Route exact path="/" component={HomePage}/>
        <Route render={() => 
          <h1>Page does not exist</h1>}/>
        </Switch>
      </main>
    </main>
  );
}

export default App;
