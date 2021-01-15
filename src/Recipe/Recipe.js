import { useEffect, useState } from "react";
import "./Recipe.css";
import { fetchTaco } from '../APIcalls'

function Recipe() {
  const [seasoning, setSeasoning] = useState(null);
  const [shell, setShell] = useState(null);
  const [baseLayer, setBaseLayer] = useState(null);
  const [mixin, setMixin] = useState(null);
  const [condiment, setCondiment] = useState(null);

  useEffect(() => {
    fetchTaco()
    .then((data) => {
      setSeasoning(data.seasoning)
      setShell(data.shell)
      // sometimes shell comes up as naan 
      // maybe implement some sad path to take care of that
      setBaseLayer(data.base_layer)
      setMixin(data.mixin)
      setCondiment(data.condiment)
      })
    .catch((error) => console.log(error));
  }, []);

  return(
    <section className="recipe">
      <h1>Random Taco Recipe</h1>
      {seasoning === null && (
        <h2>...Loading...</h2>
      )}
      {condiment !== null && (
        <section className="recipe-details">
          <h2>Seasoning: {seasoning.name} </h2>
          <h2>Shell: {shell.name} </h2>
          <h2>Base Layer: {baseLayer.name} </h2>
          <h2>Mixin: {mixin.name} </h2>
          <h2>Condiment: {condiment.name} </h2>
        </section>
      )}
      
    </section>
  )
}

export default Recipe;