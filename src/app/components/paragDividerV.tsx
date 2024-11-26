import * as React from 'react';
import Box from '@mui/material/Box';

const VerticalDivider = () => (
  <Box
    sx={{
      // Width and height swap based on orientation
      width: {
        // Wide for horizontal on mobile:
        xs: '170px',
        // Thin for vertical on tablet+:
        sm: '2px'
      },
      height: {
        // Thin for horizontal on mobile:
        xs: '2px',
        // Tall for vertical on tablet+:
        sm: '170px'
      },
      backgroundColor: 'primary.dark',
      margin: {
        xs: '16px 8px',
        sm: '16px 20px'
      },
    }}
  />
);

export default VerticalDivider;