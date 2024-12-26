import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; 

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Bienvenido a Fake Store</h1>
        <p>Explora una amplia variedad de productos Fake a increíbles precios</p>
      </header>

      <section className="home-content">
        <h2>¿Qué estás buscando hoy?</h2>
        <p>Descubre productos electrónicos fake, ropa, accesorios y mucho más.</p>

        {/* Botón para ir a la lista de productos */}
        <Link to="/products" className="explore-button">
          Explorar Productos
        </Link>
      </section>

      <footer>
        <p>&copy; 2024 Tienda Virtual</p>
      </footer>
    </div>
  );
};

export default HomePage;