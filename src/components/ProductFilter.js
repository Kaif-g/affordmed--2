import React from 'react';
import { TextField, Button, Grid } from '@mui/material';

const ProductFilter = ({ filters, setFilters, fetchProducts }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <Grid container spacing={2} style={{ marginBottom: '20px' }}>
      <Grid item xs={12} sm={6} md={3}>
        <TextField fullWidth name="company" label="Company" onChange={handleChange} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField fullWidth name="category" label="Category" onChange={handleChange} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField fullWidth name="minPrice" label="Min Price" type="number" onChange={handleChange} />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField fullWidth name="maxPrice" label="Max Price" type="number" onChange={handleChange} />
      </Grid>
      <Grid item xs={12}>
        <Button fullWidth variant="contained" color="primary" onClick={fetchProducts}>Apply Filters</Button>
      </Grid>
    </Grid>
  );
};

export default ProductFilter;
