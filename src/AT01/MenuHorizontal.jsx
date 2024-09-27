import "./menuHorizontal.css";
import logo from "../assets/logo-globo.png";
import { GiHamburgerMenu } from "react-icons/gi";

export default function MenuHorizontal() {
  return (
    <div className="menu-horizontal">
      <div className="container-logo">
        <img className="logo" src={logo} />
      </div>

      <div className="container-items">
        <ul>
          <li>Produtos</li>
          <li>Serviços</li>
          <li>Contato</li>
        </ul>
      </div>

      <div className="container-menu">
        <GiHamburgerMenu className="menu-icon" />
      </div>
    </div>
  );
}
