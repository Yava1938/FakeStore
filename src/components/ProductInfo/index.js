import React from 'react';

const ProductInfo = ({ title, price, category }) => {
  return (
    <article className="product-info">
      <h2>{title}</h2>
      <p><strong>Precio:</strong> ${price}</p>
      <p><strong>Categoría:</strong> {category}</p>
    </article>
  );
};

export default ProductInfo;