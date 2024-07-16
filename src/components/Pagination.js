import React from 'react';
import { Pagination as MuiPagination } from '@mui/material';

const Pagination = ({ page, count, onChange }) => (
  <MuiPagination
    page={page}
    count={count}
    onChange={onChange}
  />
);

export default Pagination;
