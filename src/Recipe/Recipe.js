import { useEffect, useState } from "react";
import "./Recipe.css";
import { fetchTaco } from "../APIcalls";
import cook from "../assets/cook.png";

function Recipe() {
  const [seasoning, setSeasoning] = useState(null);
  const [shell, setShell] = useState(null);
  const [baseLayer, setBaseLayer] = useState(null);
  const [mixin, setMixin] = useState(null);
  const [condiment, setCondiment] = useState(null);

  useEffect(() => {
    fetchTaco()
      .then((data) => {
        setSeasoning(data.seasoning);
        setShell(data.shell);
        setBaseLayer(data.base_layer);
        setMixin(data.mixin);
        setCondiment(data.condiment);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="recipe">
      <img className="landing-img" src={cook} />
      <h1 className="title">RANDOM TACO RECIPE</h1>
      {seasoning === null && <h2>...Loading...</h2>}
      {condiment !== null && (
        <section className="recipe-details">
          <div className="seasoning">
            <h2>Seasoning: {seasoning.name} </h2>
            <a target="_blank" className="link" href={seasoning.url}>
              Recipe details
            </a>
          </div>
          <div className="shell">
            <h2>Shell: {shell.name} </h2>
            <a target="_blank" className="link" href={shell.url}>
              Recipe details
            </a>
          </div>
          <div className="baseLayer">
            <h2>Base Layer: {baseLayer.name} </h2>
            <a target="_blank" className="link" href={baseLayer.url}>
              Recipe details
            </a>
          </div>
          <div className="mixin">
            <h2>Mixin: {mixin.name} </h2>
            <a target="_blank" className="link" href={mixin.url}>
              Recipe details
            </a>
          </div>
          <div className="condiment">
            <h2>Condiment: {condiment.name} </h2>
            <a target="_blank" className="link" href={condiment.url}>
              Recipe details
            </a>
          </div>
        </section>
      )}
    </section>
  );
}

export default Recipe;
