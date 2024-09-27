import "./menuVertical.css";
import logo from "../assets/logo-globo.png";
import { GiHamburgerMenu } from "react-icons/gi";

export default function MenuVertical() {
  return (
    <div className="menu-vertical">
      <div className="container-top-wrapper">
        <div className="container-vertical-logo">
          <img className="logo" src={logo} />
        </div>

        <div>
          <GiHamburgerMenu className="menu-icon" />
        </div>
      </div>

      <div className="container-vertical-items">
        <ul>
          <li>Perfil</li>
          <li>Postagens</li>
          <li>Amigos</li>
          <li>Fotos</li>
          <li>Vídeos</li>
          <li>Configurações</li>
        </ul>
      </div>
    </div>
  );
}
