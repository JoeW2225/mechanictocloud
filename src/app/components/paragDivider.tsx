import * as React from 'react';
import Box from '@mui/material/Box';

const VerticalDivider = () => (
  <Box
    sx={{
      width: '2px',
      height: '170px',
      backgroundColor: 'primary.dark',
      filter: 'blur(0.5px)',
      marginX: 1,
      marginY: 2,
    }}
  />
);

export default VerticalDivider;