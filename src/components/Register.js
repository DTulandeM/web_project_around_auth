function register() {
  return (
    <fieldset>
      <h1>Regístrate</h1>
      <input
        type="text"
        name="email"
        className="form__input"
        id="profile-email"
        placeholder="Correo Electrónico"
        required
      />
      <span id="email-error" className="form__error-visible"></span>
      <input
        type="text"
        name="password"
        className="form__input"
        id="profile-password"
        placeholder="Contraseña"
        required
      />
      <span id="profile-password-error" className="form__error-visible"></span>
      <button name="btnRegister" type="submit" className="form__button">
        Regístrate
      </button>
      <span>¿Ya eres miembro? Inicia sesión aquí</span>
    </fieldset>
  );
}

export default register;
