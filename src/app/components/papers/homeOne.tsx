'use client'
import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ThemeProvider } from '@mui/system';
import homeTheme from '@/app/styles/homeTheme';
import CloudIcon from '@mui/icons-material/Cloud';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BrushIcon from '@mui/icons-material/Brush';
import CodeIcon from '@mui/icons-material/Code';
import VerticalDivider from'@/app/components/paragDivider';

const WelcomePaper = () => {

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
                        width: 480,
                        height: 250,
                        borderRadius: '10px',
                        fontFamily: 'platypi',
                        fontSize: 30,
                        color: 'rgb(var(--foreground))',
                        backgroundColor: 'rgb(var(--paper-bg))',
                    }}>
                    Welcome to my Portfolio

                    <Paper sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            gap: 2,
                            width: 400,
                            boxShadow: 'none',
                            backgroundColor: 'rgb(var(--paper-bg))', 
                            color: 'primary.dark', 
                            fontSize: 16
                            }}>
                            <CloudIcon /> Hosted on AWS
                            <CodeIcon /> Framework Next.js
                        </Paper>
                            
                        <Paper sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            gap: 2,
                            width: 380,
                            boxShadow: 'none',
                            backgroundColor: 'rgb(var(--paper-bg))', 
                            color: 'primary.dark', 
                            fontSize: 16
                            }}>
                            <DesignServicesIcon /> UI library MUI
                            <BrushIcon /> Tailwind & CSS
                        </Paper>
                </Paper>
            
        </ThemeProvider>
    );
};

export default WelcomePaper