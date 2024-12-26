import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductById } from '../../hooks/getProducts'; 
import ProductImage from '../../components/ProductImage';
import ProductInfo from '../../components/ProductInfo';
import ProductDescription from '../../components/ProductDescription';
import ProductRating from '../../components/ProductRating';
import './index.css'

const ProductDetails = () => {
  const { id } = useParams();
  const { product, loading, error } = useGetProductById(id);

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="product-details">
      <h1>Detalles del Producto</h1>
      <ProductImage image={product.image} alt={product.title} />
      <ProductInfo title={product.title} price={product.price} category={product.category} />
      <ProductDescription description={product.description} />
      <ProductRating rating={product.rating.rate} reviews={product.rating.count} />
    </section>
  );
};

export default ProductDetails;