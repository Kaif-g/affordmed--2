import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../services/api';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProductDetails(productId);
      setProduct(productData);
    };

    fetchProduct();
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <Card>
      <CardMedia
        component="img"
        alt={product.productName}
        height="300"
        image={`https://picsum.photos/300/300?random=${productId}`} // Random image
      />
      <CardContent>
        <Typography variant="h4">{product.productName}</Typography>
        <Typography>Company: {product.company}</Typography>
        <Typography>Category: {product.category}</Typography>
        <Typography>Price: ${product.price}</Typography>
        <Typography>Rating: {product.rating}</Typography>
        <Typography>Discount: {product.discount}%</Typography>
        <Typography>Availability: {product.availability}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
