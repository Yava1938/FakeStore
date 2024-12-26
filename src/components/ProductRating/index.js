import React from 'react';

const ProductRating = ({ rating, reviews }) => {
  return (
    <article className="product-rating">
      <p><strong>Calificación:</strong> {rating} ⭐</p>
      <p><strong>Reseñas:</strong> {reviews} opiniones</p>
    </article>
  );
};

export default ProductRating;