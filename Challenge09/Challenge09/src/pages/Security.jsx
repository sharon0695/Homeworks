
function Security() {
  return (
    <div className="security">

      <section className="security-hero">
        <h1>Seguridad</h1>
        <p>Protege tu cuenta</p>
      </section>

      <section className="security-form">

        <div className="form-group">
          <label>Contraseña actual</label>
          <input type="password" placeholder="********" />
        </div>

        <div className="form-group">
          <label>Nueva contraseña</label>
          <input type="password" placeholder="********" />
        </div>

        <div className="form-group">
          <label>Confirmar contraseña</label>
          <input type="password" placeholder="********" />
        </div>

        <button className="save-btn">Actualizar contraseña</button>

      </section>

    </div>
  );
}

export default Security;