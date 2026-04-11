
function Profile() {
  return (
    <div className="profile">

      <section className="profile-hero">
        <h1>Perfil</h1>
        <p>Administra tu información personal</p>
      </section>

      <section className="profile-form">

        <div className="form-group">
          <label>Nombre</label>
          <input type="text" placeholder="Tu nombre" />
        </div>

        <div className="form-group">
          <label>Correo electrónico</label>
          <input type="email" placeholder="correo@email.com" />
        </div>

        <div className="form-group">
          <label>Teléfono</label>
          <input type="text" placeholder="Tu número" />
        </div>

        <button className="save-btn">Guardar cambios</button>

      </section>

    </div>
  );
}

export default Profile;