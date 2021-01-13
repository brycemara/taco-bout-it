import "./AboutUs.css";

function AboutUs() {
  return (
    <section className="about-us">
      <h1>About Us</h1>
      <img
        src="https://media.istockphoto.com/vectors/taco-food-truck-vector-id858252708?k=6&m=858252708&s=170667a&w=0&h=8xWjuMYAebB34b6VQoxlFBnvSnJVALczOqCrWmkq4GE="
        alt="taco truck"
      />
      <div className="about-paragraph">
        <p>
          El Xolo Tacos is interested in showcasing old Mexican culture through
          traditional flavors, adding even more diversity to Austin, TX’s
          multicultural culinary scene. Their name and logo are a nod to
          Xoloitzcuintle, a Mexican dog breed that led people into the underworld
          according to Aztec mythology. It’s not just the name, however, that
          provides insight on Mexican culture. It’s the food, this truck serving
          up countless dishes packed with rich, authentic flavor.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
