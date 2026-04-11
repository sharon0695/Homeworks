

function About() {
  return (
    <div className="about">

      <section className="about-hero">
        <h1>Sobre Nosotros</h1>
        <p>
          Aquí tienes toda la información sobre nuestro equipo, misión, visión y valores. Conoce más sobre quiénes somos y qué nos motiva a seguir.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h3>¿Quiénes somos?</h3>
          <p>
            Somos un equipo ....
          </p>
        </div>

        <div className="about-card">
          <h3>Misión</h3>
          <p>
            Nuestra misión es
          </p>
        </div>

        <div className="about-card">
          <h3>Visión</h3>
          <p>
            Nuestra visión es
          </p>
        </div>

        <div className="about-card">
          <h3>Valores</h3>
          <p>
            Nuestros valores son
          </p>
        </div>
      </section>

    </div>
  );
}

export default About;