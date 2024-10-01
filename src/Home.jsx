import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container-home">
      <div className="container-links">
        <h1>Assesment Mobile-First UI com React</h1>
        <div />
        <Link to="/AT01">AT01 - Menu Horizontal com Flex</Link>
        <Link to="/AT02">AT02 - Menu Vertical com Flex e Flex-grow</Link>
        <Link to="/AT03">AT03 - Layout com Flex, Justify e Align</Link>
        <Link to="/AT04">AT04 - Layout com CSS Grid</Link>
        <Link to="/AT05">AT05 - Layout Responsivo</Link>
        <Link to="/AT06">AT06 - Lista de Compras</Link>
      </div>
    </div>
  );
}
