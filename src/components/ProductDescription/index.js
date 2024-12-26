import React from 'react';

const ProductDescription = ({ description }) => {
  return (
    <article className="product-description">
      <h3>Descripción</h3>
      <p>{description}</p>
    </article>
  );
};

export default ProductDescription;