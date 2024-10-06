import logo from "../images/logo_aroundUSA.svg";

function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Logo de Alredero de EE.UU."
        className="header__logo"
        id="header-logo"
      />
      <nav className="navBar">
        <p className="navBar__text">Iniciar Sesión</p>
      </nav>
    </header>
  );
}
export default Header;
