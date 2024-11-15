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
                        background: 'rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                        backdropFilter: 'blur(3.5px)',
                        WebkitBackdropFilter: 'blur(3.5px)',
                    }}>
                    Welcome
                </Paper>
            
        </ThemeProvider>
    );
};

export default PaperWithTheme