import React from 'react';
import ProductCard from '../../components/ProductCard'; 

import { useGetProducts } from '../../hooks/getProducts'; 
import './index.css'

const ProductList = () => {
    const { products, loading, error } = useGetProducts();
    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>Error: {error}</p>;
  return (
    <section className="product-list">
      <h1>Lista de Productos</h1>
      <article className="products-container">
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
      </article>
    </section>
  );
};

export default ProductList;