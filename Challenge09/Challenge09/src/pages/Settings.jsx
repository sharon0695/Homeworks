
function Settings() {
  return (
    <div className="settings">

      <section className="settings-hero">
        <h1>Configuración</h1>
        <p>Administra tu cuenta y ajusta tus preferencias</p>
      </section>

      <section className="settings-options">

        <div className="settings-card">
          <h3>Perfil</h3>
          <p>Gestiona tu información personal y datos de usuario.</p>
        </div>

        <div className="settings-card">
          <h3>Seguridad</h3>
          <p>Administra tu contraseña y opciones de seguridad.</p>
        </div>

      </section>

    </div>
  );
}

export default Settings;