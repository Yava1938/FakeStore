import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <section className="product-card">
      <article className="product-image">
        <img src={product.image} alt={product.title} />
      </article>
      <article className="product-details">
        <h3>{product.title}</h3>
        <p><strong>Precio:</strong> ${product.price}</p>
        <p><strong>Calificación:</strong> {product.rating.rate} ⭐</p>
        <Link to={`/details/${product.id}`} className="btn">Ver detalles</Link>
      </article>
    </section>
  );
};

export default ProductCard;