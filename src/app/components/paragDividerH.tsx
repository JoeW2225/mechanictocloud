import * as React from 'react';
import Box from '@mui/material/Box';

export const HorizDividerLg = () => {
    return(
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
    )
}

export const HorizDividerSm = () => {
    return(
        <Box
    sx={{
            
            width: {
            // Wide for horizontal:
            xs: '12rem',
            lg:  '16rem',
            },
            height: {
            // Thin for horizontal:
            xs: '2px',
            
            },
            backgroundColor: 'primary.dark',
            margin: {
            xs: '2vh 8px',
            
            },
        }}
    />
    )
    
}