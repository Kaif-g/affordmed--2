import React from 'react';
import { Card, CardContent, Typography, CardMedia, CardActions, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <Card>
    <CardMedia
      component="img"
      alt={product.productName}
      height="140"
      image={`https://picsum.photos/200/140?random=${product.id}`} // Random image
    />
    <CardContent>
      <Typography variant="h5">{product.productName}</Typography>
      <Typography>Company: {product.company}</Typography>
      <Typography>Category: {product.category}</Typography>
      <Typography>Price: ${product.price}</Typography>
      <Typography>Rating: {product.rating}</Typography>
      <Typography>Discount: {product.discount}%</Typography>
      <Typography>Availability: {product.availability}</Typography>
    </CardContent>
    <CardActions>
      <Button size="small" component={Link} to={`/product/${product.id}`}>View Details</Button>
    </CardActions>
  </Card>
);

export default ProductCard;
