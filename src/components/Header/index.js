import { Link } from 'react-router-dom';
import './index.css';  

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/" className="nav-link">Inicio</Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">Lista de Productos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;