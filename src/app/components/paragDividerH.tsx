import * as React from 'react';
import Box from '@mui/material/Box';

const HorizontalDivider = () => (
    <Box
    sx={{
            
            width: {
            // Wide for horizontal:
            xs: '50vw',
            xl: '40vw'
            },
            height: {
            // Thin for horizontal:
            xs: '2px',
            
            },
            backgroundColor: 'primary.dark',
            margin: {
            xs: '6vh 8px',
            
            },
        }}
    />
);

export default HorizontalDivider;