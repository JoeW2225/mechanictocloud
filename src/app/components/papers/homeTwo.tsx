'use client'
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/system';
import homeTheme from '@/app/styles/homeTheme';
import LayersIcon from '@mui/icons-material/Layers';


const NamePaper = () => {

    return (
        <ThemeProvider theme={homeTheme}>
            
                
                <Paper
                    elevation={24}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        flexDirection: 'column',
                        margin: 1,
                        width: 400,
                        height: 150,
                        borderRadius: '10px',
                        fontFamily: 'platypi',
                        fontSize: 30,
                        color: 'rgb(var(--foreground))',
                        backgroundColor: 'rgb(var(--paper-bg))',
                    }}>
                        My name is Joe Winter

                        <Paper sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            flexDirection: 'row',
                            gap: 2,
                            width: 300,
                            boxShadow: 'none',
                            backgroundColor: 'rgb(var(--paper-bg))', 
                            color: 'primary.dark', 
                            fontSize: 16
                            }}>
                            <LayersIcon /> a Full-Stack Web Developer
                        </Paper>
                    
                </Paper>
            
        </ThemeProvider>
    );
};

export default NamePaper