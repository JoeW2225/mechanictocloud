'use client'
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ThemeProvider, useTheme } from '@mui/system';

const PaperWithTheme = () => {
    const currentTheme = useTheme();


    return (
        <ThemeProvider theme={currentTheme}>
            
                
                <Paper
                    elevation={24}
                    sx={{
                        width: 400,
                        height: 200,
                        borderRadius: '10px',
                        fontFamily: 'platypi',
                        fontSize: 30,
                        backgroundImage: `url(/images/exclusivePaper.webp)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    Welcome
                </Paper>
            
        </ThemeProvider>
    );
};

export default PaperWithTheme