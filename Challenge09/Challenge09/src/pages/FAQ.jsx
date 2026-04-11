
function FAQ() {
  return (
    <div className="faq">

      <section className="faq-hero">
        <h1>Preguntas Frecuentes</h1>
        <p>Respuestas a las dudas más comunes</p>
      </section>

      <section className="faq-list">

        <div className="faq-item">
          <h3>¿Cómo crear una cuenta?</h3>
          <p>Puedes registrarte desde la página principal completando el formulario.</p>
        </div>

        <div className="faq-item">
          <h3>¿Cómo cambiar mi contraseña?</h3>
          <p>Dirígete a la sección de seguridad dentro de configuración.</p>
        </div>

        <div className="faq-item">
          <h3>¿Cómo contactar soporte?</h3>
          <p>Puedes hacerlo desde la sección de contacto.</p>
        </div>

      </section>

    </div>
  );
}

export default FAQ;