import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./style.css";

function Header() {
  return (
    <header className="main__header">
      <img className="logo" src={logo} alt="Logo de SportSee" />
      <nav className="main__nav">
        <ul>
          <li>
            <NavLink to="/profile/12">Accueil</NavLink>
          </li>
          <li>
            <a href="#">Profil</a>
          </li>
          <li>
            <a href="#">Réglage</a>
          </li>
          <li>
            <a href="#">Communauté</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
