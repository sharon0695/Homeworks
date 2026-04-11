
function Contact() {
  return (
    <div className="contact">

      <section className="contact-hero">
        <h1>Contacto</h1>
        <p>Estamos aquí para ayudarte</p>
      </section>

      <section className="contact-form">

        <div className="form-group">
          <label>Nombre</label>
          <input type="text" placeholder="Tu nombre" />
        </div>

        <div className="form-group">
          <label>Correo</label>
          <input type="email" placeholder="correo@email.com" />
        </div>

        <div className="form-group">
          <label>Mensaje</label>
          <textarea placeholder="Escribe tu mensaje"></textarea>
        </div>

        <button className="send-btn">Enviar</button>

      </section>

    </div>
  );
}

export default Contact;