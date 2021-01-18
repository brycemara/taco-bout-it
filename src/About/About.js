import "./About.css";

function About() {
  return (
    <section className="about-us">
      <section>
        <h1 className="about-title">About Taquero Mucho</h1>
        <img
          src="https://media.istockphoto.com/vectors/taco-food-truck-vector-id858252708?k=6&m=858252708&s=170667a&w=0&h=8xWjuMYAebB34b6VQoxlFBnvSnJVALczOqCrWmkq4GE="
          alt="taco truck"
          className="truck-image"
        />
        <div className="about-paragraph">
          <p>
            Tacquero Mucho is interested in showcasing old Mexican culture through
            traditional flavors, adding even more diversity to Austin, TX’s
            multicultural culinary scene. This truck serves up countless dishes
            packed with rich, authentic flavor each day with a new random
            recipe. The idea came to our owner when she realized she could never
            choose what she wanted to eat off the menu. She started telling the
            waiters to pick something random and serve it to her. This worked
            out better than she expected and she started enjoying her meals more
            without the pressure of picking something out on the menu. It also
            came with a fun element of surprise. She also knew Austin locals
            would express interest and engage in her idea, after all, Austin is
            weird. Thats when the Tacquero Mucho idea started.
          </p>
        </div>
      </section>
      <section className="find-us">
        <h1 className="about-title">Come Visit Us!</h1>
        <div className="schedule">
          <div className="time">South Congress, Austin TX M-W 10am-2pm</div>
          <div className="time">Zilker Park (South), Austin TX Th-F 10am-2pm</div>
          <div className="time">First Street, Austin TX Weekends 10am-2pm</div>
        </div>
      </section>
    </section>
  );
}

export default About;
