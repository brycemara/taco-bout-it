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
          Rando-Taco is interested in showcasing old Mexican culture through
          traditional flavors, adding even more diversity to Austin, TX’s
          multicultural culinary scene. This truck serves up countless dishes
          packed with rich, authentic flavor each day with a new random recipe.
          The idea came to our owner when she realized she could never choose
          what she wanted to eat off the menu. She started telling the waiters
          to pick something random and serve it to her. This worked out better
          than she expected and she started enjoying her meals more without the
          pressure of picking something out on the menu. It also came with a fun
          element of surprise. She also knew Austin locals would express
          interest and engage in her idea, after all, Austin is weird. Thats
          when the Rando-Taco idea started.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
