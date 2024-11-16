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
                        width: 300,
                        height: 100,
                        borderRadius: '10px',
                        fontFamily: 'platypi',
                        fontSize: 30,
                        color: 'rgb(var(--foreground))',
                        backgroundColor: 'rgb(var(--paper-bg))',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center'
                        
                    }}>
                    Hello & Welcome
                </Paper>
            
        </ThemeProvider>
    );
};

export default PaperWithTheme